import React from "react"
import styled from "styled-components"
import "../styles/InputField.css"
import InputButton from "./InputButton"
import InputTask from "./InputTask"

export type todoHandler = (e: React.ChangeEvent<HTMLInputElement>) => void

export interface InputFieldProps {
	todo: string
	todoHandler: todoHandler
	saveTodo: (todo: string) => void
	clearTodo: () => void
}

const InputFieldElement = styled.form`
	min-width: 50vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 3vmin;
	margin-bottom: 3vmin;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`

const InputField = ({
	todo,
	todoHandler,
	saveTodo,
	clearTodo,
}: InputFieldProps) => {
	return (
		<InputFieldElement>
			<InputTask
				type="text"
				name="inputTask"
				id="inputTask"
				placeholder="What do you wanna do today"
				onChange={todoHandler}
				value={todo}
			/>

			<InputButton
				className="input-button"
				id="inputButton"
				onClick={(e) => {
					e.preventDefault()
					saveTodo(todo)
					clearTodo()
				}}
			>
				📌
			</InputButton>
		</InputFieldElement>
	)
}

export default InputField
