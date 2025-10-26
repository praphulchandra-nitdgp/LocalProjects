import PromptSuggestionButton from "./PromptSuggestionButton"

const PromptSuggestionRow = ({onPromptClick}) => {
    
    const prompts = [
        "Give me a list of DSA topics to prepare for a coding interview.",
        "What kind of questions should I expect in a Microsoft SDE interview?",
        "Suggest some beginner-friendly projects to add to my resume.",
        "How do I answer: Tell me about yourself?"
    ]

    return (
        <div className="prompt-suggestion-row">
            {prompts.map((prompt, index) => 
            <PromptSuggestionButton 
                key={`suggestion-${index}`} 
                text={prompt}
                onClick={() => onPromptClick(prompt)}
            /> )}
        </div>
    )
}

export default PromptSuggestionRow