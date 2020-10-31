import { get } from './storage.js';
import Keyboard from './Keyboard.js';

const rowsOrder = [
    ['Backquote','Digit1', 'Digit2', 'Digit3', 'Digit4' ,'Digit5', 'Digit6' ,'Digit7' ,'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Delete'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT','KeyY', 'KeyU','KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backspace'],
    ['CapsLock','KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],
    ['ShiftLeft', 'IntBackSlash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Sound', 'ShiftRight'],
    ['ControlLeft', 'Language', 'AltLeft', 'Space', 'AltRigh','ArrowLeft', 'ArrowRight', 'Voice']
];



const lang = get('kbLang', '"ru"');

new Keyboard(rowsOrder).init(lang).generateLayout();