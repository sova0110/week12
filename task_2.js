let text = "у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.";

//1. количество символов в тексте
console.log(`1. Количество символов в тексте: ${text.length}`);

//2. перенос строки
let task2 = document.querySelector('#result');
let result = text.replace(/;/g, "\n");
console.log(`2. Текст с переносами строк: \\n ${result}`);
task2.innerHTML=`2. Текст с переносами строк: \\n ${result}`;
//3
let substring = result.replace(/ /g, "");
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
//4
let newText = result.slice(28, 49);
console.log(`4. Извлечение подстроки: ${newText}`);
//5
let replacedText = newText.replace(/клён/g, "дубе");
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
//6
let replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
//7
let replacedText3 = result.replace(/клён/g, "дубе");
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
//8
let index= text.indexOf('моря')
console.log(`8. Индекс первого вхождения "моря": ${index}`);
//9
let modifiedText= replacedText[0].toUpperCase() + replacedText.slice(1);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);

//вывод
let task1 = document.querySelector('#task1');
task1.innerHTML= `1. Количество символов в тексте: ${text.length}`;
let task3 = document.querySelector('#task3');
task3.innerHTML= `3. Текст с удалёнными пробелами: ${substring}`;
let task4 = document.querySelector('#task4');
task4.innerHTML= `4. Извлечение подстроки: ${newText}`;
let task5 = document.querySelector('#task5');
task5.innerHTML= `5. Замена "клён" на "дубе": ${replacedText}`;
let task6 = document.querySelector('#task6');
task6.innerHTML= `6. Строка result в верхнем регистре: ${replacedText2}`;
let task7 = document.querySelector('#task7');
task7.innerHTML= `7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`;
let task8 = document.querySelector('#task8');
task8.innerHTML= `8. Индекс первого вхождения "моря": ${index}`;
let task9 = document.querySelector('#task9');
task9.innerHTML= `9. Строка с измененной первой буквой: ${modifiedText}`;