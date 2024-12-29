const input=document.querySelector('input');
const taskover=document.querySelector('.icons.icon2')
const additem=()=>{
    if(!input.value.length){
        return input.placeholder='please enter the task';
    }
    const tasks=document.createElement('div')
    tasks.className='tasks'
     tasks.innerHTML=`<div class="tasklist">${input.value}</div>
    <div class="icons icon1"><i class="ri-delete-bin-6-line"></i></div>
    <div class="icons icon2">✔️</div>`
    
    document.querySelector('.box').insertAdjacentElement('afterend',tasks)
    tasks.querySelector('.icon1').addEventListener('click',()=>{
        tasks.remove()
    })
    tasks.querySelector('.icon2').addEventListener('click',()=>{
         const allclass= document.querySelectorAll('.main');

         if(allclass.length){
                const lastelement=allclass[0];
                lastelement.style.marginTop='20vh';
         }
        const main=document.createElement('div');
        main.className='main'
        const completed=document.createElement('div')
      
        completed.innerText= tasks.querySelector('.tasklist').textContent
        tasks.remove()
        main.innerHTML=`<div class='afterall'>${completed.innerText}</div>
                      <button class='button'>DONE✅<button>`
                  
        document.body.appendChild(main)

    })

}
document.querySelector('.button1').addEventListener('click',()=>{
    additem()
    input.value=``;
})
input.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
       additem()
       input.value=``;

    }
})

