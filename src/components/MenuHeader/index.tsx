import { ShoppingCart, MapPin } from 'phosphor-react'
import { CartButton, ContainerMenuHeader, LocationButton } from './styles'

export function MenuHeader() {
	return (
		<ContainerMenuHeader>
			<LocationButton>
				<MapPin size={25} weight="fill" />
				<span>Juazeiro do Norte, CE</span>
			</LocationButton>
			<CartButton>
				<ShoppingCart size={25} weight="fill" />
			</CartButton>
		</ContainerMenuHeader>
	)
}
