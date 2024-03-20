import react, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Styles/Global';
import { Footer, Navbar } from './Components/Layout';
import { darkTheme, lightTheme } from './Styles/Theme';
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import ThemeContext from './Utils/Context/ThemeContex';

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const App: React.FC = () => {
  const [theme, setTheme] = useState("darkThemes");
	
	const isDarkTheme = theme === "darkTheme"

	const toggleTheme = () => {
		setTheme(isDarkTheme ? "lightTheme" : "darkTheme")
	}

	return (
		<ThemeProvider theme={isDarkTheme ? lightTheme : darkTheme}>
			<GlobalStyles />
			<ThemeContext.Provider value={toggleTheme }>
				<RouterProvider router={router} />
			</ThemeContext.Provider>
			<Footer />
		</ThemeProvider>
	);
};


export default App
