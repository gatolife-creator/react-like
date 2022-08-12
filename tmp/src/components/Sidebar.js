import { Link } from './Link.js';

export const Sidebar = () =>{
    return ( /*html*/ `<ul id="slide-out" class="sidenav"><li><div class="user-view"><div class="background"></div><a href="#name"><span class="white-text name">John Doe</span></a><a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a></div></li><li>${Link('Home', '/', {className: ''})}</li><li>${Link('About', '/about.html', {className: ''})}</li><li><div class="divider"></div></li><li><a class="waves-effect" href="#!">Third Link With Waves</a></li></ul>`);
}