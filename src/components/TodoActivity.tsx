import styled from "styled-components"

interface ITodoActivity {
	textColor: string
}

const TodoActivity = styled.textarea<ITodoActivity>`
	flex: 1;
	width: 100%;
	background: none;
	border: none;
	outline: none;
	font-family: manrope;
	font-size: 1rem;
	color: ${({ textColor }) => textColor};
	word-break: break-all;
	padding: 1rem 0;
	font-weight: 600;
	resize: none;
	margin-right: 3rem;

	@media screen and (max-width: 900px) {
		flex-direction: column;
		margin-bottom: 1rem;
		margin-right: 0;
	}
`
export default TodoActivity
