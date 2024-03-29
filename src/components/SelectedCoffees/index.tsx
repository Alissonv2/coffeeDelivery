import {
	ButtonOrderConfirm,
	ContainerButtons,
	ContainerPaymentInformations,
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
import { useAddressDeliveryData } from '../../hooks/AddressFormHook'
import { useNavigate } from 'react-router-dom'

export function SelectedCoffees() {
	const { shoppingCartData, removeProduct, resetCart } = useCart()
	const { addressData } = useAddressDeliveryData()
	const [dataProducts, setDataProducts] = useState<ProductItem[][]>([])
	const deliveryFee = 3.5

	const navigate = useNavigate()

	function handleConfirmedOrder() {
		if (shoppingCartData.total > 0 && addressData) {
			resetCart()
			navigate('/order-confirmed')
		} else {
			console.log('não')
		}
	}

	async function handleProducts(productsArray: ProductItem[] | undefined) {
		const newProductArray = productsArray?.reduce(
			(acumullator: any, object) => {
				const { name } = object
				if (!acumullator[name]) {
					acumullator[name] = []
				}
				acumullator[name].push(object)
				return acumullator
			},
			{},
		)
		const newDataProducts: ProductItem[][] = Object.values(newProductArray)
		setDataProducts(newDataProducts)
	}

	useEffect(() => {
		handleProducts(shoppingCartData?.items)
	}, [shoppingCartData?.items])

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
									<InputQTDEitems item={item[0]} quantity={item.length} />
									<RemoveProduct onClick={() => removeProduct(item[0].name)}>
										Remover
									</RemoveProduct>
								</ContainerButtons>
							</ContentProductContainer>
						</ProductCard>
					)
				})}
			<ContainerPaymentInformations>
				<div>
					<span>Total de itens</span>
					<span>{formatCurrency(shoppingCartData?.total)}</span>
				</div>
				<div>
					<span>Entrega</span>
					<span>{formatCurrency(deliveryFee)}</span>
				</div>
				<div>
					<strong>Total</strong>
					<strong>
						{formatCurrency(shoppingCartData.total + deliveryFee)}
					</strong>
				</div>
			</ContainerPaymentInformations>

			<ButtonOrderConfirm
				disabled={!addressData || shoppingCartData.total === 0}
				onClick={handleConfirmedOrder}
			>
				Confirmar Pedido
			</ButtonOrderConfirm>
		</SelectedCoffeesContainer>
	)
}
