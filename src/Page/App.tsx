import React from "react"
import styled from "styled-components"
import ThemeToggle from "../components/ThemeToggle"

import useTheme from "../Hooks/useTheme"

interface IAppProps {
	textColor: string
	background: string
}

const AppElement = styled.div<IAppProps>`
	width: 100vw;
	min-height: 100vh;
	background: ${({ background }) => background};
	color: ${({ textColor }) => textColor};

	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 5vmin;
`

const App = ({ children }: { children: React.ReactNode }) => {
	const { color, setThemeHandler } = useTheme()

	return (
		<AppElement textColor={color.text} background={color.background}>
			<ThemeToggle />

			{children}
		</AppElement>
	)
}

export default App
