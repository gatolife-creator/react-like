import { Link } from './Link.js';

export const Sidebar = () =>{
    return ( /*html*/ `<ul id="slide-out" class="sidenav"><li><div class="user-view" style="height:180px;"><div class="background"><img src="https://materializecss.com/images/office.jpg"></div></div></li><li>${Link('Home', '/', {className: 'waves-effect'})}</li><li>${Link('About', '/about.html', {className: 'waves-effect'})}</li><li><div class="divider"></div></li><li>${Link('Link', '/chapter1/test.html', {className: 'waves-effect'})}</li></ul>`);
}