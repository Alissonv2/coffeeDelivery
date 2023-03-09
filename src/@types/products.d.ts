export interface CoffeeProducts {
	id: string
	name: string
	description: string
	price: number
	image: string
	type: string[]
}

export interface ProductItem {
	id?: number | null
	image: string
	name: string
	price: number
}
