//*****************************************1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3

//*****************************************2

var a = 2;
var x = 1 + (a *= 2);
alert("Ответ на 2 вариант: " + x)

//*****************************************3
//3. Объявить две целочисленные переменные a и b и задать им
// произвольные начальные значения. Затем написать скрипт,
// который работает по следующему принципу:
var a = -5;
var b = 3;

if (a > 0 & b > 0){
    alert("Разность a-b равно: " + (a - b));
}
else if (a < 0 & b < 0){
    alert("Произведение a*b равно: " + (a * b));
}
else if ((a < 0 & b > 0) | (a > 0 & b < 0)){
    alert("Сумма a+b равно: " + (a + b));
}

//*****************************************4
//4. Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.

var a = parseInt(prompt("Введите число от 0 до 15: "));

switch (a) {
    case 0:
        alert("Число: 0");
    case 1:
        alert("Число: 1");
    case 2:
        alert("Число: 2");
    case 3:
        alert("Число: 3");
    case 4:
        alert("Число: 4");
    case 5:
        alert("Число: 5");
    case 6:
        alert("Число: 6");
    case 7:
        alert("Число: 7");
    case 8:
        alert("Число: 8");
    case 9:
        alert("Число: 9");
    case 10:
        alert("Число: 10");
    case 11:
        alert("Число: 11");
    case 12:
        alert("Число: 12");
    case 13:
        alert("Число: 13");
    case 14:
        alert("Число: 14");
    case 15:
        alert("Число: 15");
    default:
        alert("Введенное число вне диапазона значений!")
}

//*****************************************5
//5. Реализовать основные 4 арифметические операции в виде
// функций с двумя параметрами. Обязательно использовать оператор return.

var a = 8;
var b = 3;
var  c;

function operAddition(){
    alert("Операция сложения: a + b");
    return c = a+b;
}

alert("Операция сложения: a + b: " + operAddition());

//******************************************6
// 6. Реализовать функцию с тремя параметрами: function
// mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
// operation – строка с названием операции. В зависимости от переданного значения
// операции выполнить одну из арифметических операций (использовать функции
// из пункта 3) и вернуть полученное значение (использовать switch).

var arg1 = 5, arg2 = 4;
var operation;

operation = prompt("Введите вид операции: (+)/(-)/(*)/(/)");

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+": {
            alert("Сложение: " + arg1 + " + " + arg2 + " = " + (arg1 + arg2));
            break;
        }
        case "-": {
            alert("Вычитание: " + arg1 + " - " + arg2 + " = " + (arg1 - arg2));
            break;
        }
        case "*": {
            alert("Вычитание: " + arg1 + " * " + arg2 + " = " + (arg1 * arg2));
            break;
        }
        case "/": {
            alert("Вычитание: " + arg1 + " / " + arg2 + " = " + (arg1 / arg2));
            break;
        }
        default : {
            alert("Вы ввели не правильное выражение!")
        }
    }
}

mathOperation(arg1, arg2, operation);