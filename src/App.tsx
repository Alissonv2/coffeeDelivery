import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './hooks/ShoppingCart'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CartContextProvider>
				<BrowserRouter>
					<Router />
					<GlobalStyle />
				</BrowserRouter>
			</CartContextProvider>
		</ThemeProvider>
	)
}

export default App
