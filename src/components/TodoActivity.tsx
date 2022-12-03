import styled from "styled-components"

interface ITodoActivity {
	textColor: string
}

const TodoActivity = styled.input<ITodoActivity>`
	flex: 1;
	background: none;
	border: none;
	outline: none;
	font-family: manrope;
	font-size: 1rem;
	color: ${({ textColor }) => textColor};
	word-break: break-all;
	padding: 1rem 0;
	font-weight: 600;
`
export default TodoActivity
