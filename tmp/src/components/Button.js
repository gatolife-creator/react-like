import { styling } from "../utility/styling.js";
const styles = [
    "width: 100px",
    "height: 50px",
]

export const Button = (text, clickEvent) =>{
    return (
        /*html*/
        `<button class="btn btn-primary" type="button" style=${styling(styles)} onclick=${clickEvent.name}()>${text}</button>`
    );
}