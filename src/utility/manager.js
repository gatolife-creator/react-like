import { render } from './render.js';
$(() => {
    manage();
})

const manage = () => {
    $('.Article').hide().show("drop")

    $('.Link').click(function() {
        history.replaceState('', '', $(this).attr("to"));
        render(() => {
            manage();
        });
    });
}