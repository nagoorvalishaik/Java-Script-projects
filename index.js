const goal1 = document.querySelector('#goal1');
const goal2 = document.querySelector('#goal2')
const goal3 = document.querySelector('#goal3')
const progress = document.querySelector('.keep-gng')

const check1 = document.querySelector('#Check1')
const check2 = document.querySelector('#Check2')
const check3 = document.querySelector('#Check3')



const goal1Answer = goal1.addEventListener('change',()=>{
        console.log(goal1.value);
})


const goal2Answer = goal2.addEventListener('change',()=>{
    console.log(goal2.value);
})


const goal3Answer = goal3.addEventListener('change',()=>{
    console.log(goal3.value);
})



check1.addEventListener('change',(event)=>{
  
    if (event.currentTarget.checked) {
        if(goal1.value){
            goal1.classList.add('Color-change') 
            progress.textContent = "“Keep Going, You’re making great progress!”"

        } 
       }
  
})

check2.addEventListener('change',(event)=>{
  
    if (event.currentTarget.checked) {
        if(goal2.value){
            goal2.classList.add('Color-change')
            progress.textContent = "“Keep Going, You’re making great progress!”"
   

        }   
       }
  
})
check3.addEventListener('change',(event)=>{
  
    if (event.currentTarget.checked) {
        if(goal3.value){
            goal3.classList.add('Color-change')
            progress.textContent = "“Keep Going, You’re making great progress!”"
   

        }
       }
  
})