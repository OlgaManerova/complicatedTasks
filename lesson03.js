let lang = 'ru';
let days = [];

//1 - a

if (lang == 'ru') {
    days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
} else if (lang == 'en') {
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}

console.log(days);


//1 - b

switch (lang) {
    case 'ru': 
        days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        console.log(days);
    break;

    case 'en': 
        days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        console.log(days);
    break;

    default: 
        console.log('Нет значения');
}

//1 - c 

days['ru'] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
days['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(days[lang]);



// 2

let namePerson = 'Александр';


namePerson == 'Артем' ? console.log('директор') : namePerson == 'Александр' ? console.log('преподаватель') : console.log('студент');