import { useNavigate } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import { CartButton } from './styles'
interface CardButtonProps {
	width: number
	height: number
	color: string
	background: string
	isSetItem?: boolean
	addItems?: () => void
}

export function CardButton({
	width,
	height,
	color,
	background,
	isSetItem = false,
	addItems,
}: CardButtonProps) {
	const navigate = useNavigate()

	function handleClickButton() {
		if (isSetItem && addItems) {
			addItems()
			navigate('checkout')
		} else {
			navigate('checkout')
		}
	}
	return (
		<CartButton
			width={width}
			height={height}
			color={color}
			background={background}
			onClick={handleClickButton}
		>
			<ShoppingCart size={25} weight="fill" />
		</CartButton>
	)
}
