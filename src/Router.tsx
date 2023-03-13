import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/LayoutDefault'
import { Checkout } from './pages/checkout'
import { ConfirmedOrder } from './pages/confirmedOrder'
import { Home } from './pages/home'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/order-confirmed" element={<ConfirmedOrder />} />
			</Route>
		</Routes>
	)
}
