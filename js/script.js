// 1 упражнение

function max (a, b){
return a < b ? b : a;
}
console.log(max(-1, 0));

// 2 упражнение

function min(a, b) {
  if (a < b ? a : (a = b)) {
    return a;
  } else {
    return b;
  }
}
console.log(min(0, -1, 100, 500, 100500));

// 

function min(...arg) {
  return arg.reduce((a, b) => {
    return a < b ? a : (a = b);
  }, arg[0]);
}


// 3 упражнение

const users = [
  { firstName: "Иван", lastName: "Золо", age: 17 },
  { firstName: "Игорь", lastName: "Дон", age: 54 },
  { firstName: "Ваня", lastName: "Гон", age: 33 },
  { firstName: "Денис", lastName: "Пушкин", age: 11 },
  { firstName: "Григорий", lastName: "Лепс", age: 70 },
  { firstName: "Костя", lastName: "Шак", age: 24 },
  { firstName: "Артем", lastName: "Лог", age: 40 },
  { firstName: "Вася", lastName: "Пуг", age: 42 },
  { firstName: "Макс", lastName: "Род", age: 12 },
  { firstName: "Андрей", lastName: "Куй", age: 30 },
];

users.forEach(function(item, i, users) {
  item.fullName = item.firstName+" "+item.lastName;
});
let ageNum = users.filter((item) =>{
	return item.age >= 18;
});
let result = users.map(({firstName, lastName}) => `\n${firstName} ${lastName}`).join('')

console.log(users);
console.log(ageNum);
console.log(result);


// 4 упражнение

let words = [1,2,3,4,5]
test(words)
function test(Arr) {
  words.splice(0, 1);
}
   console.log(words);

// 5 упражнение

let words = [1,2,3,4,5]
test(words)
function test(Arr) {
  words.splice(5, 0, 6, 7, 8);
}
   console.log(words);

// 6 упражнение 

const source = { firstname: "Tom", age: 10 };
const extend = (source, ...arg) => {
  let obj = { ...source };
  for (let i = 0; i < arg.length; i++) {
    for (let key in arg[i]) {
      obj[key] = arg[i][key];
    }
  }
  return obj;
};
let s = extend(source, { firstname: "John" }, { lastname: "Doe" });

// 7 упражнение

let setComment = (date, message, author = 'Anonymous') => {
  if (date === undefined || message === undefined) {
  return alert("Данные переданы некорректно");
}
console.log(`${author}, ${date}, ${message}`);
}
setComment("2016-11-02", "Everything is ok", "John");
setComment("2016-11-02", "You could do it better!");