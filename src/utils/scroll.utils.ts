
export function scrollSmoothly (targetElement: HTMLElement, targetScroll: number, transitionTime: number = 350): void {
    const startTime: number = Date.now();
    const currentScroll: number = targetElement.scrollTop;
    const deltaScroll: number = targetScroll - currentScroll;
    const scrolLVelocity: number = deltaScroll / transitionTime;

    const frame = (): void => {
        const deltaTime: number = Date.now() - startTime;
        const currentPosition: number = deltaTime * scrolLVelocity;
        targetElement.scrollTo(0, currentScroll + currentPosition);
        
        if (deltaTime < transitionTime) {
            window.requestAnimationFrame(frame);
        } else {
            targetElement.scrollTop = targetScroll;
        }
    };

    frame();
};