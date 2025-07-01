//Live Clock & Greeting
function updateClockAndGreeting() {
    const clock = document.getElementById('clock');
    const greeting = document.getElementById('greeting');
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    clock.textContent = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')} PM`;
    let greet = '';
    if (h < 12) greet = 'Good morning';
    else if (h < 18) greet = 'Good afternoon';
    else greet = 'Good evening';
    greeting.textContent = greet;
}
setInterval(updateClockAndGreeting, 1000);
updateClockAndGreeting();

// Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

//To-Do List
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoError = document.getElementById('todo-error');
let todos = [];
let todoFilter = 'all';

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = todoInput.value.trim();
    if (!value) {
        todoError.textContent = 'Task cannot be empty!';
        return;
    }
    todoError.textContent = '';
    todos.push({ text: value, completed: false });
    todoInput.value = '';
    renderTodos();
});

todoList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-task')) {
        const idx = e.target.parentElement.dataset.index;
        todos.splice(idx, 1);
        renderTodos();
    } else if (e.target.type === 'checkbox') {
        const idx = e.target.parentElement.dataset.index;
        todos[idx].completed = e.target.checked;
        renderTodos();
    }
});

document.querySelectorAll('.filters button').forEach(btn => {
    btn.addEventListener('click', function() {
        todoFilter = btn.dataset.filter;
        renderTodos();
    });
});

function renderTodos() {
    todoList.innerHTML = '';
    let filtered = todos;
    if (todoFilter === 'completed') filtered = todos.filter(t => t.completed);
    else if (todoFilter === 'incomplete') filtered = todos.filter(t => !t.completed);
    filtered.forEach((todo, i) => {
        const li = document.createElement('li');
        li.className = 'todo-item' + (todo.completed ? ' completed' : '');
        li.dataset.index = i;
        li.innerHTML = `<input type="checkbox" ${todo.completed ? 'checked' : ''}>
            <span>${todo.text}</span>
            <button class="delete-task">Delete</button>`;
        todoList.appendChild(li);
    });
}

//Sticky Notes
const noteForm = document.getElementById('note-form');
const noteInput = document.getElementById('note-input');
const notesContainer = document.getElementById('notes-container');
const noteError = document.getElementById('note-error');
let notes = [];
const noteColors = ['#ffe082', '#b2dfdb', '#ffab91', '#c5e1a5', '#f8bbd0', '#ffd54f'];

noteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = noteInput.value.trim();
    if (!value) {
        noteError.textContent = 'Note cannot be empty!';
        return;
    }
    noteError.textContent = '';
    const color = noteColors[Math.floor(Math.random()*noteColors.length)];
    notes.push({ text: value, color });
    noteInput.value = '';
    renderNotes();
});

notesContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-note')) {
        const idx = e.target.parentElement.dataset.index;
        notes.splice(idx, 1);
        renderNotes();
    }
});

function renderNotes() {
    notesContainer.innerHTML = '';
    notes.forEach((note, i) => {
        const div = document.createElement('div');
        div.className = 'sticky-note';
        div.style.background = note.color;
        div.dataset.index = i;
        div.innerHTML = `${note.text}<button class="delete-note">×</button>`;
        notesContainer.appendChild(div);
    });
}
