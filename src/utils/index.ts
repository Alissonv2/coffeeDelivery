import { ProductItem } from '../@types/products'

export function formatCurrency(currency: number) {
	return currency.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	})
}

export function calcTotalItemPrice(item: ProductItem[]) {
	const total = item.reduce(
		(accumulator, currentValue) => accumulator + currentValue.price,
		0,
	)

	return total
}
