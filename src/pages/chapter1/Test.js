import { Header } from "../../components/Header.js"
import { Footer } from "../../components/Footer.js"
import { Article } from "../../components/Article.js"

export const Test = () => {
        document.title = "Test";
        return (
                /*html*/
                `
                <body>
                    ${Header()}
                    <main>
                        ${Article(
                            /*html*/
                            `
                                <h3>やんのかこら</h3>
                                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                            `
                        )}

                    </main>
                    ${Footer()}
                </body>
                `
    )
}