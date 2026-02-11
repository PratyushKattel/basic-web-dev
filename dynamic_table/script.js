const inputrow = document.querySelector('#row-num');
const inputcol = document.querySelector('#col-num');
const submit_btn = document.querySelector('#submit');
const table_div = document.querySelector('.table');
const add_row=document.querySelector('#add-row')
const add_col=document.querySelector('#add-col')
const high_even=document.querySelector('#high-even')
const table = document.createElement('table');
let row_n,col_n

function initTable(row_n, col_n) {
    table_div.innerHTML = ''; // Clear previous table
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
add_col.addEventListener('click',()=>{
    col_n+=1
    for( let row of table.childNodes){
        td = document.createElement('td');
            td.style.width = '50px';
            td.style.height = '20px';
            td.style.border = '1px solid blue';
        row.appendChild(td)
    }
    
    })
high_even.addEventListener('click',()=>{
    for( let i =0;i<table.childElementCount;i+=2){
        table.childNodes[i].style.backgroundColor="rgba(255, 255, 0, 0.5)"
        
}})
    // table.appendChild(tr)
add_row.addEventListener('click',()=>{
    let tr=document.createElement('tr')
    for(let i =0;i<col_n;i++){
        let td = document.createElement('td');
            td.style.width = '50px';
            td.style.height = '20px';
            td.style.border = '1px solid blue';
            tr.appendChild(td);
    }
    table.appendChild(tr)
})
submit_btn.addEventListener('click', () => {
     row_n = parseInt(inputrow.value);
     col_n = parseInt(inputcol.value);
    if (!isNaN(row_n) && !isNaN(col_n)) {
        initTable(row_n, col_n);
        console.log("Table generated");
    } else {
        console.log("Invalid input");
    }
});
