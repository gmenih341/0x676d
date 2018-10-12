import './styles/main.scss';

import {ScrollController} from './modules/scroll.controller';
import {$} from './utils/selector.utils';

window.addEventListener('DOMContentLoaded', () => {
    const container: HTMLElement = $('#pages-container');
    const placeholder: HTMLElement = $('#placeholder');
    const con: HTMLElement = $('#console');
    
    container.style.height = `${container.children[0].clientHeight}px`;
    
    const scrollController: ScrollController = new ScrollController(container);
    
    scrollController.start();
});