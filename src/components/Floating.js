export const Floating = (icon, option) => {
    return ( /*html*/ `
        <a class="btn-floating btn-large waves-effect waves-light red sidenav-trigger ${option.className}" data-target="slide-out"><i class="material-icons">${icon}</i></a>
    `)
}