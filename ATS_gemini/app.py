from dotenv import load_dotenv

load_dotenv()

import streamlit as st
import os
from PIL import Image
import io
import base64
import pdf2image
import google.generativeai as genai

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def get_gemini_response(system_prompt, pdf_parts, job_description):
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content([system_prompt, *pdf_parts, job_description])
    return response.text

def input_pdf_setup(uploaded_file):
    """
    Convert every page of an uploaded PDF to JPEG and
    return a list of {mime_type, data} dicts for Gemini.
    """
    if uploaded_file is None:
        raise FileNotFoundError("No file uploaded")

    # Convert PDF → list of PIL images
    images = pdf2image.convert_from_bytes(
        uploaded_file.read(),
        poppler_path="/opt/homebrew/bin"          # adjust if needed
    )

    pdf_parts = []
    for page in images:                          # loop through all pages
        buf = io.BytesIO()
        page.save(buf, format="JPEG", quality=90)
        encoded = base64.b64encode(buf.getvalue()).decode()

        pdf_parts.append({
            "mime_type": "image/jpeg",
            "data": encoded
        })

    return pdf_parts

st.set_page_config(page_title="ATS Resume Scanner")
st.header("ATS Tracking System")
input_text=st.text_area("Job Description: ", key="input")
uploaded_file=st.file_uploader("Upload your resume in PDF...", type=["pdf"])

if uploaded_file is not None:
    st.write("PDF Uploaded Successfully...")

submit1 = st.button("Tell Me About the Resume")

submit2 = st.button("How Can I Improvise my Skills")

submit3 = st.button("Percentage match")

input_prompt1 = """
 You are an experienced HR with Tech Experience in the field of any one of Data Science, Full Stack Web Development, Big Data Engineering, DevOps, Data Analyst, your task is to review the provided resume against the job description for these profiles. 
  Please share your professional evaluation on whether the candidate's profile aligns with the role. 
 Highlight the strengths and weaknesses of the applicant in relation to the specified job requirements.
"""

input_prompt2 = """
 You are an experienced HR with Tech Experience in the field of Data Science, Full Stack Web Development, Big Data Engineering, DevOps, Data Analyst, your task is to review the provided resume against the job description for these profiles. 
  Share your insights on the Candidate's Suitability for the role from the HR's perspective.
  Additionally, offer advice on enhancing candidate's skillset and identify areas.
"""

input_prompt3 = """
You are an skilled ATS (Applicant Tracking System) scanner with a deep understanding of any one job role Data Science, Full Stack Web Development, Big Data Engineering, DevOps, Data Analyst and deep ATS functionality, 
your task is to evaluate the resume against the provided job description. Give me the percentage of match if the resume matches
the job description. First the output should come as percentage and then keywords missing and last final thoughts.
Also highlight the necessary skill that are required to match the job description more efficiently.
"""

if submit1:
    if uploaded_file is not None:
        pdf_content=input_pdf_setup(uploaded_file)
        response=get_gemini_response(input_prompt1, pdf_content, input_text)
        st.subheader("The Response is: ")
        st.write(response)
    else:
        st.write("Please upload the resume")
elif submit2:
    if uploaded_file is not None:
        pdf_content=input_pdf_setup(uploaded_file)
        response=get_gemini_response(input_prompt2, pdf_content, input_text)
        st.write(response)
    else:
        st.write("Please upload the resume")
elif submit3:
    if uploaded_file is not None:
        pdf_content=input_pdf_setup(uploaded_file)
        response=get_gemini_response(input_prompt3, pdf_content, input_text)
        st.write(response)
    else:
        st.write("Please upload the resume")