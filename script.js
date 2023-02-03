let sortAsc = document.querySelector('.sortAsc');
let sortDesc = document.querySelector('.sortDesc');
let form = document.querySelector('form');
let tasklist = document.querySelector('.taskList');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let div = document.createElement('div');

    let input = document.createElement('input');
    let buttonDelete = document.createElement('button');
    let buttonDrag = document.createElement('button');
    buttonDelete.setAttribute('type', 'button');
    buttonDrag.setAttribute('type', 'button');

    div.append(input);
    div.append(buttonDelete);
    div.append(buttonDrag);
    input.classList.add('input');
    buttonDelete.classList.add('deleteTask');
    buttonDrag.classList.add('dragTask');
    div.classList.add('taskItem')


    buttonDelete.textContent = 'X';
    buttonDrag.textContent = 'DRAG';


    tasklist.append(div);
});

sortAsc.addEventListener('click', (e) => {
    sortAsc.style.display = 'none';
    sortDesc.style.display = 'block';
    let arrOfInputs = [];
    let divs = document.querySelectorAll('input');

    divs.forEach((item) => {
        if (item.value === '') {
            item.parentElement.remove();
        } else {
            arrOfInputs.push(item.value);
        }
    });

    arrOfInputs.sort();


    divs.forEach((item, index) => {
        item.value = arrOfInputs[index];
    });
});

sortDesc.addEventListener('click', () => {
    sortAsc.style.display = 'block';
    sortDesc.style.display = 'none';
    let arrOfInputs = [];
    let divs = document.querySelectorAll('input');

    divs.forEach((item) => {
        if (item.value === '') {
            item.parentElement.remove();
        } else {
            arrOfInputs.push(item.value);
        }
    });

    arrOfInputs.sort().reverse();


    divs.forEach((item, index) => {
        item.value = arrOfInputs[index];
    });
});

tasklist.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteTask")) {
        let count = document.querySelector('.taskList').childElementCount;
        if (count > 1) {
            e.target.parentElement.remove();
        } else {
           document.querySelector('.input').value = '';
        }
    }
});

const sortable = Sortable.create(tasklist, {
    handle: ".dragTask"
});
