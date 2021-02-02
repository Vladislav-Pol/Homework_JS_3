// ___ Task 1 ___
console.log("___ Task 1 ___");
let i = 1;
while (i <= 50) {
    console.log(i);
    i++;
}
i = 35;
console.log("___ ___ ___");
while (i >= 8) {
    console.log(i);
    i--;
}

// ___ Task 2 ___
console.log("___ Task 2 ___");
i = 89;
let text_task2 = "",
    text_task22 = "";

while (i >= 11) {
    text_task2 += (i + "<br/>");
    text_task22 += (i + "\n");
    i--;
}
console.log(text_task22);

// ___ Task 3 ___
console.log("___ Task 3 ___");
let sum = 0;
i = 100;
while (i >= 0) {
    sum += i;
    i--;
}
console.log(sum);

// ___ Task 4 ___
console.log("___ Task 4 ___");
i = 5;
sum = 0;
let j;
while (i >= 1) {
    sum = j = 0;
    while (j <= i) {
        sum += j;
        j++;
    }
    console.log(`В числе ${i} сумма чисел равна ${sum}`);
    i--;
}

// ___ Task 5 ___
console.log("___ Task 5 (while)___");
let a = 8;
let b = 56;
i = a;
while (i <= b) {
    if (!(i % 2)) console.log(i);
    i++;
}

console.log("___ Task 5 (for) ___")
for (i = a; i <= b; i++) {
    if (i % 2) continue;
    console.log(i);
}

// ___ Task 6 ___
console.log("___ Task 6 ___");
a = 2; //Первый множитель
b = 1; //Второй множитель
let c = 10; //Верхний предел
for (; a <= c; a++) {
    for (let d = b; d <= c; d++)
        console.log(`${a} * ${d} = ${a * d}`);
    console.log("");
}

// ___ Task 7 ___
console.log("___ Task 7 ___");
let n = 1000,
    lower_level = 50,
    step = 2,
    result,
    num = 0;
for (result = n; result >= lower_level; num++) result /= step;
console.log(`Число ${n} станет меньше ${lower_level} после ${num} делений на ${step} и будет равно ${result}`);

// ___ Task 8 ___
console.log("___ Task 8 ___");
let insert_value,
    quantity = 0;
sum = 0;
while (true) {
    for (let flag = true; flag;)
        flag = isNaN(insert_value = prompt("Введите число"));
    sum += Number(insert_value);
    quantity++;
    if (insert_value == 0 || insert_value == "") break;
}
console.log(`Сумма введенных чисел равняется ${sum}, среднее арифметическое - ${sum / (quantity - 1)}`);

// ___ Task 9 ___
console.log("___ Task 9 ___");
let string = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57",
    maxNumber = null,
    minNumber = null,
    number,
    spasePosition = true,
    startSearchposition = 0;
string += " ";
while (spasePosition > -1 && startSearchposition < string.length) {
    spasePosition = string.indexOf(" ", startSearchposition);
    number = Number(string.substr(startSearchposition, spasePosition - startSearchposition));
    maxNumber = maxNumber > number ? maxNumber : number;
    minNumber = (minNumber == null || minNumber > number) ? number : minNumber;
    startSearchposition = spasePosition + 1;
}
console.log(`Минимальное число в строке - ${minNumber}, максимальное - ${maxNumber}`);


// ___ Task 10 ___
console.log("___ Task 10 ___");
let $10number = 987310,
    $10number_,
    $10count = 0,
    $10sum = 0,
    $10revers = "";
for(; $10number > 0;){
    $10number_ = ($10number % 10);
    console.log($10number_);
    $10number = parseInt($10number / 10);
    $10count++;
    $10sum += $10number_;
    $10revers += $10number_;
}
console.log(`В числе ${$10count} цифр, сумма цифр - ${$10sum}, число в обратном порядке ${$10revers}`);


/*
1. Выведите числа от 1 до 50 и от 35 до 8.
2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку.
3. С помощью цикла найдите сумму чисел от 0 до 100.
4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3).
5. Выведите чётные числа от 8 до 56. Решить задание через while и for.
6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
...
3*1=3
3*2=6
3*3=9
3*4=12
...
Для решения задачи используйте вложенные циклы.
7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num.
8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение.
9. Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.
10. Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.
Для ввода значений можете использовать ф-цию prompt(), либо задавать значения при
инициализации переменных в коде.
Для вывода результатов скриптов вы можете использовать функции: alert() для вывода
всплывающего окна; console.log() для вывода в консоль браузера; document.write() для вывода
в «тело» HTML-документа.*/