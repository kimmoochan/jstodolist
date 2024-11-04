// const checkbox= document.createElement("input");
//         const innertext=document.getElementById('save').value;
//         const crontext=document.getElementById('newtext').innerText;
//         const container =document.getElementById("container");
const btnEl=document.querySelector('#savebutton');
function btn(){
    // const list = document.createElement("li");
    const checkbox= document.createElement("input");
    // const innertext=document.getElementById('save').value;
    // const crontext=document.getElementById('newtext').innerText=innertext;
    // const container =document.getElementById("container");
    // 1. 추가할 값을 input창에서 읽어온다
    const save 
    = document.getElementById('save').value;
    
    // 2. 추가할 li element 생성
    // 2-1. 추가할 li element 생성
    const li = document.createElement("li");
    
    // 2-2. li에 id 속성 추가 
    li.setAttribute('id',save);
    
    // 2-3. li에 text node 추가 
    const textNode = document.createTextNode(save);
    li.appendChild(textNode);
    
    // 3. 생성된 li를 ul에 추가
    document
    .getElementById('fruits')
    .appendChild(li);
    
    container.appendChild(checkbox);
    checkbox.type = 'checkbox';

}
    
  btnEl.addEventListener('click',()=>{
    btn();
  })

    