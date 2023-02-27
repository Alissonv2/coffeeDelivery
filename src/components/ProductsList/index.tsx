import { CoffeeProducts } from '../../@types/products'
import { ContainerProductList } from './styles'

interface PropsProductsData {
	products: CoffeeProducts[]
}
export function ProductListCoffee({ products }: PropsProductsData) {
	return (
		<ContainerProductList>
			{products &&
				products.map((product: CoffeeProducts) => {
					return (
						<div key={product.name}>
							<img src={product.image} alt="" />
						</div>
					)
				})}
		</ContainerProductList>
	)
}
