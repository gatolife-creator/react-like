import { render, UPPER_PATH } from './render.js';

let currentPage = location.pathname.replace(UPPER_PATH, "");
render(currentPage, () => {
    console.log("First rendered:", currentPage)
});
$(() => {
    window.addEventListener("popstate", function() {
        let currentPage = location.pathname.replace(UPPER_PATH, "");
        render(currentPage, () => {
            console.log("browser backed");
        });
        manage();
    });

    manage();
})

const manage = () => {
    $('main').hide().show("fade")

    // リンクをクリックしたら、ページ遷移
    $('.Link').click(function() {
        // もし、パス名がデフォルトの値（＃）でなければレンダリングを行う。
        if ($(this).attr("to") !== "#" && $(this).attr("to") !== location.pathname.replace(UPPER_PATH, "")) {
            render($(this).attr("to"), () => {
                console.log("rendered:", $(this).attr("to"));
                history.pushState('', '', UPPER_PATH + $(this).attr("to"));
            });
            manage();
        }
    });
}