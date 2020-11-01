import create from './utils/create.js';

/*
new Key - итерируемся по массиву и создаем кнопки, всё прилетит все в конструктор.
1) Разбираем объект на переменные
2) Проверка: являются ли кнопка фкнкциональной?
3) в sub хотим положить только спецсимволы
4) create возвращает какой-то html-элемент и мы его сразу записываем в свойство
   (создали div и записали в свойство инстанса класса (т.е кнопку sub))
Мы не будем потом пересоздавать кнопки, а просто перезапишем в innerHTML данные.
5) Создаём буквы
*/
export default class Key {
    constructor({ small, shift, code }) { 
        this.small = small;
        this.shift = shift;
        this.code = code;
        this.isFuncKey = Boolean(small.match(/Enter|Caps|ok|Shift|Tab|Back|Del|en\|RU|EN\|ru|Sound|Voice|arr/));
        
        if (shift && shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)) { 
            this.sub = create('div', 'sub', this.shift);
        } else this.sub = create('div', 'sub', '');

        this.letter = create('div', 'letter', small);
        this.div = create('div', 'keyboard__key', [this.sub, this.letter], null, ['code', this.code],
        this.isFuncKey ? ['fn', 'true'] : ['fn', 'false']); // для отдкльной стилизация функциональных клавиш
        //4-ый аргумент null - потому что у нас нет родителя

    }
}