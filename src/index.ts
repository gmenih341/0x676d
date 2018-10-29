import './styles/main.scss';
import {ScrollController} from './modules/scroll.controller';
import {$} from './utils/selector.utils';

window.addEventListener('DOMContentLoaded', () => {
    const container: HTMLElement = $('#titles-container');
    const scrollIndicator: HTMLElement = $('#scroll-indicator');

    container.style.height = `${container.children[0].clientHeight}px`;

    const scrollController: ScrollController = new ScrollController(container);
    scrollController.onPageChange((page: number) => {
        scrollIndicator.classList.add('hidden');
    });
    scrollController.start();
    setTimeout(() => {
        requestAnimationFrame(() => {
            $('.loading').classList.remove('loading');
        });
    }, 1000);
});