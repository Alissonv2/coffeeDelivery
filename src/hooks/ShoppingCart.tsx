import { createContext, ReactNode, useContext, useReducer } from 'react'
import { ProductItem } from '../@types/products'
import { cartReducer } from '../reducers/Cart'

interface CartShoppingData {
	items: ProductItem[]
	total: number
}

interface CartContextTypereturn {
	shoppingCartData: CartShoppingData
	addItem: (item: ProductItem) => void
	removeItem: (productName: string) => void
	removeProduct: (productNameRemove: string) => void
}

interface CartContextType {
	children: ReactNode
}

export const CartContext = createContext({} as CartContextTypereturn)

export function CartContextProvider({ children }: CartContextType) {
	const [productsState, dispatch] = useReducer(cartReducer, {
		items: [],
	})

	function addItem(item: ProductItem) {
		const newItem = { ...item, id: Date.now() }
		dispatch({ type: 'ADD_ITEM', payload: newItem })
	}

	function removeItem(productName: string) {
		dispatch({ type: 'REMOVE_ITEM', payload: productName })
	}

	function removeProduct(productNameRemove: string) {
		dispatch({ type: 'REMOVE_PRODUCT', payload: productNameRemove })
	}

	const shoppingCartData = {
		...productsState,
		total: productsState.items.reduce(
			(accumulator, currentValue) => accumulator + currentValue.price,
			0,
		),
	}

	return (
		<CartContext.Provider
			value={{ addItem, removeItem, removeProduct, shoppingCartData }}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)

	return context
}
