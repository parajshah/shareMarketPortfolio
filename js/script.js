// form data
const date = document.querySelector('#date');
const companyName = document.querySelector('#companyName');
const rate = document.querySelector('#rate');
const quantity = document.querySelector('#quantity');
const action = document.querySelector('#action');

// table
const allShares = document.querySelector('#allShares');
const shortTermShares = document.querySelector('#shortTermShares');
const longTermShares = document.querySelector('#longTermShares');

// buttons
const addBtn = document.querySelector('#addBtn');
const resetBtn = document.querySelector('#resetBtn');

// event listeners
addBtn.addEventListener('click', addShare);

function addShare(e) {
    e.preventDefault();

    // if (date.value == '' || companyName.value == '' || rate.value == '' || quantity.value == '') {
    //     alert('Please fill all the input fields!')
    //     return;
    // }

    const tableRow = document.createElement('tr');

    const tableAction = document.createElement('td');
    tableAction.innerText = action.value.toUpperCase();

    const tableDate = document.createElement('td');
    tableDate.innerText = formatDate(date.value);

    const tableCompanyName = document.createElement('td');
    tableCompanyName.innerText =  companyName.value.toUpperCase();

    const tableRate = document.createElement('td');
    tableRate.innerText = rate.value;

    const tableQuantity = document.createElement('td');
    tableQuantity.innerText = quantity.value;

    const tableTotalCost = document.createElement('td');
    tableTotalCost.innerText = rate.value * quantity.value;

    // console.log(tableDate, tableCompanyName, tableRate, tableQuantity, tableTotalCost);

    // add input data to new row
    tableRow.appendChild(tableDate);
    tableRow.appendChild(tableAction);
    tableRow.appendChild(tableCompanyName);
    tableRow.appendChild(tableRate);
    tableRow.appendChild(tableQuantity);
    tableRow.appendChild(tableTotalCost);

    // check for long term and invalid scripts
    const today = new Date();
    const shareBuyDate = new Date(date.value);
    
    if (action.value == 'sell') {
        if (today - shareBuyDate > 31540000000) {
            longTermShares.appendChild(tableRow);
            clearFields();
            return;
        } else if (today - shareBuyDate < 0) {
            invalidDate();
            clearFields();
            return;
        } else {
            shortTermShares.appendChild(tableRow);
            clearFields();
            return;
        }
    } else if (action.value == 'buy') {
        if (today - shareBuyDate < 0) {
            invalidDate();
            clearFields();
            return;
        } else {
            // add to all shares
            allShares.appendChild(tableRow);
            clearFields();
            return;
        }        
    } else if (action.value == 'bonus') {
        if (rate.value != '0') {
            alert('Rate must be zero for bonus shares')
        } else {
            // add to all shares
            allShares.appendChild(tableRow);
            clearFields();
            return;
        }
    } else if (action.value == 'split') {
        if (rate.value != '0') {
            alert('Rate must be zero for split')
        } else {
            // add to all shares
            allShares.appendChild(tableRow);
            clearFields();
            return;
        }
    }
    // console.log(tableRow);
}

function clearFields() {
    // reset values of input fields
    date.value = '';
    companyName.value = '';
    rate.value = '';
    quantity.value = '';
}

function invalidDate() {
    alert('Invalid date')
}

function formatDate(d) {
    var todayTime = new Date(d);
    var month = todayTime.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    var day = todayTime.getDate();
    var year = todayTime.getFullYear();
    return day + "-" + month + "-" + year;
}