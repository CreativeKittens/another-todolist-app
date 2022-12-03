import React from "react"
import styled from "styled-components"

const AppElement = styled.div`
	width: 100vw;
	min-height: 100vh;
	background: #1e2226;
	color: #f2f5f7;

	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 5vmin;
`

const App = ({ children }: { children: React.ReactNode }) => {
	return <AppElement>{children}</AppElement>
}

export default App
