import {
	ContainerButtons,
	ContentPriceAndName,
	ContentProductContainer,
	ProductCard,
	ProductName,
	RemoveProduct,
	SelectedCoffeesContainer,
} from './styles'
import { useCart } from '../../hooks/ShoppingCart'
import { ProductItem } from '../../@types/products'
import { calcTotalItemPrice, formatCurrency } from '../../utils/index'
import { InputQTDEitems } from '../Inputs/InputQtdeItems'
import { useEffect, useState } from 'react'

export function SelectedCoffees() {
	const { shoppingCartData, removeProduct } = useCart()
	const [dataProducts, setDataProducts] = useState<ProductItem[][]>([])

	async function handleProducts(productsArray: ProductItem[]) {
		const newProductArray = productsArray.reduce((acumullator: any, object) => {
			const { name } = object
			if (!acumullator[name]) {
				acumullator[name] = []
			}
			acumullator[name].push(object)
			return acumullator
		}, {})
		const newDataProducts: ProductItem[][] = Object.values(newProductArray)
		setDataProducts(newDataProducts)
	}

	useEffect(() => {
		handleProducts(shoppingCartData?.items)
	}, [shoppingCartData.items])

	return (
		<SelectedCoffeesContainer>
			{dataProducts &&
				dataProducts.map((item: ProductItem[]) => {
					return (
						<ProductCard key={item[0].id}>
							<img src={item[0].image} alt="" />
							<ContentProductContainer>
								<ContentPriceAndName>
									<ProductName>{item[0].name}</ProductName>
									<span>{formatCurrency(calcTotalItemPrice(item))}</span>
								</ContentPriceAndName>
								<ContainerButtons>
									<InputQTDEitems item={item[0]} />
									<RemoveProduct onClick={() => removeProduct(item[0].name)}>
										Remover
									</RemoveProduct>
								</ContainerButtons>
							</ContentProductContainer>
						</ProductCard>
					)
				})}
		</SelectedCoffeesContainer>
	)
}
