import { ProductItem } from './ProductItem'
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
					return <ProductItem key={product.id} product={product} />
				})}
		</ContainerProductList>
	)
}
