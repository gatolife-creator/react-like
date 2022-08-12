import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { Article } from '../components/Article.js';
import { Script } from '../components/Script.js';
import { Link } from '../components/Link.js';

// TODO p5.jsが正常に動作するように改善する。
// スクリプトがうまく動かない
export const P5test = () =>{
        return (
                /*html*/
                `
            ${Header()}<main>${Article(/*html*/`<div>${new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()}</div>`)}
                ${Link('Link', '/chapter1/test.html', {className: 'btn btn-primary'})}
                ${Link('404 Page', '/not-found', {className: 'btn btn-primary'})}
                ${Link('p5.js', '/p5test.html', {className: 'btn btn-primary'})}</main>${Script(/*javascript*/`
                console.log("run p5.js")
                var p1 = new Point(0, 0);
                var p2 = new Point(100, 200);
                var p3 = new Point(300, 100);
                var tri = new Triangle(p1, p2, p3);
                function setup() {
                    createCanvas(600, 400);
                }
                function draw() {
                    background(30);
                    noFill();
                    stroke("white");
                    strokeWeight(2);
                    tri.draw();
                    stroke("red");
                    strokeWeight(10);
                    tri.getBarycenter().draw();
                }
            `)}
            ${Footer()}
        `
    )
}