import { useEffect, useRef, useState } from "react"
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
	flex-wrap: wrap;

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
	const [isEdit, setEdit] = useState(false)

	const todoDate = new Date(date)

	const { color } = useTheme()

	const todoActivityElement = useRef<HTMLTextAreaElement>(null)

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
					className="todo-activity"
					readOnly={!isEdit}
					textColor={color.text}
					defaultValue={todo}
					ref={todoActivityElement}
					data-id={id}
					onChange={({ target }) => {
						const idTarget = Number.parseFloat(
							(target as HTMLTextAreaElement).getAttribute("data-id") as string
						)

						const newTodo = (target as HTMLTextAreaElement).value

						if (!newTodo) return

						editTodo(idTarget, newTodo)
					}}
					style={
						!isEdit
							? {}
							: {
									background: color.background,
									padding: "1rem",
									borderRadius: "0.8rem",
							  }
					}
				/>

				{/* <TodoActivity
					contentEditable
					textColor={color.text}
					className="todo-activity"
				>
					{todo}
				</TodoActivity> */}

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
						disabled={isDone}
						id="editButton"
						value={id}
						onClick={() => {
							setEdit((editStatus) => {
								return !editStatus
							})
						}}
					>
						{!isEdit ? "✏️" : "📩"}
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
