import { useCart } from '../../../hooks/ShoppingCart'
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
	const { shoppingCartData, addItem } = useCart()
	const { name, price, image } = product

	function qtdeItemsRepeat(name: string) {
		let counter = 0
		for (const item of shoppingCartData.items) {
			if (item.name === name) counter++
		}

		return counter
	}

	function handleAddItemToCar() {
		addItem({ name, price, image })
	}

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
					<InputQTDEitems
						item={product}
						quantity={qtdeItemsRepeat(product.name)}
					/>
					<CardButton
						width={2.375}
						height={2.375}
						color={'#F3F2F2'}
						background={'#4B2995'}
						isSetItem
						addItems={handleAddItemToCar}
					/>
				</ItemActionsContainer>
			</FooterProductItem>
		</ContentProductItem>
	)
}
