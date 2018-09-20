import './styles/main.scss';

import {fromEvent, timer, combineLatest} from 'rxjs';
import {map, tap, skip, merge, timeout, filter} from 'rxjs/operators';
import {throttle, debounce} from './utils/function.utils';
import {ScrollController} from './modules/scroll.controller';
import {scrollSmoothly} from './utils/scroll.utils';

enum ScrollDirection {
    Up,
    Down,
}

let prevHeight: number = 0;
let prevTime: number = 0;
let scrollTop: number = 0;
let incrementor = 1;
let autoScrolling: boolean = false;

// const onScrollingStarts = throttle(() => {
//     setTimeout(() => {
//         if (!autoScrolling) {
//             console.log("SCROLL BACK TO TOP!");
//             smoothScroll(0);
//         }
//     }, 250);
// }, 250);


// const onScrollingStops = debounce(() => {
//     console.log('STOPPED SCROLLING');
//     smoothScroll(0);
// }, 66);

// const scrollNext = throttle(() => {
//     autoScrolling = true;
//     console.log('changing scroll down');
//     // smoothScroll(0);

// }, 2000);

// const scrollPrev = throttle(() => {
//     console.log('changing scroll up');
//     autoScrolling = true;
//     // scrollTop -= window.innerHeight;
// }, 2000);

// fromEvent(window.document, 'scroll')
//     .pipe(
//         tap(() => onScrollingStarts()),
//         map((event: Event): ScrollDirection | undefined => {
//             if (autoScrolling) {
//                 return undefined;
//             }
//             const currHeight: number = window.scrollY;
//             const deltaHeight: number = currHeight - prevHeight;
//             prevHeight = currHeight;
//             if (deltaHeight > 15) {
//                 scrollNext();
//             } else if (deltaHeight < -15) {
//                 scrollPrev();
//             }
//             onScrollingStops();
//             return undefined;
//         }),
//     )
//     .subscribe();



window.addEventListener('DOMContentLoaded', () => {
    const container: HTMLElement | null = document.querySelector('#pages-container')
    if (!container) {
        throw new Error('Oops');
    }
    const scrollController: ScrollController = new ScrollController(container);
    scrollController.start();
});