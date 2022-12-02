import "./styles/App.css"

import InputField from "./components/InputField"
import TodoItem from "./components/TodoItem"

import { useTodo } from "./Hooks/useTodo"
import useSaveTodo, { ItodoItem } from "./Hooks/useActionTodo"

const App = () => {
	const { todo, todoHandler, clearTodo } = useTodo()
	const { savedTodo, saveTodo, deleteTodo, finishTodo, editTodo } =
		useSaveTodo()

	return (
		<div className="App">
			<h1 className="heading">Todoify 💕</h1>

			<h3 className="subheading">
				This is another todolist app from me since i don't have any project or
				idea 😔
			</h3>

			<InputField
				todo={todo}
				todoHandler={todoHandler}
				saveTodo={saveTodo}
				clearTodo={clearTodo}
			/>

			<div className="todo-item-container">
				{savedTodo.length <= 0 ? (
					<h1 className="todo-message">You don't have anything todo 🥳</h1>
				) : (
					<>
						<h1 className="todo-status">
							You have {savedTodo.length} todo activity, cheer up 🍻
						</h1>
						{savedTodo.map((todoSaved: ItodoItem) => {
							return (
								<TodoItem
									key={todoSaved.id}
									date={todoSaved.date}
									todo={todoSaved.todo}
									id={todoSaved.id}
									isDone={todoSaved.isDone}
									deleteTodo={deleteTodo}
									finishTodo={finishTodo}
									editTodo={editTodo}
								/>
							)
						})}
					</>
				)}
			</div>
		</div>
	)
}

export default App
