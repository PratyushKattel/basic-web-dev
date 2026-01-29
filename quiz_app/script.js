// const { Children } = require("react");

const quizdata = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Which HTML element is used to put the JavaScript code?",
        a: "<javascript>",
        b: "<scripting>",
        c: "<js>",
        d: "<script>",
        correct: "d",
    },
    {
        question: "What is the correct syntax for referring to an external script?",
        a: "<script name='xxx.js'>",
        b: "<script src='xxx.js'>",
        c: "<script href='xxx.js'>",
        d: "<script file='xxx.js'>",
        correct: "b",
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "msgBox('Hello World');",
        b: "alert('Hello World');",
        c: "msg('Hello World');",
        d: "alertBox('Hello World');",
        correct: "b",
    }
];
let score=0
let currans=""
const buttons=document.querySelectorAll('.option-btn')
const question=document.querySelector('#question-text')
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const optionC = document.getElementById('option-c');
const optionD = document.getElementById('option-d');

let i=0
function loadquiz(){
    let currquestion=quizdata[i]
    question.innerText=currquestion.question
    optionA.innerText = "A:"+currquestion.a;
    optionB.innerText = "B:"+currquestion.b;
    optionC.innerText = "C:"+currquestion.c;
    optionD.innerText = "D:"+currquestion.d;
    currans=currquestion.correct

}
function selectbtn(e){
    const selectedbtn=e.target
    const selectedans=selectedbtn.innerText
    if(selectedans[0].toLowerCase()===currans){
        // console.log("correct")
        score++
    }
    else{
        console.log("wrong")
    }
    if (i<quizdata.length-1){
        i++
        loadquiz()  }
    else{
        gameover()
        console.log("jo")
}
}
function gameover(){
    const container=document.querySelector('.container')
    container.innerHTML='<h2>Your Score is '+score+'/'+quizdata.length+'</h2><button onclick="location.reload()">Reload</button>'
}



buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        selectbtn(e);});
    });
    
    loadquiz()
    