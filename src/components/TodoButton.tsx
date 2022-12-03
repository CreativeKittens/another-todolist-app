import styled from "styled-components"

const TodoButton = styled.button`
	font-size: 1rem;
	border: none;
	outline: none;
	cursor: pointer;
	width: 3rem;
	height: 3rem;
	border-radius: 0.8rem;
	background: none;
	transition: 0.1s all ease-in-out;
	margin: 0 0.2rem;

	&:hover {
		transform: scale(0.9);
	}

	&#checkButton {
		background: #5050e6;
	}

	&#editButton {
		background: #e6d750;
	}
	&#deleteButton {
		background: #e65050;
	}
`

export default TodoButton
