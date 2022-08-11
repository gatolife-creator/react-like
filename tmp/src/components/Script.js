export const Script = (textScript) =>{
    const app = document.querySelector("#script");
    const script = document.createElement('script');
    script.innerHTML = "{" + textScript + "}";
    app.appendChild(script);
}