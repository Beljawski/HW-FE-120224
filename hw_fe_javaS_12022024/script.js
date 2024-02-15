// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
// const body = document.querySelector("body")
// body.innerHTML = '<div class="numbers"></div> '
// const classNumbers = document.querySelector(".numbers")
// let start = 100
// let end = 50
// for (let i = start; i >= end; i-=10) {
//     classNumbers.innerHTML +=
//        `<p>${i}</p>`
// }

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// const lines = ["Написать цикл", "который проходится", "по массиву строк", "для каждой строки создает параграф", "добавляет его в div с классом strings_container"]

// const body = document.querySelector("body")
// body.innerHTML = '<div class="strings_container"></div> '
// const classContainer = document.querySelector(".strings_container")

// for (let i = 0; i < lines.length; i++) {
//     classContainer.innerHTML += `<p>${lines[i]}</p>`
// }

// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const user = [
  {
    first_name: "Maria",
    last_name: "Beljawski",
    age: "38",
  },
  {
    first_name: "Luisa",
    last_name: "Beljawski",
    age: "8",
  },
  {
    first_name: "Oleg",
    last_name: "Beljawski",
    age: "41",
  },
];

const body = document.querySelector("body")
body.innerHTML = `'<div class="users_container"></div>'`
const usersContainer = document.querySelector(".users_container")


for (let i = 0; i < user.length; i++) {
    if (user[i].age > 18) {
        const userBlock = document.createElement("div");
        userBlock.classList.add("user_block");
        userBlock.innerHTML += 
        `<div class="user_block">${user[i].first_name} ${user[i].last_name}, Age: ${user[i].age}</div>`;
        usersContainer.appendChild(userBlock);
    }
}



