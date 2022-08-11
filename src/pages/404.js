import { Header } from "../components/Header.js";
import { Link } from "../components/Link.js";
import { Article } from "../components/Article.js";
import { Footer } from "../components/Footer.js";

export const ErrorPage = () => {
        document.title = "404 Page Not Found";
        return (
                /*html*/
                `
                <body>
                    ${Header()}
                    <main>
                        ${Article(
                            /*html*/
                            `
                                <h1>404 Not Found</h1>
                                <p>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </p>
                            `
                        )}
                    </main>

                    ${Footer()}
                </body>
                `
        );
}