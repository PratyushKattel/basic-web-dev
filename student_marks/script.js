let student,total,average,subjects
const display=document.getElementById('display')
const table =document.createElement('table')
let flag=0
row_num=0
function analysemarks(student){
    subjects=student.marks.length
    total=student.marks.reduce((acc,mark)=>acc+mark,0);
    average=(total/subjects).toFixed(2);
}

class Student{
    constructor(name,marks){
        this.name = name;
        this.marks = marks;
    }
}
submit_btn=document.getElementById("submit-btn");

function submit(){
    let name=document.getElementById("name").value;
    let marks=Array.from(document.getElementById("marks").value.split(",")).map(Number);
    student=new Student(name,marks);
}
function intializetable(){
         table.innerHTML=`<thead>
            <tr>
                <th>Student Name</th>
                <th>Total</th>
                <th>Full Marks</th>
                <th>Percentages</th>
                <th>Grade</th>
            </tr>
        </thead>
`
        document.body.appendChild(table)
        flag=1
}
function display_record(student){
    curr_row=`<tr id=row-${row_num}>
        <td>${student.name}</td>
        <td>${total}</td>
        <td>${subjects*100}</td>
        <td>${(total/(subjects)).toFixed(2)} %</td>
        <td>${average<40?"FAIL":"PASS"}</td>
    </tr>
    `
    table.innerHTML+=curr_row

    if (average<40){
       document.getElementById(`row-${row_num}`).style.backgroundColor='yellow'

    }
    else{
       document.getElementById(`row-${row_num}`).style.backgroundColor='lightgreen'

    }
    row_num+=1

    

}
submit_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    submit();
    analysemarks(student);
    if (flag===0){
        intializetable()
    }
    display_record(student)
});