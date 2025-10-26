import { DataAPIClient } from "@datastax/astra-db-ts";
import OpenAI from "openai";
import { PuppeteerWebBaseLoader } from "@langchain/community/document_loaders/web/puppeteer";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import puppeteer from "puppeteer";
import "dotenv/config";

type SimilarityMetric = "dot_product" | "cosine" | "euclidean";

const {
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  OPENAI_API_KEY,
} = process.env;

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const InterviewData = [
  'https://www.geeksforgeeks.org/company-interview-corner/',
    'https://leetcode.com/discuss/interview-question',
    'https://www.glassdoor.co.in/Reviews/index.htm',
    'https://www.glassdoor.co.in/Interview/index.htm',
    'https://github.com/jwasham/coding-interview-university',
    'https://github.com/afteracademy/interview-preparation-a-to-z',
    'https://github.com/mission-peace/interview/wiki',
    'https://leetcode.com/company/',
    'https://github.com/donnemartin/system-design-primer',
    'https://github.com/yangshun/tech-interview-handbook',
    'https://github.com/kamranahmedse/developer-roadmap',
    'https://www.interviewbit.com/practice/',
    'https://www.scaler.com/topics/',
    'https://www.reddit.com/r/cscareerquestions/',
    'https://www.hackerearth.com/practice/',
    'https://codeforces.com/blog',
    'https://www.teamblind.com/',
];

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN!);
const db = client.db(ASTRA_DB_API_ENDPOINT!, { keyspace: ASTRA_DB_NAMESPACE });

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 512,
  chunkOverlap: 100,
});

// Sleep function to add delay between requests
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const createCollection = async () => {
  const res = await db.createCollection(ASTRA_DB_COLLECTION!, {
    vector: {
      dimension: 1536,
      metric: "dot_product",
    },
  });
  console.log("Collection created:", res.name);
};

const loadSampleData = async () => {
  const collection = await db.collection(ASTRA_DB_COLLECTION!);

  for await (const url of InterviewData.slice(0, 5)) {
    const content = await scrapePage(url);
    const chunks = await splitter.splitText(content);

    for await (const chunk of chunks) {
      try {
        const embedding = await openai.embeddings.create({
          model: "text-embedding-3-small",
          input: chunk,
          encoding_format: "float",
        });

        const vector = embedding.data[0].embedding;

        const res = await collection.insertOne({
          $vector: vector,
          text: chunk,
        });


        // 🔁 Throttle to prevent rate limits
        await sleep(500); // 500ms delay
      } catch (err: any) {
        console.error("Embedding failed:", err.message);
        // Optional: Backoff & retry
        await sleep(1000);
      }
    }
  }
};

const scrapePage = async (url: string) => {
  const loader = new PuppeteerWebBaseLoader(url, {
    launchOptions: {
      headless: true,
    },
    gotoOptions: {
      waitUntil: "domcontentloaded",
    },
    evaluate: async (page, browser) => {
      const result = await page.evaluate(() => {
        const article = document.querySelector("main, article");
        return (article as HTMLElement)?.innerText || document.body.innerText;
      });
      await browser.close();
      return result;
    },
  });

  const docs = await loader.load();
  return docs[0].pageContent;
};

createCollection().then(() => loadSampleData());

