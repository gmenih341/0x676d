import {Observable, fromEvent} from 'rxjs';
import {throttle, debounce} from '../utils/function.utils';
import {tap} from 'rxjs/operators';

const log = (...args: any[]) => console.log('ScrollController:', ...args);

export class ScrollController {
    private targetPosition: number = 0;
    private currentPosition: number = 0;
    private target: Window;
    
    public isScrolling: boolean = false;
    private isAutoScrolling: boolean = false;

    private $scroll: Observable<WheelEvent>;

    constructor () {
        this.$scroll = fromEvent<WheelEvent>(window, 'scroll');
        this.target = window;
    }

    public start (): void {
        const onScrollStart: Function = throttle(() => {
            log('Started scrolling');
            this.isScrolling = true;
        }, 80);
        const onScrollEnd: Function = debounce(() => {
            log('Stopped scrolling');
            if (!this.isAutoScrolling) {
                this.smoothScroll(this.targetPosition, 350);
            } else {
                this.isScrolling = false;
                this.isAutoScrolling = false;
            }
        }, 80);
        const windowHeight: number = window.innerHeight;
        this.$scroll
            .pipe(
                tap(() => {
                    onScrollStart();
                    onScrollEnd();
                }),
                tap(() => {
                    if (this.isAutoScrolling) {
                        this.scrolToY(this.currentPosition);
                        return;
                    }
                    this.currentPosition = window.pageYOffset;
                    if (this.currentPosition >= this.targetPosition + (windowHeight / 4)) {
                        log('Going down');
                        this.targetPosition += windowHeight;
                        this.isAutoScrolling = true;
                        this.smoothScroll(this.targetPosition, 350);
                    } else if (this.currentPosition <= this.targetPosition - (windowHeight / 4)) {
                        log('Going up');
                        this.targetPosition -= windowHeight;
                        this.isAutoScrolling = true;
                        this.smoothScroll(this.targetPosition, 350);
                    }
                }),
            )
            .subscribe();
    }

    public debug (): void {
        const el: HTMLDivElement = document.createElement('div');
        el.classList.add('debug');
        const frame = () => {
            el.innerText = `Scrolling: ${this.isScrolling}
            Auto scrolling: ${this.isAutoScrolling}
            Y Target: ${this.targetPosition}
            Y: ${this.currentPosition}
            `;
            window.requestAnimationFrame(frame);
        };
        window.document.body.appendChild(el);
        frame();
    }

     private smoothScroll (to: number, time: number) {
        let prevTime: number = Date.now();
        const startTime: number = Date.now();
        const scrollHeight: number = to - this.currentPosition;
        const scrollSpeed: number = scrollHeight / time;

        const scroll = (): void => {
            const currTime: number = Date.now();
            const deltaTime: number = currTime - prevTime;
            prevTime = currTime;
            const deltaHeight = scrollSpeed * deltaTime;
            this.scrolToY(this.currentPosition + deltaHeight);

            if (currTime - startTime < time) {
                window.requestAnimationFrame(scroll);
            } else {
                this.scrolToY(to);
            }
        };

        scroll();
    }

    private scrolToY (y: number): void {
        this.currentPosition = y;
        this.target.scrollTo(0, y);
    }
}