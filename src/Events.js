import { visitFunctionBody } from 'typescript';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    document.body.innerHTML = '<button>Удали меня</button>';
    document
        .getElementsByTagName('button')[0]
        .addEventListener('click', function (event) {
            document.body.removeChild(
                document.getElementsByTagName('button')[0],
            );
        });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    document.body.innerHTML = '<ul></ul>';
    const ul = document.getElementsByTagName('ul')[0];
    for (let i = 0; i < arr.length; i++) {
        ul.insertAdjacentHTML('beforeend', '<li>' + arr[i] + '</li>');
    }
    document
        .getElementsByTagName('ul')[0]
        .addEventListener('mouseover', function (event) {
            if (event.target && event.target.nodeName === 'LI') {
                event.target.setAttribute('title', event.target.textContent);
            }
        });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let clicks = 0;
    document.body.innerHTML = '<a>tensor</a>';
    document
        .getElementsByTagName('a')[0]
        .setAttribute('href', 'https://tensor.ru/');
    document
        .getElementsByTagName('a')[0]
        .addEventListener('click', function (event) {
            if (clicks == 0) {
                event.preventDefault();
                event.target.textContent =
                    event.target.textContent + ' ' + 'https://tensor.ru/';
            }
            clicks++;
        });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.innerHTML =
        '<ul><li>Пункт</li></ul><button>Добавить пункт</button>';
    document
        .getElementsByTagName('ul')[0]
        .addEventListener('click', function (event) {
            if (event.target && event.target.nodeName === 'LI') {
                event.target.textContent = event.target.textContent + '!';
            }
        });
    document
        .getElementsByTagName('button')[0]
        .addEventListener('click', function (event) {
            document
                .getElementsByTagName('ul')[0]
                .insertAdjacentHTML('beforeend', '<li>Пункт</li>');
        });
}
