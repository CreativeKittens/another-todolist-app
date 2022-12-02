import React from "react"
import "../styles/InputField.css"

export type todoHandler = (e: React.ChangeEvent<HTMLInputElement>) => void

export interface InputFieldProps {
	todo: string
	todoHandler: todoHandler
	saveTodo: (todo: string) => void
	clearTodo: () => void
}

const InputField = ({
	todo,
	todoHandler,
	saveTodo,
	clearTodo,
}: InputFieldProps) => {
	return (
		<form className="todo-input">
			<input
				type="text"
				name="inputTask"
				id="inputTask"
				className="input-task"
				placeholder="What do you wanna do today"
				onChange={todoHandler}
				value={todo}
			/>

			<button
				className="input-button"
				id="inputButton"
				onClick={(e) => {
					e.preventDefault()
					saveTodo(todo)
					clearTodo()
				}}
			>
				📌
			</button>
		</form>
	)
}

export default InputField
