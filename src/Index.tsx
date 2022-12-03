import App from "./Page/App"
import Heading from "./components/Heading"
import InputField from "./components/InputField"
import TodoItem from "./components/TodoItem"
import SubHeading from "./components/SubHeading"
import TodoItemContainer from "./components/TodoItemContainer"
import TodoMessage from "./components/TodoMessage"
import TodoStatus from "./components/TodoStatus"

import { useTodo } from "./Hooks/useTodo"
import useSaveTodo, { ItodoItem } from "./Hooks/useActionTodo"

const Index = () => {
	const { todo, todoHandler, clearTodo } = useTodo()
	const { savedTodo, saveTodo, deleteTodo, finishTodo, editTodo } =
		useSaveTodo()

	return (
		<App>
			<Heading>Todoify 💕</Heading>

			<SubHeading className="subheading">
				This is another todolist app from me since i don't have any project or
				idea 😔
			</SubHeading>

			<InputField
				todo={todo}
				todoHandler={todoHandler}
				saveTodo={saveTodo}
				clearTodo={clearTodo}
			/>

			<TodoItemContainer>
				{savedTodo.length <= 0 ? (
					<TodoMessage>You don't have anything todo 🥳</TodoMessage>
				) : (
					<>
						<TodoStatus>
							You have {savedTodo.length} todo activity, cheer up 🍻
						</TodoStatus>
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
			</TodoItemContainer>
		</App>
	)
}

export default Index
