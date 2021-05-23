import {$} from './lib.js'
$('[data-action-todo=add]').click(() => {
	addNewTodo($('[data-action-todo=todo]').val())
	resetInputTodo()
})

const templateTodo = value => `
	<li class="todo-list-item">
		<p class="todo-activity">${value}</p>
		<span>
			<button class="btn btn-ripple">
				<i class="material-icons">done</i>
			</button>
			<button class="btn btn-ripple">
				<i class="material-icons">close</i>
			</button>
		</span>
	</li>
`
const addNewTodo = todo => 
$('.todo-list').newComponent(templateTodo(todo))
const resetInputTodo = _ => $('[data-action-todo=todo]').val('')