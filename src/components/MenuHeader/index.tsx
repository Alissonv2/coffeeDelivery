import { MapPin } from 'phosphor-react'
import { CardButton } from '../CardButton'
import { ContainerMenuHeader, LocationButton } from './styles'

export function MenuHeader() {
	return (
		<ContainerMenuHeader>
			<LocationButton>
				<MapPin size={25} weight="fill" />
				<span>Juazeiro do Norte, CE</span>
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
