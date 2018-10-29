// import * as SVG from 'svgjs';

// export const animateSvg: Function = (): void => {
//     const leftArrow = SVG.get('left-arrow');
//     const rightArrow = SVG.get('right-arrow');
//     const arrows = SVG.get('arrows');
//     const rest = SVG.get('rest');
//     const back = SVG.get('back');

//     const offset: number = 287;
//     back.hide();
//     const box: SVG.BBox = rest.bbox();

//     leftArrow.translate(offset, 0);
//     rightArrow.translate(offset * -1, 0);

//     rest.scale(.5, .5).opacity(0)
//     const animation: Animation = arrows
//         .animate(1000)
//         .rotate(360)
//         .loop();

//     return () => {
//         animation.finish();

//         leftArrow.animate({
//             duration: 500,
//             ease: '<'
//         })
//             .translate(0, 0);
//         rightArrow.animate({
//             duration: 500,
//             ease: '<'
//         })
//             .translate(0, 0);

        
//         rest.animate({
//             duration: 150,
//             delay: 350,
//             ease: '>'
//         })
//             .scale(1, 1)
//             .opacity(1);
//     }
// }