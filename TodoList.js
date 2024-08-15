window.onload = function () {
    let todoArea = document.getElementById('todo');     //입력
    let listArea = document.getElementById('todolist'); //리스트
    // let add = document.getElementById('add');        //버튼

}

function addlist() {
    let todoArea = document.getElementById('todo');
    let listArea = document.getElementById('todolist');
    todoArea.focus();   
    if (todoArea.value == false) {
        alert('내용을 입력하세요!');
    } else {
        let listArea = document.createElement("li");
        let del = document.createElement('button');

        // listArea.option.add(todoArea.value);
        // listArea.value.add(todoArea.value);
        // listArea.innerHTML = todoArea.value;
        listArea.innerText = todoArea.value;
        //list.innerHTML = addValue.value;
        result.appendChild(listArea); //추가된 할일에 할일 리스트 추가하기
        listArea.appendChild(del);    //할일 리스트 추가시 삭제버튼도 추가    
        del.innerText = '❌'

        del.addEventListener("click", deletelist);  // button클릭 시 deletelist 호출

        //debugger;     //aaa를 입력해서 add버튼을 누르고 디버그로 확인해보면 <select id="todolist" multiple></select>에 aaa가 들어간다
        //근데 화면에는 안나온다
        todoArea.value = '';    //입력 후 input값 삭제
    }
}


//개별삭제
function deletelist(e) { //삭제 버튼 클릭시 
    let todoArea = document.getElementById('todo');
    let list = e.target.parentElement;  // 삭제하는 li를 parentElement를 이용해 조회/저장
    todoArea.focus();
    list.remove();

    console.log(list)

    // debugger;
}

//전체삭제
function alldel() {
    let listArea = document.getElementById('todolist');
    listArea.innerHTML = '';
    window.location.reload()    //전체삭제 후 새로고침

}