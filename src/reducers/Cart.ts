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
			return {
				items: state.items.filter((item) => item.name !== action.payload),
			}
		case 'REMOVE_PRODUCT':
			return {
				items: state.items.filter((item) => item.name !== action.payload),
			}

		default:
			return state
	}
}
