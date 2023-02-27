import styled from 'styled-components'

export const ContainerMenuHeader = styled.div`
	display: flex;
	padding: 1rem;
	gap: 1rem;
	align-items: center;
`

export const CartButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 38px;
	height: 38px;

	background: #f1e9c9;
	border: none;
	border-radius: 6px;
	color: #c47f17;

	&:hover {
		cursor: pointer;
	}
`

export const LocationButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 0.5rem;

	width: 143px;
	height: 38px;

	/* Brand/Purple Light */

	background: #ebe5f9;
	border: none;
	border-radius: 6px;

	color: #4b2995;

	span {
		width: 100%;

		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 0.6rem;
		line-height: 130%;
	}

	&:hover {
		cursor: pointer;
	}
`
