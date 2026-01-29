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

}
loadquiz()