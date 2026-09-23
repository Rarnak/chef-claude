import Markdown from "react-markdown"

export default function LlamaRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Llama Recommends</h2>
            <Markdown>{props.recipe}</Markdown>
        </section>
    )
}