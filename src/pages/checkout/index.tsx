import { FormDelivery } from '../../components/FormAddressDelivery'
import { SelectedCoffees } from '../../components/SelectedCoffees'
import { AddressAndOrdersSection, ContainerCheckout } from './styles'

export function Checkout() {
	return (
		<ContainerCheckout>
			<AddressAndOrdersSection>
				<h1>Complete seu Pedido</h1>
				<FormDelivery />
			</AddressAndOrdersSection>
			<AddressAndOrdersSection>
				<h1>Cafés Selecionados</h1>
				<SelectedCoffees />
			</AddressAndOrdersSection>
		</ContainerCheckout>
	)
}
