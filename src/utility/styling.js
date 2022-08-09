export const styling = (styles) => {
    let result = "";
    // for (let [key, value] of Object.entries(styles)) {
    //     result += `${key}:${value};`;
    // }
    for (let style of styles) {
        result += style.replace(/(\s\:|\:\s)/g, ":") + ";";
    }
    // result += result.replace(/(\s\:|\:\s)/g, ":");
    return result;
}