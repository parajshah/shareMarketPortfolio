// form data
const date = document.querySelector('#date');
const companyName = document.querySelector('#companyName');
const rate = document.querySelector('#rate');
const quantity = document.querySelector('#quantity');

// table
const shares = document.querySelector('#shares')

// console.log(date, companyName, rate, quantity);

// buttons
const addBtn = document.querySelector('#addBtn');
const resetBtn = document.querySelector('#resetBtn');

// console.log(addBtn, resetBtn);

// event listeners
addBtn.addEventListener('click', addShare);

function addShare(e) {
    e.preventDefault();

    if (date.value == '' || companyName.value == '' || rate.value == '' || quantity.value == '') {
        return;
    }

    const tableRow = document.createElement('tr');

    const tableDate = document.createElement('td');
    tableDate.innerText = formatDate(date.value)

    const tableCompanyName = document.createElement('td');
    tableCompanyName.innerText =  companyName.value;

    const tableRate = document.createElement('td');
    tableRate.innerText = rate.value;

    const tableQuantity = document.createElement('td');
    tableQuantity.innerText = quantity.value;

    const tableTotalCost = document.createElement('td');
    tableTotalCost.innerText = rate.value * quantity.value;

    // console.log(tableDate, tableCompanyName, tableRate, tableQuantity, tableTotalCost);

    tableRow.appendChild(tableDate);
    tableRow.appendChild(tableCompanyName);
    tableRow.appendChild(tableRate);
    tableRow.appendChild(tableQuantity);
    tableRow.appendChild(tableTotalCost);

    shares.appendChild(tableRow);

    // reset values of input fields
    date.value = '';
    companyName.value = '';
    rate.value = '';
    quantity.value = '';

    // console.log(tableRow);
}

function formatDate(d) {
    // console.log(d);
    var todayTime = new Date(d);
    var month = todayTime.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    var day = todayTime.getDate();
    var year = todayTime.getFullYear();
    return day + "-" + month + "-" + year;
}