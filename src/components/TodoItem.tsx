import styled from "styled-components"
import {
	ItodoItem,
	deleteTodo,
	finishTodo,
	editTodo,
} from "../Hooks/useActionTodo"
import useTheme from "../Hooks/useTheme"
import TodoAction from "./TodoAction"
import TodoActivity from "./TodoActivity"
import TodoButton from "./TodoButton"
import TodoItemBody from "./TodoItemBody"
import TodoItemDate from "./TodoItemDate"

export type checkTodo = () => void

interface ITodoItem extends ItodoItem {
	deleteTodo: deleteTodo
	finishTodo: finishTodo
	editTodo: editTodo
}

interface ITodoItems {
	background: string
}

const TodoItems = styled.div<ITodoItems>`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	background: ${({ background }) => background};
	padding: 0.8rem;
	border-radius: 0.8rem;
	margin-top: 2vmin;

	&.todo-done {
		opacity: 0.5;
	}

	&.todo-done {
		.todo-activity {
			text-decoration: line-through;
		}
	}
`

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

	const { color } = useTheme()

	return (
		<TodoItems
			className={isDone ? "todo-item todo-done" : ""}
			background={color.tertiary}
		>
			<TodoItemDate textColor={color.text}>
				{todoDate.getDate()}/{todoDate.getMonth()}/{todoDate.getFullYear()}
			</TodoItemDate>

			<TodoItemBody>
				<TodoActivity
					value={todo}
					readOnly
					className="todo-activity"
					textColor={color.text}
				/>

				<TodoAction>
					<TodoButton
						onClick={({ target }) => {
							const idTarget = Number.parseFloat(
								(target as HTMLButtonElement).value
							)

							finishTodo(idTarget)
						}}
						id="checkButton"
						value={id}
					>
						☑️
					</TodoButton>
					<TodoButton
						onClick={({ target }) => {
							const idTarget = Number.parseFloat(
								(target as HTMLButtonElement).value
							)

							editTodo(idTarget)
						}}
						disabled={isDone}
						id="editButton"
						value={id}
					>
						📝
					</TodoButton>
					<TodoButton
						onClick={({ target }) => {
							const idTarget = Number.parseFloat(
								(target as HTMLButtonElement).value
							)

							deleteTodo(idTarget)
						}}
						id="deleteButton"
						value={id}
					>
						🗑️
					</TodoButton>
				</TodoAction>
			</TodoItemBody>
		</TodoItems>
	)
}

export default TodoItem
