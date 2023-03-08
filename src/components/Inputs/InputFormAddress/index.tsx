import { ReactHTMLElement, ReactNode } from 'react'
import { InputAddressContainer } from './styles'
interface ContainerInputAddressProps {
	width?: number
	children: ReactNode
	optional?: boolean
}
export function InputAddress({
	width,
	children,
	optional = false,
}: ContainerInputAddressProps) {
	return (
		<InputAddressContainer width={width} flex={1}>
			{children}
			{optional && <span>Opcional</span>}
		</InputAddressContainer>
	)
}
