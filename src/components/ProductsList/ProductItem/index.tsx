import { CoffeeProducts } from '../../../@types/products'
import { formatCurrency } from '../../../utils'
import {
	ContentProductItem,
	ContainerTypes,
	ProductName,
	PoductDescription,
	FooterProductItem,
} from './styles'

interface ProductItemProps {
	product: CoffeeProducts
}

export function ProductItem({ product }: ProductItemProps) {
	return (
		<ContentProductItem>
			<img src={product?.image} alt="" />
			<ContainerTypes>
				{product?.type.map((type: string) => (
					<span key={type}>{type}</span>
				))}
			</ContainerTypes>
			<ProductName>{product?.name}</ProductName>
			<PoductDescription>{product?.description}</PoductDescription>
			<FooterProductItem>
				<span>{formatCurrency(product.price)}</span>
			</FooterProductItem>
		</ContentProductItem>
	)
}
