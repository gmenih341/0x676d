import {Observable, fromEvent, BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {throttle, debounce} from '../utils/function.utils';
import {scrollSmoothly} from '../utils/scroll.utils';

const db = (...args: any[]) => console.log('Debug:', ...args);

export class ScrollController {
    private $scroll: Observable<WheelEvent>;
    private $activePage: BehaviorSubject<number> = new BehaviorSubject(0);

    private pageCount: number = 0;
    private targetPosition: number = 0;
    private windowHeight: number = 0;
    private scrollHeight: number = 0;

    private isNativeScrolling: boolean = false;
    private isAutoScrolling: boolean = false;
    private scrollBreakpoint: number = 0.19;
    
    constructor (private scroller: HTMLElement) {
        this.$scroll = fromEvent<WheelEvent>(window, 'scroll');
        this.pageCount = scroller.childElementCount || 0;
        this.windowHeight = window.innerHeight;
        this.scrollHeight = scroller.scrollHeight / this.pageCount;
        this.setBodyHeight();
    }

    public start (): void {
        const onScrollStart: Function = throttle(this.onScrollStart, 80, this);
        const onScrollEnd: Function = debounce(this.onScrollEnd, 80, this);

        this.$scroll
            .pipe(
                tap((): void => {
                    if (this.isAutoScrolling) {
                        return;
                    }
                    const currentPosition: number = window.pageYOffset;
                    const scrollOffset: number = currentPosition - this.targetPosition;
                    const percentage: number = scrollOffset / this.windowHeight;
                    this.scroller.scrollTop = (this.$activePage.getValue() * this.scrollHeight) + (this.scrollHeight * percentage);
                    if (currentPosition >= this.targetPosition + (this.windowHeight * this.scrollBreakpoint)) {
                        db('Going down');
                        this.isAutoScrolling = true;
                        this.nextPage();

                    } else if (currentPosition <= this.targetPosition - (this.windowHeight * this.scrollBreakpoint)) {
                        db('Going up');
                        this.isAutoScrolling = true;
                        this.prevPage();
                    }
                }),
                tap(() => {
                    onScrollStart();
                    onScrollEnd();
                }),
            ).subscribe();

            this.$activePage.subscribe((value: number) => {
                console.log(value);
                this.targetPosition = this.windowHeight * value;
            })
    }

   
    public debug(): void {
        const el: HTMLDivElement | null = document.querySelector('#debug>.text');
        if (el) {
            const frame = () => {
                el.innerText = `
                NS: ${this.isNativeScrolling}
                AS: ${this.isAutoScrolling}
                TR: ${this.targetPosition}
                AP: ${this.$activePage.getValue()}`;
                window.requestAnimationFrame(frame);
            };
            frame();
        }
    }

    private onScrollStart (): void {
        // this.isAutoScrolling = true;
    }

    private onScrollEnd (): void {
        this.isAutoScrolling = false;
        this.isNativeScrolling = false;
        this.scrollTo(this.targetPosition);
    }

    private nextPage (): void {
        this.$activePage.next(this.$activePage.getValue() + 1);
        scrollSmoothly(this.scroller, (this.scrollHeight * (this.$activePage.getValue())), 100);
    }

    private prevPage (): void {
        this.$activePage.next(this.$activePage.getValue() - 1);
        scrollSmoothly(this.scroller, (this.scrollHeight * (this.$activePage.getValue())), 100);
    }

    private scrollTo (position: number) {
        window.scrollTo(0, position);
    }

    private setBodyHeight (): void {
        document.body.style.height = `${this.windowHeight * this.pageCount}px`;
    }
}