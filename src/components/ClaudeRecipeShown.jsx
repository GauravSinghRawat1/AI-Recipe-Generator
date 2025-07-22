import ReactMarkdown from 'react-markdown'
export default function ClaudeRecipeShown(props){
    return(
        <section className= "section2" >
            <h2>ChefClaude Recommmends:</h2>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}