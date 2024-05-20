const button_random_word = document.querySelector('.button_random_word');
const random_word = document.querySelector('#random_word');

const button_random_word2 = document.querySelector('.button_random_word2');
const random_word2 = document.querySelector('#random_word2');

function makeNewWord(){
    let alph = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const randomIndex1 = Math.floor(Math.random() * 33);
    const randomLetter1 = alph[randomIndex1];
    const randomIndex2 = Math.floor(Math.random() * 33);
    const randomLetter2 = alph[randomIndex2];
    const randomIndex3 = Math.floor(Math.random() * 33);
    const randomLetter3 = alph[randomIndex3];
    const randomIndex4 = Math.floor(Math.random() * 33);
    const randomLetter4 = alph[randomIndex4];
    let word= randomLetter1.concat(randomLetter2, randomLetter3, randomLetter4)
    console.log("случайное слово: " + word);
    random_word2.innerHTML=word;
}

//решение через цикл
function makeNewWord2() {
  let result = '';
  const letters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const lettersLength = letters.length;
  let counter = 0;
  while (counter < 4) {
    result += letters.charAt(Math.floor(Math.random() * lettersLength));
    counter += 1;
  }
  return random_word.innerHTML=result;
}

button_random_word.addEventListener('click', makeNewWord2);
button_random_word2.addEventListener('click', makeNewWord);