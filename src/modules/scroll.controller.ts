import {Observable, fromEvent, BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {debounce} from '../utils/function.utils';
import {scrollSmoothly} from '../utils/scroll.utils';

export class ScrollController {
    private $scroll: Observable<WheelEvent>;
    
    private activePage: number = 0;
    private pageCount: number = 0;
    private targetPosition: number = 0;
    private windowHeight: number = 0;
    private scrollHeight: number = 0;

    private isNativeScrolling: boolean = false;
    private isAutoScrolling: boolean = false;
    private scrollBreakpoint: number = 0.33;
    
    constructor (private scroller: HTMLElement) {
        this.$scroll = fromEvent<WheelEvent>(window, 'scroll');
        this.pageCount = scroller.childElementCount || 0;
        this.windowHeight = window.innerHeight;
        this.scrollHeight = scroller.scrollHeight / this.pageCount;
        this.setBodyHeight();
    }

    public start (): void {
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
                    this.scroller.scrollTop = (this.activePage * this.scrollHeight) + (this.scrollHeight * percentage);
                    if (currentPosition >= this.targetPosition + (this.windowHeight * this.scrollBreakpoint)) {
                        this.isAutoScrolling = true;
                        this.changePage(1);

                    } else if (currentPosition <= this.targetPosition - (this.windowHeight * this.scrollBreakpoint)) {
                        this.isAutoScrolling = true;
                        this.changePage(-1);
                    }
                }),
                tap(() => {
                    onScrollEnd();
                }),
            ).subscribe();
    }

    private onScrollEnd (): void {
        this.isAutoScrolling = false;
        this.isNativeScrolling = false;
        this.scrollTo(this.targetPosition);
    }

    private changePage (value: number): void {
        const newPage: number = (this.activePage += value);
        this.targetPosition = newPage * this.windowHeight;
        scrollSmoothly(this.scroller, newPage * this.scrollHeight, 240);
    }

    private scrollTo (position: number) {
        window.scrollTo(0, position);
    }

    private setBodyHeight (): void {
        document.body.style.height = `${this.windowHeight * this.pageCount}px`;
    }
}