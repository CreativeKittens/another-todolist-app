import styled from "styled-components"

const TodoItemBody = styled.div`
	margin-top: 0.6rem;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`

export default TodoItemBody
