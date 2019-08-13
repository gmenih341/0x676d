export function stopPropagation(e: any): void {
    (e as Event).stopPropagation();
}
