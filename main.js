const items =document.querySelector('.items');
const input =document.querySelector('.footer__input');
const addBtn =document.querySelector('.footer__button');

function onAdd(){
//1.적은 글자를 받아온다.
const text= input.value;
if(text===''){
    input.focus();
    return;
}
//2.받아온 글자를 바탕으로 item을 만든다.
const item =createItem(text);
//3.item을 append한다.
items.appendChild(item);

//4.scroll할때 밑으로 이동
item.scrollIntoView({block:'center'});

//5.input을 초기화한다.
input.value='';
input.focus();
}

function createItem(text){
    const itemRow=document.createElement('li');
    itemRow.setAttribute('class','itemRow');

    const itemDivider =document.createElement('div');
    itemDivider.setAttribute('class','item__divider');
    
    const item=document.createElement('div');
    item.setAttribute('class','item');

    const name=document.createElement('span');
    name.setAttribute('class','item__name');
    name.textContent=text;
    
    const btn=document.createElement('button');
    btn.setAttribute('class','item__delete');
    btn.innerHTML=`<i class="fas fa-trash"></i>`;
    btn.addEventListener('click',(event)=>{
        items.removeChild(itemRow);
    });

    item.appendChild(name);
    item.appendChild(btn);
    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}

addBtn.addEventListener('click',(event)=>{
    onAdd();
});

input.addEventListener('keypress',(event)=>{
    if(event.key==='Enter'){
        onAdd();
    }
});