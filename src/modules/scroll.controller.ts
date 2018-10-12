import {scrollSmoothly, EasingFunctions, animate} from '../utils/animation.utils';
import {debounce} from '../utils/function.utils';

export class ScrollController {
    private activePage: number = 0;
    private pageCount: number = 0;
    private windowHeight: number = 0;
    private scrollHeight: number = 0;
    private scrollPositions: number[] = [];
    private onPageChanged: (page: number) => void = () => {};

    constructor (private scroller: HTMLElement) {
        this.pageCount = scroller.childElementCount || 0;
        this.windowHeight = window.innerHeight;
        this.setBodyHeight();
        this.setPositions();
    }

    public start (): void {
        window.onscroll = () => {
            const currentPosition: number = window.pageYOffset;
            const percentage: number = currentPosition / this.scrollHeight;
            const activePage: number = Math.floor(percentage * this.pageCount);
            if (this.activePage !== activePage) {
                console.log(activePage);
                this.changePage(activePage);
            }
        };
        window.onresize = debounce(() => {
            this.setPositions();
        }, 200);
    }

    public onPageChange (callback: (page: number) => void): void {
        this.onPageChanged = callback;
    }

    private changePage (value: number): void {
        const offsetTop: number = this.scrollPositions[value];
        scrollSmoothly(this.scroller, offsetTop, {
            transitionTime: 250,
            ease: EasingFunctions.easeOutQuad,
        });
        this.onPageChanged(value);
        this.activePage = value;
    }

    private setBodyHeight (): void {
        document.body.style.height = `${this.pageCount * 80}vh`;
        this.scrollHeight = document.body.scrollHeight - this.windowHeight + 1;
    }

    private setPositions (): void {
        // @ts-ignore
        Array.from(this.scroller.childNodes).forEach((element: HTMLElement) => {
            this.scrollPositions.push(element.offsetTop - this.scroller.offsetTop);
        });
    }
}