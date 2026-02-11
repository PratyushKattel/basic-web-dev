const inputrow = document.querySelector('#row-num');
const inputcol = document.querySelector('#col-num');
const submit_btn = document.querySelector('#submit');
const table_div = document.querySelector('.table');

function initTable(row_n, col_n) {
    table_div.innerHTML = ''; // Clear previous table
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';

    for (let i = 0; i < row_n; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < col_n; j++) {
            let td = document.createElement('td');
            td.style.width = '50px';
            td.style.height = '20px';
            td.style.border = '1px solid blue';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    table_div.appendChild(table);
}

submit_btn.addEventListener('click', () => {
    const rows = parseInt(inputrow.value);
    const cols = parseInt(inputcol.value);
    if (!isNaN(rows) && !isNaN(cols)) {
        initTable(rows, cols);
        console.log("Table generated");
    } else {
        console.log("Invalid input");
    }
});
