import {BehaviorSubject, timer, Observable, of} from 'rxjs';
import {switchMap, startWith, tap, map} from 'rxjs/operators'

export class TypingConsole {
    private fullText: string;
    private $updater: Observable<void>;
    private $speed: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private $length: BehaviorSubject<number> = new BehaviorSubject(0);

    constructor (textToType: string) {
        this.fullText = textToType;
        this.$updater = this.updaterInterval();
    }

    public updaterInterval (): Observable<any> {
        return this.$length   
            .pipe(
                switchMap((number: number) => this.$speed.value ? timer(1) : timer(20 + Math.random())),
                tap(() => {
                    if (this.$length.value >= this.fullText.length) {
                        this.$length.complete();
                    }
                    return this.$length.next(this.$length.value + 1);
                }),
                map((): string => this.fullText.substr(0, this.$length.value)),
            );
    }

    private parseCommand(char: string): void {

    }
}