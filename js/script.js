//Добавляем или изменяем значение:
localStorage.setItem("myKey", "myValue"); //теперь у вас в localStorage хранится ключ "myKey" cо значением "myValue"

//Выводим его в консоль:
var localValue = localStorage.getItem("myKey");
console.log(localValue); //"myValue"

//удаляем:
localStorage.removeItem("myKey");

//очищаем все хранилище
localStorage.clear();

//То же самое, только с квадратными скобками:

localStorage["Ключ"] = "Значение"; //установка значения
localStorage["Ключ"]; // Получение значения
delete localStorage["Ключ"]; // Удаление значения

//создадим объект
var obj = {
  item1: 1,
  item2: [123, "two", 3.0],
  item3: "hello",
};

var serialObj = JSON.stringify(obj); //сериализуем его

localStorage.setItem("myKey", serialObj); //запишем его в хранилище по ключу "myKey"

var returnObj = JSON.parse(localStorage.getItem("myKey")); //спарсим его обратно объект

//браузеры выделяют 5мб под localStorage. И если вы его превысите — получите исключение QUOTA_EXCEEDED_ERR. Кстати, c его помощью можно проверять есть ли в вашем хранилище еще место.

try {
  localStorage.setItem("ключ", "значение");
} catch (e) {
  if (e == QUOTA_EXCEEDED_ERR) {
    alert("Превышен лимит");
  }
}
