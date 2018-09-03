import "reflect-metadata";

type RenderableClass = (document: HTMLElement) => void;
interface ComponentOptions {
    selector: string;
    templatePath: string;
    stylePath: string;
}

class RenderableComponent<T> {
    constructor ()
}

export const Component = (options: ComponentOptions): any => {
    return function<T> (child: T) {
        return class RenderableComponent<T> {
            private childClass: T;
            
            constructor (child: T) {
                this.childClass = child;
            }
        }
    }
    return class RenderableComponent<T> {
        private childClass: T;
        private 

    }
}