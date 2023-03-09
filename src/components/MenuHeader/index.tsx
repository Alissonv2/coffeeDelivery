import { MapPin } from 'phosphor-react'
import { CardButton } from '../CardButton'
import { ContainerMenuHeader, LocationButton } from './styles'
import { useAddressDeliveryData } from '../../hooks/AddressFormHook'

export function MenuHeader() {
	const { addressData } = useAddressDeliveryData()
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
			<CardButton
				width={2.375}
				height={2.375}
				color={'#c47f17'}
				background={'#f1e9c9'}
			/>
		</ContainerMenuHeader>
	)
}
