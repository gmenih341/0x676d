import './styles/main.scss';

import {ScrollController} from './modules/scroll.controller';

window.addEventListener('DOMContentLoaded', () => {
    const container: HTMLElement | null = document.querySelector('#pages-container')
    if (!container) {
        throw new Error('Oops');
    }
    const scrollController: ScrollController = new ScrollController(container);
    scrollController.start();
});