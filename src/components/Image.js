import { UPPER_PATH } from "../utility/render.js";

// TODO option に width, height, className等を指定できるようにする
export const Image = (path, option) => {
    let width = "";
    let height = "";
    // if (option.width) width = option.width;
    // else width = "";
    // if (option.height) height = option.height;
    // else height = "";
    // if (option.scale) width = option.scale, height = "auto";
    // else scale = "";

    let urlRegx = /https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/g;
    if (path.includes("%PUBLIC_IMAGE%")) {
        const currentPage = location.pathname.replace(UPPER_PATH, "");
        const slashCount = (currentPage.match(/\//g) || []).length;
        const correctedPath = path.replace(/%PUBLIC_IMAGE%/, ("../".repeat(slashCount - 1)) + "imgs/");
        return ( /*html*/ `
            <img src="${correctedPath}" width="${width}" height="${height}">
        `)
    } else if (path.match(urlRegx)) {
        return ( /*html*/ `
            <img src=${path} width="${width}" height="${height}">
        `);
    } else {
        return ( /*html*/ `
            <img src="${UPPER_PATH + path}">
        `);
    }
}