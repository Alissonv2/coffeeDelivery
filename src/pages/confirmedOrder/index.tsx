/* eslint-disable prettier/prettier */
import {
	Container,
	ContainerContent,
	ContainerItems,
	ContentOrder,
	ImageDelivery,
	Item,
	ItemsInformation,
	Title,
	TitleContainer,
} from './styles'

import DeliveryMan from '../../assets/deliveryman.svg'
import { CurrencyDollar, MapPin, Money, Timer } from 'phosphor-react'
import { useAddressDeliveryData } from '../../hooks/AddressFormHook'

export function ConfirmedOrder() {
	const { addressData, paymentMethod } = useAddressDeliveryData()
	return (
		<Container>
			<TitleContainer>
				<Title>Uhu! Pedido confirmado</Title>
				<p>Agora é só esperar o pedido chegar até você</p>
			</TitleContainer>

			<ContainerContent>
				<ContentOrder>
					<ContainerItems>
						<Item statusColor="purple">
							<div>
								<MapPin size={18} weight="fill" />
							</div>
							<ItemsInformation>
								<span>
									Entrega em{' '}
									<strong>{`${addressData?.rua}, ${addressData?.numero}`}</strong>
								</span>
								<span>{`${addressData?.bairro} - ${addressData?.cidade
									}, ${addressData?.uf.toUpperCase()}`}</span>
							</ItemsInformation>
						</Item>
						<Item statusColor="yellow">
							<div>
								<Timer size={18} weight="fill" />
							</div>
							<ItemsInformation>
								<span>Previsão de entrega</span>
								<strong>20 min - 30 min</strong>
							</ItemsInformation>
						</Item>
						<Item statusColor="orange">
							<div>
								<CurrencyDollar size={18} weight="fill" />
							</div>
							<ItemsInformation>
								<span>Pagamento na entrega</span>
								<strong>{paymentMethod}</strong>
							</ItemsInformation>
						</Item>
					</ContainerItems>
				</ContentOrder>

				<ImageDelivery>
					<img src={DeliveryMan} alt="" />
				</ImageDelivery>
			</ContainerContent>
		</Container>
	)
}
