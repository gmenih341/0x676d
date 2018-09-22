import {debounce} from '../utils/function.utils';
import {scrollSmoothly} from '../utils/animation.utils';

export class ScrollController {
    private activePage: number = 0;
    private pageCount: number = 0;
    private windowHeight: number = 0;
    private scrollHeight: number = 0;
    private scrollPositions: number[] = [];

    constructor (private scroller: HTMLElement) {
        this.pageCount = scroller.childElementCount || 0;
        this.windowHeight = window.innerHeight;
        this.setBodyHeight();
        this.getPositions();
    }

    public start (): void {
        window.onscroll = () => {
            const currentPosition: number = window.pageYOffset;
            const percentage: number = currentPosition / this.scrollHeight;
            const activePage: number = Math.floor(percentage * this.pageCount);
            if (this.activePage !== activePage) {
                this.changePage(activePage);
            }
        };
    }

    private changePage (value: number): void {
        console.log('setting page');
        this.activePage = value;
        const offsetTop: number = this.scrollPositions[this.activePage];
        scrollSmoothly(this.scroller, offsetTop, {
            transitionTime: 240,
        });
    }

    private setBodyHeight (): void {
        document.body.style.height = `${this.pageCount * this.windowHeight}px`;
        this.scrollHeight = document.body.scrollHeight - this.windowHeight + 1;
    }

    private getPositions (): void {
        [...this.scroller.childNodes].forEach((element: HTMLElement) => {
            this.scrollPositions.push(element.offsetTop);
        });
    }
}