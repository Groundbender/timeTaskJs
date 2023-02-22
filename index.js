const output = document.querySelector(".output");
let week = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

let day = {
  morning: "утро",
  afternoon: "день",
  evening: "вечер",
  night: "ночи",
};

let date = new Date();
let hours = date.getHours();
let today = week[date.getDay()];
let time = date.toLocaleTimeString("en");
console.log(time);

const renderDay = (h) => {
  if (hours > 4 && hours <= 11) {
    return `Доброе ${day.morning}`;
  } else if (hours > 11 && hours < 18) {
    return `Добрый ${day.afternoon}`;
  } else if (hours >= 18 && hours <= 22) {
    return `Добрый ${day.evening}`;
  } else {
    return `Доброй ${day.night}`;
  }
};

const newYearCounter = () => {
  let timeRemaining = (Date.parse("1 january 2024") - Date.now()) / 1000;
  let dayRemaining = Math.floor(timeRemaining / 60 / 60 / 24);

  // console.log(timeRemaining);
  // console.log(dayRemaining);
  return dayRemaining;
};

const checkDayText = (num) => {
  if (num > 10 && [11, 12, 13, 14].includes(num % 100)) return "дней";
  lastNum = num % 10;
  if (lastNum == 1) return "день";
  if ([2, 3, 4].includes(lastNum)) return "дня";
  if ([5, 6, 7, 8, 9, 0].includes(lastNum)) return "дней";
};
const render = () => {
  output.innerHTML = `
  ${renderDay(hours)} <br>
  Сегодня: ${today} <br>
  Текущее время: ${time} <br>
  До нового года осталось: ${newYearCounter()} ${checkDayText(newYearCounter())}
`;
};

render();
