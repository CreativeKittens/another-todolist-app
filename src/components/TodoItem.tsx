import {
	ItodoItem,
	deleteTodo,
	finishTodo,
	editTodo,
} from "../Hooks/useActionTodo"
import "../styles/TodoItem.css"

export type checkTodo = () => void

interface ITodoItem extends ItodoItem {
	deleteTodo: deleteTodo
	finishTodo: finishTodo
	editTodo: editTodo
}

const TodoItem = ({
	todo,
	isDone,
	id,
	date,
	deleteTodo,
	finishTodo,
	editTodo,
}: ITodoItem) => {
	const todoDate = new Date(date)
	return (
		<div className={isDone ? "todo-item todo-done" : "todo-item"}>
			<span className="todo-item-date">
				{todoDate.getDate()}/{todoDate.getMonth()}/{todoDate.getFullYear()}
			</span>
			<div className="todo-item-body">
				<input
					type="text"
					className="todo-activity"
					defaultValue={todo}
					readOnly
				/>

				{/* </input> */}
				<div className="todo-action">
					<button
						title="Finish todo"
						className="todo-button"
						id="checkButton"
						value={id}
						onClick={({ target }) => {
							const idTarget = Number.parseFloat(
								(target as HTMLButtonElement).value
							)

							finishTodo(idTarget)
						}}
					>
						✅
					</button>
					<button
						title="Edit todo"
						className="todo-button"
						id="editButton"
						value={id}
						onClick={({ target }) => {
							const idTarget = Number.parseFloat(
								(target as HTMLButtonElement).value
							)

							editTodo(idTarget)
						}}
						disabled={isDone}
					>
						📝
					</button>
					<button
						title="Delete todo"
						className="todo-button"
						id="deleteButton"
						value={id}
						onClick={({ target }) => {
							const idTarget = Number.parseFloat(
								(target as HTMLButtonElement).value
							)

							deleteTodo(idTarget)
						}}
					>
						🗑️
					</button>
				</div>
			</div>
		</div>
	)
}

export default TodoItem
