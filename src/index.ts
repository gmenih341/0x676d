import './styles/main.scss';

const consoleWindow: HTMLDivElement = <HTMLDivElement> document.getElementById('console');
const fullText: string = 'Hello, World! My name is Gregor Menih\nI like to web do design.';
let length = 0;

setInterval(() => {
    if (length >= fullText.length) {
        return;
    }
    consoleWindow.innerHTML += fullText[length++];
}, 100);