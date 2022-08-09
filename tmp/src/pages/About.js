import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Article } from "../components/Article.js";

export const About = () =>{
        return (
                /*html*/
                `<body>${Header()}<main>${Article(
                            /*html*/
                            `<h3>これはビルドテストです。</h3><p>about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about</p>`
                        )}</main>${Footer()}</body>`
    )
}