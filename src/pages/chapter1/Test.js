import { Header } from '../../components/Header.js'
import { Footer } from '../../components/Footer.js'
import { Article } from '../../components/Article.js'
import { Link } from '../../components/Link.js'
import { Floating } from '../../components/Floating.js'
import { Sidebar } from '../../components/Sidebar.js'

export const Test = () => {
        document.title = 'Test';
        return (
                /*html*/
                `
                <body>
                    ${Header()}
                    ${Sidebar()}
                    <main>
                        ${Article(
                            /*html*/
                            `
                                <h3>やんのかこら</h3>
                                <p>test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                            `
                        )}
                        ${Link('Link', '/chapter1/test.html', { className: 'btn btn-primary' })}
                        ${Link('404 Page', '/not-found', { className: 'btn btn-primary' })}
                        ${Link('p5.js', '/p5test.html', { className: 'btn btn-primary' })}
                    </main>
                    ${Floating('format_list_bulleted', {className: 'NavBtn'})}
                    ${Footer()}
                </body>
                `
    )
}