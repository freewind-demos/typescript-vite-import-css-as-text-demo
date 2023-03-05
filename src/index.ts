import myCss from './Hello.pcss?inline';
import tippyCss from 'tippy.js/dist/tippy.css?inline';

const main = document.getElementById('main');
main!.innerHTML = `<div>${myCss}</div><hr/><div>${tippyCss}</div>` ;

