import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { Article } from '../components/Article.js';
import { Link } from '../components/Link.js';

export const About = () => {
        document.title = 'About';
        return (
                /*html*/
                `
                <body>
                    ${Header()}
                    <main>
                        ${Article(
                            /*html*/
                            `
                                <h3>About</h3>
                                <p>about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about about </p>
                            `
                        )}
                        ${Link('Link', '/chapter1/test.html', {className: 'btn btn-primary'})}
                        ${Link('404 Page', '/not-found', {className: 'btn btn-primary'})}
                        ${Link('p5.js', '/p5test.html', {className: 'btn btn-primary'})}
                    </main>
                    ${Footer()}
                </body>
                `
    )
}