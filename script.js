// 각 객체를 const로 지정
const toDo = document.querySelector('#save')
const Button = document.querySelector('#savebutton')
const main = document.querySelector('#main')

// 추가버튼 클릭시
 Button.addEventListener('click', (event) => {

    // 내용을 입력을 안하고 추가버튼 클릭시 경고창
        if(toDo.value==false){
            alert('내용을 입력해주세요!');
        }else{

            // div 생성
            const item = document.createElement('div') 

            // input 생성후 type을 checkbox로
            const checkBox = document.createElement('input')
            checkBox.setAttribute('type','checkbox')
            checkBox.setAttribute("class", "Allcheckbox")
            
            // span 생성후 span 에다가 input value를 넣어준다.
            const text = document.createElement('span')
            text.setAttribute("class", "AllSpan")
            text.textContent = toDo.value
            
            // 버튼 생성후 버튼 텍스트를 '삭제'로 하고 오른쪽정렬
            const removeButton = document.createElement('button') 
            removeButton.textContent = '삭제'
            removeButton.style.float = 'right';
            
            // 삭제 버튼 눌렀을때 내용들을 삭제한다.
            removeButton.addEventListener('click', (event) => {
                event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode)
                
            })
    
            // 체크박스를 활성화 시켰을때 흐릿하게
            checkBox.addEventListener('change', (event)=> {
                if(checkBox.checked){
                    text.style.opacity = "0.5";
                }else{
                    text.style.opacity = "1"
                }
            })
            
            // 아이템의 아래에 체크박스, 내용, 삭제버튼을 보낸다.
            item.appendChild(checkBox)
            item.appendChild(text)
            item.appendChild(removeButton)
            
            main.appendChild(item)
            toDo.value = ''

        }
    })
    
    
    
    
// 엔터키 눌렀을때 추가
    function keyCodeCheck () {
        // 키코드가 13일때 ( 키코드 13은 엔터키) 실행
        if(window.event.keyCode === 13){
            if(toDo.value==false){
                alert('내용을 입력해주세요!');
            }else{

            const item = document.createElement('div') 
            item.style.marginBottom = "20px"
            
            const checkBox = document.createElement('input')
            checkBox.setAttribute('type','checkbox')
            checkBox.setAttribute("class", "Allcheckbox")
            
            
            const text = document.createElement('span')
            text.setAttribute("class", "AllSpan")
            text.textContent = toDo.value
            
            const removeButton = document.createElement('button') 
            removeButton.textContent = '삭제'
            removeButton.style.float = 'right';

            
            removeButton.addEventListener('click', (event) => {
                event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode)
                
            })
            
            checkBox.addEventListener('change', (event) => {
                if(checkBox.checked){
                    text.style.opacity = "0.5";
                    text.style.textDecoration = "line-through";
                }else{
                    text.style.opacity = "1"
                    text.style.textDecoration = "none";
                }
                
        })
        
        item.appendChild(checkBox)
        item.appendChild(text)
        item.appendChild(removeButton)
        
        main.appendChild(item)
        toDo.value = ''
    }
    }
    
}


const AllCheck = document.querySelector('#AllCheck');

AllCheck.addEventListener('click', function(){

    const isChecked = AllCheck.checked;

    if(isChecked){
        const checkboxes = document.querySelectorAll('.Allcheckbox');

        for(const checkbox of checkboxes){
            checkbox.checked = true;
            const texts = document.querySelectorAll('.AllSpan')
        texts.forEach(function(text) {
            text.style.opacity = "0.5";
            text.style.textDecoration = "line-through";
        });
        }
    }

    else{
        const checkboxes = document.querySelectorAll('.Allcheckbox');
        for(const checkbox of checkboxes){
            checkbox.checked = false;
            const texts = document.querySelectorAll('.AllSpan')
        texts.forEach(function(text) {
            text.style.opacity = "1";
            text.style.textDecoration = "none";
        });
            
        }
    }
    
    
});


const checkboxes = document.querySelectorAll('.Allcheckbox');
for(const checkbox of checkboxes){
  checkbox.addEventListener('click',function(){
    
    const totalCnt = checkboxes.length;
  
    const checkedCnt = document.querySelectorAll('.Allcheckbox:checked').length;
    
    if(totalCnt == checkedCnt){
      document.querySelector('#AllCheck').checked = true;
    }
    else{
      document.querySelector('#AllCheck').checked = false;
    }
    
  });
  
  
}