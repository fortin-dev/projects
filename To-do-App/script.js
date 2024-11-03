// Adding new li in ul from given input
let input = document.getElementById('inputTask');
document.getElementById('addBtn').addEventListener('click',()=>{
    let newList = document.createElement('LI');
    if(input.value ==''){
        alert("Please Enter Something")
    }
    else{
        let txt = document.createTextNode(input.value);
        newList.appendChild(txt);
        document.getElementById('myList').appendChild(newList);
        input.value=''
    }

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newList.appendChild(span);
    
    //remove button
    let close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
});

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);  