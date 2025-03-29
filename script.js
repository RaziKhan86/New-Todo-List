// Todo-List
const InputElement = document.querySelector('.Todo-Input');
const divValue = document.querySelector('.display-value');
let Date = document.querySelector('.input-date');

// Creating Array
let TodoList = [{
    name:'Make dinner',
    dueDate:'12-22-2024'
}];


// Display Todo-Name & Date
function TodoItem() {
    let nameAddition = '';

    for (let i = 0; i < TodoList.length; i++) {
        const todoObject = TodoList[i];
        const {name,dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        TodoList.splice(${i},1);
        TodoItem();
        " class="delete-button">Delete</button>
        `;
        console.log(html);
        nameAddition += html;
    }
    divValue.innerHTML = nameAddition;
}
// Display the Todo name & Todo date when page will refresh
TodoItem();



// Adding the TodoName and TodoDate into Array
function AddTodo() {
    // For Adding Name & Date
    const Todoname = InputElement.value;
    const TodoDate = Date.value;
    TodoList.push({
        name: Todoname,
        dueDate:TodoDate
    });

    //Reset the input of input tag
    InputElement.value = '';
    Date.value = '';

    // Calling the function
    TodoItem();
}


