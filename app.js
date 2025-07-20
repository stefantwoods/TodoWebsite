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

