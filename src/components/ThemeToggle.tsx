import styled from "styled-components"

const ThemeToggleContainer = styled.div`
	background: #282e33;
	/* padding: 0.8rem; */
	margin-bottom: 1.5rem;
	margin-top: 1rem;
	border-radius: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 3rem;
	width: 6rem;
	position: relative;
	position: relative;
	z-index: 1;
	cursor: pointer;
`
const ThemeButtonToggle = styled.button`
	font-size: 1.5rem;
	background: none;
	margin: 0;
	padding: 0;
	outline: none;
	border: none;
	width: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 1;
	cursor: pointer;
`

const ThemeHighlightToggle = styled.span`
	height: 3rem;
	width: 3rem;
	background: #5050e6;
	position: absolute;
	display: inline-block;
	border-radius: 1rem;
	cursor: pointer;
`

const ThemeToggle = () => {
	return (
		<ThemeToggleContainer>
			<ThemeButtonToggle>☀️</ThemeButtonToggle>
			<ThemeButtonToggle>🌙</ThemeButtonToggle>
			<ThemeHighlightToggle />
		</ThemeToggleContainer>
	)
}

export default ThemeToggle
