/* eslint-disable no-unused-expressions */
/* eslint-disable no-case-declarations */
import { ProductItem } from '../@types/products'

interface Cartstate {
	items: ProductItem[]
}

export function cartReducer(
	state: Cartstate,
	action: { type: string; payload: any },
) {
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				items: [...state.items, action.payload],
			}
		case 'REMOVE_ITEM':
			const index = state.items.findIndex(
				(item) => item.name === action.payload,
			)
			const updateItems = [...state.items]
			updateItems.splice(index, 1)[0]
			return {
				items: updateItems,
			}
		case 'REMOVE_PRODUCT':
			return {
				items: state.items.filter((item) => item.name !== action.payload),
			}
		case 'RESET_CART':
			return {
				items: [],
			}

		default:
			return state
	}
}
