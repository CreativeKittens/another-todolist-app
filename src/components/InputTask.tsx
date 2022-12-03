import styled from "styled-components"

interface IInputTask {
	background: string
	textColor: string
}

const InputTask = styled.input<IInputTask>`
	flex: 1;
	height: 4rem;
	outline: none;
	border: none;
	background: ${({ background }) => background};
	color: ${({ textColor }) => textColor};
	border-top-left-radius: 0.8rem;
	border-bottom-left-radius: 0.8rem;
	padding-left: 1rem;
	font-size: 1rem;
`

export default InputTask
