import { CoffeeProducts } from '../../../@types/products'
import { formatCurrency } from '../../../utils'
import { CardButton } from '../../CardButton'
import { InputQTDEitems } from '../../Inputs/InputQtdeItems'
import {
	ContentProductItem,
	ContainerTypes,
	ProductName,
	PoductDescription,
	FooterProductItem,
	ItemActionsContainer,
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
				<ItemActionsContainer>
					<InputQTDEitems item={product} />
					<CardButton
						width={2.375}
						height={2.375}
						color={'#F3F2F2'}
						background={'#4B2995'}
					/>
				</ItemActionsContainer>
			</FooterProductItem>
		</ContentProductItem>
	)
}
