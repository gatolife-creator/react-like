import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Article } from "../components/Article.js";
import { Link } from "../components/Link.js";
import { Image } from "../components/Image.js";

export const Index = () =>{
        document.title = "Index";
        return (
                /*html*/
                `<body>${Header()}<main>${Article(
                            /*html*/
                            `<h3>Index</h3><p>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home</p>`
                        )}
                        ${Link("Link", "/chapter1/test.html", {className: "btn btn-primary"})}
                        ${Link("404 Page", "/not-found", {className: "btn btn-primary"})}
                        ${Link("p5.js", "/p5test.html", {className: "btn btn-primary"})}
                        ${Image("%PUBLIC_IMAGE%FPVjvcsaAAsXp7c.jpeg", {scale: "80%"})}</main>${Footer()}</body>`
    );
}