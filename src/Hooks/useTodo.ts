import { useState } from "react"

import { InputFieldProps, todoHandler } from "../components/InputField"

export const useTodo = () => {
	const [todo, setTodo] = useState<string>("")

	const todoHandler: todoHandler = (e) => {
		const target = e.target

		setTodo(target.value)
	}

	const clearTodo = () => {
		setTodo("")
	}

	return <InputFieldProps>{ todo, todoHandler, clearTodo }
}
