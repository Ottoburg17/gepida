/*
* File: app.js
* Author: Németh Ottó
* Copyright: 2023, Németh Ottó
* Group: Szoft I-2 E
* Date: 2023-03-04
* Github: https://github.com/nemethotto/
* Licenc: GNU GPL
*/ 

const tbody = document.querySelector('#tbody');
var emplist = [
    { name: 'Cassis', wheel: '28', use: 'offroad', price: '557900' },
    { name: 'Albion 900', wheel: '28', use: 'trekking', price: '519900'},
    { name: 'Asgard', wheel: '29', use: 'technikás utak', price: '519900'},
    { name: 'Ruga', wheel: '29', use: 'hegyi', price: '372900'},
    { name: 'Reptila', wheel: '28', use: 'városi', price: '308900'},
    { name: 'Sirmium', wheel: '29', use: 'hegyi', price: '264900'}
];

function createTable() {
    empList.forEach((emp) => {
        console.log(emp.name)
        let tr = document.createElement('tr');

        let tdName = document.createElement('td');
        let tdWheel = document.createElement('td');
        let tdUse = document.createElement('td');
        let tdPrice = document.createElement('td');

        tdName.textContent = emp.name;
        tdWheel.textContent = emp.wheel;
        tdUse.textContent = emp.use;
        tdPrice.textContent = emp.price;

        tbody.append(tr);
        tr.append(tdName);
        tr.append(tdWheel);
        tr.append(tdUse);
        tr.append(tdPrice);
    });
};
createTable();