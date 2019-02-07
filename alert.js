//alert('Learn JavaScript');

/*var admin;
var name = 'Vasiliy';

admin = name;
alert( admin );*/

//Также переменные можем создавать через запятую
//var admin, name;

//06.02.19 Познакомились с if, else, ?. Разберем некоторые примеры использования

/*if ("0") {
	alert('hi')
}8/

//Данный алерт выведется так как внутри if строка. Любая строка кроме пустой, является true.

//1

/*var value = prompt('Каково "официальное" название JavaScript?', '')

if (value == 'ECMAScript') {
	alert('Верно!')
} else {
	alert('Не знаете? ECMAScript!')
}*/

//2

/*
var value = prompt('Введите число', 0)

if (value > 0) {
	alert( 1 );
} else if (value < 0) {
	alert( -1 );
} else {
	alert( 0 );
}*/

//3

var userName = prompt('Кто пришел?', '')

if (userName == 'admin') {
	var pass = prompt('Пароль?', '');

	if (pass == 'Черный Властелин') {
		alert( 'Добро пожаловать!');
	} else if (pass == null) {
		alert('Вход отменен');
	} else {
		alert('Пароль неверен');
	}

} else if (userName == null) {
	alert('Вход отменен');
} else {
	alert('Я вас не знаю');
}

//4

//result = (a + b < 4) ? 'Мало' : 'Много';

//5

var message;

if (login == 'Вася') {
	message = 'Привет';
} else if (login == 'Директор') {
	message = 'Здравствуйте';
} else if (login == '') {
	message = 'Нет логина';
} else {
	message = '';
}

//запишем предыдущую запись с помощью '?'

var message = (login == 'Вася') ? 'Привет':
	(login == 'Директор') ? 'Здравствуйте':
	(login == '') ? 'Нет логина':
	'';