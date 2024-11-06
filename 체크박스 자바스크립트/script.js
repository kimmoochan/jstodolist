
const toDo = document.querySelector('#save')
const Button = document.querySelector('#savebutton')
const main = document.querySelector('#main')

  document.addEventListener('DOMContentLoaded', () => {
    
    
    Button.addEventListener('click', (event) => {
        const item = document.createElement('div') 

        const checkBox = document.createElement('input')
        checkBox.setAttribute('type','checkbox')
        
        
        const text = document.createElement('span')
        text.textContent = toDo.value
        
        const removeButton = document.createElement('button') 
        removeButton.textContent = '삭제'
        
        
        removeButton.addEventListener('click', (event) => {
            event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode)
            
        })
        
        checkBox.addEventListener('change', (event) => {
            if(checkBox.checked){
                text.style.opacity = "0.5";
            }else{
                text.style.opacity = "1"
            }
        })
        
        item.appendChild(checkBox)
        item.appendChild(text)
        item.appendChild(removeButton)
        
        main.appendChild(item)
        toDo.value = ''
    })
    
    
    
})

function keyCodeCheck () {
    
    if(window.event.keyCode === 13){
        const item = document.createElement('div') 

        const checkBox = document.createElement('input')
        checkBox.setAttribute('type','checkbox')
        
        
        const text = document.createElement('span')
        text.textContent = toDo.value
        
        const removeButton = document.createElement('button') 
        removeButton.textContent = '삭제'
        
        
        removeButton.addEventListener('click', (event) => {
            event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode)
            
        })
        
        checkBox.addEventListener('change', (event) => {
            if(checkBox.checked){
                text.style.opacity = "0.5";
            }else{
                text.style.opacity = "1"
            }
        })
        
        item.appendChild(checkBox)
        item.appendChild(text)
        item.appendChild(removeButton)
        
        main.appendChild(item)
        toDo.value = ''
    }
}

    