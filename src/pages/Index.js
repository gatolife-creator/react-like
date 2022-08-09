import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Article } from "../components/Article.js";
import { Link } from "../components/Link.js";

export const Index = () => {
        return (
                /*html*/
                `
                <body>
                    ${Header()}
                    ${Link("Link", "/chapter1/test.html", {className: ""})}
                    <main>
                        ${Article(
                            /*html*/
                            `
                                <h3>ビルドテスト。うまくいってるかな？</h3>
                                <p>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home </p>
                            `
                        )}
                    </main>

                    ${Footer()}
                </body>
                `
    );
}