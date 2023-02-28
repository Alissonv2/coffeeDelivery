import styled from 'styled-components'

interface CardButtonProps {
	width: number
	height: number
	color: string
	background: string
}

export const CartButton = styled.button<CardButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;

	width: ${(props) => `${props.width}rem`};
	height: ${(props) => `${props.height}rem`};

	background: ${(props) => props.background};
	border: none;
	border-radius: 6px;
	color: ${(props) => props.color};

	&:hover {
		cursor: pointer;
	}
`
