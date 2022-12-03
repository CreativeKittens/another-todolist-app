import styled from "styled-components"

interface ITodoItemDate {
	textColor: string
}

const TodoItemDate = styled.span<ITodoItemDate>`
	opacity: 0.4;
	font-size: 1rem;
	color: ${({ textColor }) => textColor};
`

export default TodoItemDate
