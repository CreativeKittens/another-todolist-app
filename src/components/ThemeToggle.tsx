import styled from "styled-components"
import useTheme from "../Hooks/useTheme"

interface IThemeToggleProps {
	textColor: string
	background: string
}

interface IThemeHighlightToggle {
	background: string
}

const ThemeToggleContainer = styled.div<IThemeToggleProps>`
	background: ${({ background }) => background};
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

const ThemeHighlightToggle = styled.span<IThemeHighlightToggle>`
	height: 3rem;
	width: 3rem;
	background: ${({ background }) => background};
	position: absolute;
	display: inline-block;
	border-radius: 1rem;
	cursor: pointer;
	transition: all 0.3s ease-out;
	right: ${({ theme }) => (theme === "dark" ? "0%" : "100")};
`

const ThemeToggle = () => {
	const { color, setThemeHandler, theme } = useTheme()

	return (
		<ThemeToggleContainer
			textColor={color.text}
			background={color.tertiary}
			onClick={setThemeHandler}
		>
			<ThemeButtonToggle>☀️</ThemeButtonToggle>
			<ThemeButtonToggle>🌙</ThemeButtonToggle>
			<ThemeHighlightToggle background={color.primary} theme={theme} />
		</ThemeToggleContainer>
	)
}

export default ThemeToggle
