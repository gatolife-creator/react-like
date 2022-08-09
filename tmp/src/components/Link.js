export const Link = (text, link, option) =>{
    let className = "";
    if (option.className) {
        className = option.className;
    } else {
        className = "";
    }
    return (
        /*html*/
        `<a class="${"Link " + className}" to=${link}>${text}</a>`
    )
}