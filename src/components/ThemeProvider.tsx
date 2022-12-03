import React, { createContext, useState } from "react"

export interface IThemeContext {
	theme: string
	setThemeHandler?: () => void
}

export const ThemeContext = createContext<IThemeContext>({
	theme: "dark",
})

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState("dark")

	const setThemeHandler = () => {
		setTheme((prevTheme) => {
			return prevTheme === "dark" ? "light" : "dark"
		})
	}

	return (
		<ThemeContext.Provider value={{ theme, setThemeHandler }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
