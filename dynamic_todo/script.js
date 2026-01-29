const tasks=document.querySelector('.to-do')
const addbtn=document.getElementById('add-btn')
const inputtext=document.querySelector('.task-input')
const views=document.getElementsByName('filter')
let i=0
let completioncount=0
let curr_disp="all"

function addtask(curr_task){
    inputtext.value=''
    let li =document.createElement('li')
    li.innerHTML=`<button class='done-btn'>Done</button><button class='del-btn'>Delete</button><span id ='task-${i}'>${curr_task[0].toUpperCase()+curr_task.slice(1)}</span>`
    li.classList.add("uncompleted","visible")
    tasks.append(li)
    i++
}
function updateme(event){
    let op=0
    let curr_btn=event.target
    let curr_parent=(curr_btn.parentElement)
    event.target.classList[0]=='del-btn'? op=1:op=2 //op 1 meaning deleting  and 2 meaning saving as done
    switch (op) {
        case 1:
            
            curr_parent.parentElement.removeChild(curr_parent)
            // console.log("The thing has succesffuly been deleted")
            i--
            break;
        case 2:
            // register as done and increase the count
            curr_parent.classList.remove('uncompleted')
            curr_parent.classList.add('completed')
                 
       
    }
}
function update_display(curr_disp){
    const all_tasks=tasks.children
    if (curr_disp !='all')
    {
   for (const task of all_tasks){
    
    if (!task.classList.contains(curr_disp)){
        // console.log(task,"task doesnot  contain current_disp ")
        task.classList.remove('visible')
        task.classList.add('hidden')
        // console.log(task.classList)
        
    }else{
        // console.log(task,"task contains curr_disp")
        task.classList.remove('hidden')
        task.classList.add('visible')
    }
   }
}else{
    [...all_tasks].forEach((task)=>{
        task.classList.remove('hidden')
        task.classList.add('visible')
    })
}
}

addbtn.addEventListener('click',()=>{

    let curr_task=inputtext.value
    // console.log(curr_task)
    addtask(curr_task)
    
})

tasks.addEventListener('click',(e)=>{
    if(e.target.tagName=='BUTTON')
        // console.log("fromt tasks.event listener ", e)
         updateme(e)
})

views.forEach((option) => {
    option.addEventListener('change',(e)=>{
        curr_disp=e.target.id
        // console.log(curr_disp)
        update_display(curr_disp)
    })
    
});