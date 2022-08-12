import { Header } from '../components/Header.js';
import { Link } from '../components/Link.js';
import { Article } from '../components/Article.js';
import { Footer } from '../components/Footer.js';
import { Floating } from '../components/Floating.js';
import { Sidebar } from '../components/Sidebar.js';

export const ErrorPage = () =>{
        document.title = '404 Page Not Found';
        return (
                /*html*/
                `<body>${Header()}
                    ${Sidebar()}<main>${Article(
                            /*html*/
                            `<h1>404 Not Found</h1><p>Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home</p>`
                        )}
                        ${Link('Link', '/chapter1/test.html', { className: 'btn btn-primary' })}
                        ${Link('404 Page', '/not-found', { className: 'btn btn-primary' })}
                        ${Link('p5.js', '/p5test.html', { className: 'btn btn-primary' })}</main>${Floating('format_list_bulleted', {className: 'NavBtn'})}
                    ${Footer()}</body>`
        );
}