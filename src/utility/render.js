import { Index } from "../pages/Index.js";
import { About } from "../pages/About.js";
import { Test } from "../pages/chapter1/Test.js";

const app = document.querySelector("#app");

let currentPage = location.pathname;

currentPage = location.pathname;

switch (currentPage) {
    case "/":
    case "/index.html":
        app.innerHTML = Index();
        break;
    case "/about.html":
        app.innerHTML = About();
        break;
    case "/chapter1/test.html":
        app.innerHTML = Test();
}

export const render = (func) => {
    let currentPage = location.pathname;
    currentPage = location.pathname;
    const app = document.querySelector("#app");
    switch (currentPage) {
        case "/":
        case "/index.html":
            app.innerHTML = Index();
            break;
        case "/about.html":
            app.innerHTML = About();
            break;
        case "/chapter1/test.html":
            app.innerHTML = Test();
            break;
    }
    func();
}