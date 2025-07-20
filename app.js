// 1. state - track your data
let todos = [];
let currentFilter = 'all';

// 2. Get DOM elements
const input = document.querySelector('.new-todo');
const todoList = document.querySelector('.todo-list');
const todocount = document.querySelector('.todo-count');

// 3. Add event listener for adding todos
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && input.value.trim() !== '') {
        addTodo(input.value.trim());
        input.value = '';
    }
});

// 4. Function to add a todo
function addTodo(text) {
    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(todo);
    render();
}

// 5. Function to render todos
function render() {
    // clear the list
    todoList.innerHTML = '';

    // add each todo
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'todo-item completed' : 'todo-item';
        li.innerHTML = `
            <input type="checkbox" class="toggle" ${todo.completed ? 'checked' : ''}>
            <label>${todo.text}</label>
            <button class="destroy">x</button>
        `;
        todoList.appendChild(li);
    });
}