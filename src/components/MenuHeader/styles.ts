import styled from 'styled-components'

export const ContainerMenuHeader = styled.div`
	display: flex;
	padding: 1rem;
	gap: 1rem;
	align-items: center;
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

export const ContainerCartButton = styled.div`
	display: flex;
	align-items: flex-start;

	span {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		position: relative;
		width: 1rem;
		height: 1rem;
		top: -0.2rem;
		left: -0.5rem;

		/* Brand / Yellow Dark */

		background: #c47f17;
		border-radius: 1000px;

		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 0.8rem;
		line-height: 130%;
		/* identical to box height, or 16px */

		text-align: center;
		letter-spacing: -0.06em;

		/* Base/White */

		color: #ffffff;
	}
`
