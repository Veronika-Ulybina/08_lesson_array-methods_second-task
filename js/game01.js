'use strict';

const getRandom = () => {
  return Math.ceil(Math.random() * 100);
}

const getUserNumber = () => {
  return prompt('Отгадайте число от 1 до 100?');
}

const guessNumber = () => {
  const random = getRandom();

  while (true) {
    const userNum = getUserNumber();

    if (userNum === null) {
      break;
    }
    if (userNum > random) {
      alert('Меньше! Попробуйте еще раз :)');
    } else if (userNum < random) {
      alert('Больше! Попробуйте еще раз :)');
    } else if (+userNum === random) {
      alert('Правильно!');
      break;
    } else if (Number.isNaN(+userNum)) {
      alert('Введите число');
    }
  }
}

guessNumber();
