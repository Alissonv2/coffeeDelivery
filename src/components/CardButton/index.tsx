import { ShoppingCart } from 'phosphor-react'
import { CartButton } from './styles'

interface CardButtonProps {
	width: number
	height: number
	color: string
	background: string
}

export function CardButton({
	width,
	height,
	color,
	background,
}: CardButtonProps) {
	return (
		<CartButton
			width={width}
			height={height}
			color={color}
			background={background}
		>
			<ShoppingCart size={25} weight="fill" />
		</CartButton>
	)
}
