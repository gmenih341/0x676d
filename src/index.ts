import './styles/main.scss';
import {TypingConsole} from './modules/typing-console.module';
import test from './assets/test.clit';

const consoleWindow: HTMLDivElement = <HTMLDivElement> document.querySelector('#console .feed');

const tc = new TypingConsole(test);

tc.updaterInterval().subscribe((text: string) => {
    consoleWindow.innerText = text;
});