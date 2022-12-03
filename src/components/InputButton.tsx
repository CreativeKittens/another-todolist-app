import styled from "styled-components"

const InputButton = styled.button`
	width: 4rem;
	height: 4rem;
	background: #5050e6;
	outline: none;
	border: none;
	border-top-right-radius: 0.8rem;
	border-bottom-right-radius: 0.8rem;
	color: #f2f5f7;
	cursor: pointer;
	transition: 0.1s all ease-in-out;
	font-size: 1rem;

	&:hover {
		background: #4343b4;
		font-size: 0.8rem;
	}
`

export default InputButton
