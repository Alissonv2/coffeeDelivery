import { useCart } from '../../hooks/ShoppingCart'
import { MapPin } from 'phosphor-react'
import { CardButton } from '../CardButton'
import {
	ContainerCartButton,
	ContainerMenuHeader,
	LocationButton,
} from './styles'
import { useAddressDeliveryData } from '../../hooks/AddressFormHook'

export function MenuHeader() {
	const { addressData } = useAddressDeliveryData()
	const { shoppingCartData } = useCart()
	return (
		<ContainerMenuHeader>
			<LocationButton>
				<MapPin size={25} weight="fill" />
				{addressData?.cidade ? (
					<span>{`${addressData?.cidade}, ${addressData?.uf}`}</span>
				) : (
					<span>Informe o endereço</span>
				)}
			</LocationButton>
			<ContainerCartButton>
				<CardButton
					width={2.375}
					height={2.375}
					color={'#c47f17'}
					background={'#f1e9c9'}
				/>

				{shoppingCartData?.items.length ? (
					<span>{shoppingCartData?.items.length}</span>
				) : (
					<></>
				)}
			</ContainerCartButton>
		</ContainerMenuHeader>
	)
}
