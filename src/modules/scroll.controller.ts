import {scrollSmoothly, EasingFunctions, animate} from '../utils/animation.utils';
import {debounce, throttle} from '../utils/function.utils';

const SCROLL_BREAKPOINT: number = 30;

export class ScrollController {
    private activePage: number = 0;
    private pageCount: number = 0;
    private scrollPositions: [number, HTMLElement][] = [];
    private onPageChanged: (page: number) => void = () => {};

    constructor (private scroller: HTMLElement) {
        this.pageCount = scroller.childElementCount || 0;
        this.setPositions();
    }

    public start (): void {        
        this.startDekstop();
        this.startMobile();
    }

    public onPageChange (callback: (page: number) => void): void {
        this.onPageChanged = callback;
    }

    private startDekstop (): void {
        let sumScroll: number = 0;
        let breakpointModifier: number = 1;

        const onWheelEnd: Function = debounce(() => {
            sumScroll = 0;
            breakpointModifier = 1;
        }, 80);

        window.onwheel = (event: WheelEvent): void => {
            const {deltaY} = event;
            sumScroll += deltaY;
            if (Math.abs(sumScroll) > (SCROLL_BREAKPOINT * breakpointModifier)) {
                const nextPage: number = this.activePage + (sumScroll > 0 ? 1 : -1);
                if (nextPage >= 0 && nextPage < this.pageCount) {
                    this.changePage(nextPage);
                }
                sumScroll = 0;
                breakpointModifier += 200;
                return;
            }
            onWheelEnd();
        };
    }

    private startMobile (): void {
        let touchStart: number = 0;
        window.ontouchstart = (e: TouchEvent): void => {
            touchStart = e.changedTouches[0].screenY;
        };

        window.ontouchend = (e: TouchEvent): void => {
            const clientY: number = e.changedTouches[0].screenY;
            const delta = touchStart - clientY;
            if (Math.abs(delta) > SCROLL_BREAKPOINT) {
                const nextPage: number = this.activePage + (delta > 0 ? 1 : -1);
                if (nextPage >= 0 && nextPage < this.pageCount) {
                    this.changePage(nextPage);
                }
                touchStart = 0;
            }
        };
    }

    private changePage (value: number): void {
        const offsetTop: number = this.scrollPositions[value][0];
        this.deactivateAll();
        this.scrollPositions[value][1].classList.add('active');
        scrollSmoothly(this.scroller, offsetTop, {
            transitionTime: 250,
            ease: EasingFunctions.easeOutQuad,
        });
        this.onPageChanged(value);
        this.activePage = value;
    }

    private setPositions (): void {
        // @ts-ignore
        Array.from(this.scroller.childNodes).forEach((element: HTMLElement) => {
            element.classList.add('active');
            this.scrollPositions.push([element.offsetTop - this.scroller.offsetTop, element]);
        });
    }

    private deactivateAll (): void {
        // @ts-ignore
        Array.from(this.scroller.childNodes).forEach((element: HTMLElement) => element.classList.remove('active'));
    }
}