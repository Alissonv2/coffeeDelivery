import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { ContainerListSubtitleItens, Item } from './styles'

export function ListItensSubtitle() {
	return (
		<ContainerListSubtitleItens>
			<Item statusColor="orange">
				<div>
					<ShoppingCart size={18} weight="fill" />
				</div>
				<span> Compra simples e segura</span>
			</Item>
			<Item statusColor="gray">
				<div>
					<Package size={18} weight="fill" />
				</div>
				<span>Embalagem mantém o café intacto</span>
			</Item>
			<Item statusColor="yellow">
				<div>
					<Timer size={18} weight="fill" />
				</div>
				<span>Entrega rápida e rastreada</span>
			</Item>
			<Item statusColor="purple">
				<div>
					<Coffee size={18} weight="fill" />
				</div>
				<span>O café chega fresquinho até você</span>
			</Item>
		</ContainerListSubtitleItens>
	)
}
