import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useReducer,
} from 'react'
import { ProductItem } from '../@types/products'
import { cartReducer } from '../reducers/Cart'
import { calcTotalItemPrice } from '../utils'

interface CartShoppingData {
	items: ProductItem[]
	total: number
}

interface CartContextTypereturn {
	shoppingCartData: CartShoppingData
	addItem: (item: ProductItem) => void
	removeItem: (productName: string) => void
	removeProduct: (productNameRemove: string) => void
	resetCart: () => void
}

interface CartContextType {
	children: ReactNode
}

export const CartContext = createContext({} as CartContextTypereturn)

export function CartContextProvider({ children }: CartContextType) {
	const initialState: CartShoppingData = JSON.parse(
		localStorage.getItem('@CofeeDelivery-cart') || 'null',
	) || {
		items: [],
		valorTotal: 0,
	}
	const [productsState, dispatch] = useReducer(cartReducer, initialState)

	useEffect(() => {
		localStorage.setItem('@CofeeDelivery-cart', JSON.stringify(productsState))
	}, [productsState])

	function addItem(item: ProductItem) {
		const newItem = { ...item, id: Date.now() }
		dispatch({ type: 'ADD_ITEM', payload: newItem })
	}

	function removeItem(productName: string) {
		dispatch({ type: 'REMOVE_ITEM', payload: productName })
	}

	function resetCart() {
		dispatch({ type: 'RESET_CART', payload: '' })
	}

	function removeProduct(productNameRemove: string) {
		dispatch({ type: 'REMOVE_PRODUCT', payload: productNameRemove })
	}

	const shoppingCartData = {
		...productsState,
		total: calcTotalItemPrice(productsState.items),
	}

	return (
		<CartContext.Provider
			value={{
				addItem,
				removeItem,
				removeProduct,
				shoppingCartData,
				resetCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)

	return context
}
