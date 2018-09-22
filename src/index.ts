import './styles/main.scss';

import {ScrollController} from './modules/scroll.controller';

window.addEventListener('DOMContentLoaded', () => {
    const container: HTMLElement | null = document.querySelector('#pages-container')
    if (!container) {
        throw new Error('Oops');
    }
    const scrollController: ScrollController = new ScrollController(container);
    scrollController.start();
    scrollController.onPageChange((page: number) => {
        const fb = {classList: {add: () => {}, remove: () => {}}};
        (<HTMLElement> document.querySelector('#active-page > .active') || fb).classList.remove('active');
        (<HTMLElement> document.querySelector(`#active-page div:nth-child(${page + 1}`) || fb).classList.add('active');
        console.log('current page is', page);
    });
});