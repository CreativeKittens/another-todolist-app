import { useContext } from "react"
import { ThemeContext } from "../components/ThemeProvider"

const useTheme = () => {
	const { theme, setThemeHandler } = useContext(ThemeContext)

	const color = {
		text: theme === "dark" ? "#F2F5F7" : "#041226",
		background: theme === "dark" ? "#1E2226" : "#F2F6FA",
		primary: theme === "dark" ? "#5050E6" : "#3E3EB3",
		secondary: theme === "dark" ? "#E6F2FF" : "#333A40",
		tertiary: theme === "dark" ? "#282E33" : "#E6ECF2",
		warning: theme === "dark" ? "#ccbf34" : "#ccbf34",
		danger: theme === "dark" ? "#f92f60" : "#b2213a",
	}

	return { color, setThemeHandler, theme }
}

export default useTheme
