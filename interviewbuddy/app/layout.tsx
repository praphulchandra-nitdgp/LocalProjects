import { title } from "process"
import "./global.css"
import "./page"
export const metadata = {
    title: "InterviewBuddy",
    description: "The place where you can get ready for Interview!"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>{ children }</body>
        </html>
    )
}

export default RootLayout