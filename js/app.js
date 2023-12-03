let checkBoxCount = 1;
let liCount = 1;
const getValue = (e) => {
    e.preventDefault();
    const inputForm = document.getElementById('inputForm');
    if (inputForm.value !== '') {
        
        const ulList = document.getElementById('ulList');
        
        const liList = document.createElement('li');
        liList.id = 'liId' + liCount;
        liList.className = 'list-group-item';
        liCount++;
        
        const inputCheckBox = document.createElement('input');
        inputCheckBox.type = 'checkbox';
        inputCheckBox.className = 'form-check-input me-1';
        inputCheckBox.id = 'checkboxId' + checkBoxCount;
        checkBoxCount++;
        
        const labelList = document.createElement('label');
        labelList.className = 'form-check-label stretched-link';
        labelList.htmlFor = inputCheckBox.id;
        labelList.appendChild(document.createTextNode(`${checkBoxCount-1}- ${inputForm.value}`));
        
        liList.appendChild(inputCheckBox);
        liList.appendChild(labelList);
        ulList.appendChild(liList);
        inputForm.value = '';
    }
    }

    const deleteTasks = ()=>{
        const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkedBoxes.forEach(checked => checked.parentNode.remove());
    }

const form = document.querySelector('form');
const deleteBtn = document.getElementById('deleteBtn')
form.addEventListener('submit', getValue);
deleteBtn.addEventListener('click', deleteTasks);


