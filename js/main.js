/**
 * Коллбек для задання параметрів елемента за допомогою функції {@link makeTag}
 * @callback fnParamsCallback
 * @param {HTMLElement} element Елемент, якому потрібно вказати параметри
 */

/**
 * Створення вкладених тегів
 * @param {string} name Назва тегу. Наприклад 'div', 'h1' тощо
 * @param {fnParamsCallback|HTMLElement} fnParams Колбек функція для задання параметрів елемента
 * У випадку, якщо функція не задана, то даний параметр буде вважатись дочірнім елементом, який додається
 * до поточного елемента
 * @param {...HTMLElement} children Дочірні елементи, які будуть додані до поточного елемента
 * @returns {HTMLElement}
 */
const makeTag = function(name, fnParams, ...children) {
    const res = document.createElement(name);
    if (typeof fnParams === 'function') {
        fnParams(res);
        if (children.length) res.append(...children);
    } else {
        res.append(fnParams, ...children);
    }
    return res;
}

/**
 * Друкуємо виділений текст завдання
 * @param text
 */
const writeHeader = function(text) {
    document.body.appendChild(makeTag('p', e => {
        e.classList.add('task-header');
        e.innerText = text;
    }));
}

writeHeader(`- є масив let simpsons = [...]
     Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
`);

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

const layoutSimpsons = makeTag('div', e => e.classList.add('layout'));

for (const {name, surname, age, info, photo} of simpsons) {
    layoutSimpsons.appendChild(
        makeTag('div', e => e.classList.add('member'),
            makeTag('div', e => e.classList.add('member-left'),
                makeTag('img', e => { e.classList.add('member-photo'); e.src = photo; e.alt = `${name} ${surname}` })
            ),
            makeTag('div', e => e.classList.add('member-right'),
                makeTag('h2', e => { e.classList.add('member-name'); e.innerHTML = `${name} ${surname}` }),
                makeTag('h3', e => { e.classList.add('member-age'); e.innerHTML = `(${age} years old)` }),
                makeTag('p', e => { e.classList.add('member-info'); e.innerHTML = info })
            )
        )
    );
}
document.body.appendChild(layoutSimpsons);

/********************************************************************/

writeHeader(`Цикл в циклі
    - Є масив let coursesArray = [...]
    Створити для кожного елементу масиву свій блок, блок розділити блоками,
    в яких будуть зберігатись значення окремих властивостей,
    для властивості modules зробити список з елементами
    Приклад структири знаходиться у файлі example.png
`);

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// В принципі, можна було і через шаблонні строки робити
// <div className="courses-card">
//     <div className="courses-item">title: Java Complex</div>
//     <div className="courses-row">
//         <div className="courses-item courses-left">months: 6</div>
//         <div className="courses-item">hours: 909</div>
//     </div>
//     <div className="courses-modules">
//         <ul>
//             <li>css</li>
//             <li>css</li>
//         </ul>
//     </div>
// </div>

const layoutCourses = makeTag('div', e => e.classList.add('layout-narrow'));

for (const {title,monthDuration:months, hourDuration:hours, modules} of coursesArray) {
    layoutCourses.appendChild(
        makeTag('div', e => e.classList.add('courses-card'),
            makeTag('div', e => { e.classList.add('courses-item'); e.innerHTML = `title: ${title}` }),
            makeTag('div', e => e.classList.add('courses-row'),
                makeTag('div', e => {
                    e.classList.add('courses-item');
                    e.classList.add('courses-left');
                    e.innerHTML = `months: ${months}`;
                }),
                makeTag('div', e => { e.classList.add('courses-item'); e.innerHTML = `hours: ${hours}` })
            ),
            makeTag('div', e => e.classList.add('courses-modules'),
                makeTag('ul', e => {
                    for (const module of modules) {
                        e.appendChild(
                            makeTag('li', e => e.innerHTML = module)
                        );
                    }
                })
            )
        )
    );
}

document.body.appendChild(layoutCourses);

/********************************************************************/

writeHeader(`- створити блок,
    - додати йому класи wrap, collapse, alpha, beta
    - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
    - додати цей блок в body.
    - клонувати його повністю, та додати клон в body.
`);

const divBlock = document.createElement('div');
['wrap', 'collapse', 'alpha', 'beta'].forEach(val => divBlock.classList.add(val));
divBlock.innerHTML = `
<ul>
    <li>створити блок</li>
    <li>додати йому класи wrap, collapse, alpha, beta</li>
    <li>додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту</li>
    <li>додати цей блок в body.</li>
    <li>клонувати його повністю, та додати клон в body.</li>
</ul>    
`
document.body.appendChild(divBlock);
document.body.appendChild(divBlock.cloneNode(true));

/********************************************************************/

// - Є масив: ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для
// кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// !!! Зміни додані в файл template1.html !!!!

/********************************************************************/

writeHeader(`- Є масив let coursesAndDurationArray = [ ... ];
    Для кожного елементу масиву зробити блок в якому вивести
    інформацію про title та monthDuration
    Завдання робити через цикли.
`);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const layoutCourses2 = makeTag('div', e => e.classList.add('layout-narrow'));

for (const {title,monthDuration:months} of coursesAndDurationArray) {
    layoutCourses2.appendChild(
        makeTag('div', e => e.classList.add('courses-card'),
            makeTag('div', e => { e.classList.add('courses-item'); e.innerHTML = `title: ${title}` }),
            makeTag('div', e => { e.classList.add('courses-item'); e.innerHTML = `months: ${months}` })
        )
    )
}

document.body.appendChild(layoutCourses2);

/********************************************************************/

writeHeader(`- Є масив let coursesAndDurationArray = [ ... ];
    За допомоги скріпта для кожного елементу масиву зробити
    <div class='item'> ,  в якому буде <h1 class='heading'>  з title
    елементу, та <p class='description'> з monthDuration елементу.
    Завдання робити через цикли.
`);

// let coursesAndDurationArray = описано вище

const layoutCourses3 = makeTag('div', e => e.classList.add('layout-narrow'));

for (const {title,monthDuration:months} of coursesAndDurationArray) {
    layoutCourses3.appendChild(
        makeTag('div', e => e.classList.add('item'),
            makeTag('h1', e => { e.classList.add('heading'); e.innerHTML = title }),
            makeTag('p', e => { e.classList.add('description'); e.innerHTML = `months: ${months}` })
        )
    );
}

document.body.appendChild(layoutCourses3);

/********************************************************************/

writeHeader(`- Створити довільний елемент з id = text. 
    Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку 
    зникав елемент з id="text".
`);

const layoutHide = makeTag('div', e => e.classList.add('layout'),
    makeTag('button', e => {
        e.innerHTML = 'Сховати';
        e.onclick = function(){
            const text = /* e.nextSibling */document.getElementById('text');
            if(text) {
                text.hidden = !text.hidden;
                e.innerHTML = text.hidden ? 'Показати' : 'Сховати';
            }
        }
    }),
    makeTag('span', e => {
        e.id = 'text';
        e.innerHTML = 'Натисніть на кнопку, щоб зник текст'
        e.style.color = 'red';
        e.style.marginLeft = '10px';
    })
);

document.body.appendChild(layoutHide);

/********************************************************************/

writeHeader(`- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
    При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
    чи меньше він ніж 18, та повідомити про це користувача
`);

const layoutAge = makeTag('div', e => e.classList.add('layout-narrow'),
    makeTag('label', e => { e.htmlFor = 'age-value'; e.innerHTML = 'Вкажіть ваш вік:' }),
    makeTag('input', e => {
        e.id = 'age-value'
        e.placeholder = 'Вкажіть числове значення';
        e.type = 'number';
        e.oninput = function () {
            const ageButton = e.nextSibling; //document.getElementById('age-button');
            const ageText = ageButton.nextSibling; //document.getElementById('age-text');
            ageButton.disabled = !this.value;
            ageText.hidden = true;
        }
    }),
    makeTag('button', e => {
        e.disabled = true;
        e.id = 'age-button';
        e.innerHTML = 'Перевірити';
        e.style.marginTop = '5px';
        e.onclick = function(){
            const ageValue = document.getElementById('age-value');
            if (ageValue.value) {
                const ageText = document.getElementById('age-text');
                const val = +ageValue.value;
                if (val < 18) {
                    ageText.innerHTML = 'Ваш вік менше 18 років!!!';
                    ageText.style.color = 'red';
                } else {
                    ageText.innerHTML = 'Ваш вік не менше 18 років';
                    ageText.style.color = 'green';
                }
                ageText.hidden = false;
            }
        }
    }),
    makeTag('span', e => {
        e.id = 'age-text';
        e.hidden = true;
        e.style.marginLeft = '10px';
    })
);

document.body.appendChild(layoutAge);

/********************************************************************/

writeHeader(`*** Створити 3 инпута та кнопку. 
    Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    При натисканні кнопки, вся ця інформація зчитується і формується табличка,
    з відповідним вмістом.
    (Додатковачастина для завдання)
`);

/*
<div class="main">
    <form id="table-params">
        <div>
            <label for="rows-count">Рядків</label>
            <input type="number" id="rows-count">
        </div>
        <div>
            <label for="cols-count">Клітинок</label>
            <input type="number" id="cols-count">
        </div>
        <div>
            <label for="table-values">Вміст</label>
            <input type="text" id="table-values">
        </div>
        <div>
            <button id="table-grow">Додати</button>
        </div>
    </form>
</div>
*/

const layoutTable = makeTag('div', e => e.classList.add('layout'),
    makeTag('form', e => {e.id = 'table-params'},
        makeTag('div',
            makeTag('label', e => { e.htmlFor = 'table-rows'; e.innerHTML = 'Рядків' }),
            makeTag('input', e => { e.id = 'table-rows'; e.type = 'number' })
        ),
        makeTag('div',
            makeTag('label', e => { e.htmlFor = 'table-cols'; e.innerHTML = 'Клітинок' }),
            makeTag('input', e => { e.id = 'table-cols'; e.type = 'number' })
        ),
        makeTag('div',
            makeTag('label', e => { e.htmlFor = 'table-values'; e.innerHTML = 'Вміст' }),
            makeTag('input', e => { e.id = 'table-values'; e.type = 'text' })
        ),
        makeTag('div',
            makeTag('button', e => {
                e.id = 'table-grow';
                e.innerHTML = 'Додати';
                e.onclick = function (e) {
                    e.preventDefault();
                    const rows = +(document.getElementById('table-rows').value);
                    const cols = +(document.getElementById('table-cols').value);
                    const value = document.getElementById('table-values').value;
                    let table = document.getElementById('table-contents');
                    if (!table) {
                        table = makeTag('table', e => {e.id = 'table-contents'});
                        document.body.appendChild(table);
                    }
                    let res = '';
                    if (rows && cols && value) {
                        res = '<tr>';
                        for (let i = 0; i < cols; i++) res += '<th>' + (i + 1) + '</th>';
                        res += '</tr>';
                        let src = '<tr>' + ('<td>' + value + '</td>').repeat(cols) + '</tr>';
                        res += src.repeat(rows);
                    }
                    table.innerHTML = res;
                }
            })
        )
    )
);
document.body.appendChild(layoutTable);