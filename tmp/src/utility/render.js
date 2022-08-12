import { Index } from '../pages/Index.js';
import { About } from '../pages/About.js';
import { Test } from '../pages/chapter1/Test.js';
import { P5test } from '../pages/P5test.js';
import { ErrorPage } from '../pages/404.js';

// 上の階層のパス
export const UPPER_PATH = '/dist';

/**
 * @param {string} path レンダリングするページ
 * @param {function} func レンダリング時に実行する関数
 */
export const render = (path, func) =>{
    const app = document.querySelector('#app');
    func();
    switch (path) {
        case '/':
        case '/index.html':
            app.innerHTML = Index();
            break;
        case '/about.html':
            app.innerHTML = About();
            break;
        case '/chapter1/test.html':
            app.innerHTML = Test();
            break;
        case '/p5test.html':
            app.innerHTML = P5test();
            break;
        default:
            app.innerHTML = ErrorPage();
            break;
    }
}