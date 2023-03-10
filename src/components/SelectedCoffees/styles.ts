import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	gap: 1.5rem;

	min-width: 448px;
	width: 100%;
	min-height: 498px;
	margin-top: 2rem;

	/* Base/Card */

	background: #f3f2f2;
	border-radius: 6px 44px;
`

export const ProductCard = styled.div`
	display: flex;
	padding: 0.5rem;
	gap: 0.5rem;

	width: 26rem;
	height: 5.5rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #e6e5e5;

	img {
		height: 4rem;
		width: 4rem;
	}
`

export const ContentProductContainer = styled.div`
	display: flex;
	min-width: 20rem;
	width: 100%;
	flex-direction: column;
	gap: 0.5rem;
`

export const ContentPriceAndName = styled.header`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;

	span {
		width: 5rem;

		/* Text/Bold M */

		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 1rem;
		line-height: 130%;
		/* identical to box height, or 21px */

		display: flex;
		align-items: center;
		text-align: right;

		/* Base/Text */

		color: #574f4d;
	}
`

export const ProductName = styled.p`
	width: 20rem;

	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 1rem;
	line-height: 130%;
	/* identical to box height, or 21px */

	display: flex;
	align-items: center;

	/* Base/Subtitle */

	color: #403937;
`

export const RemoveProduct = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 72px;
	height: 38px;

	border: none;

	background: #e6e5e5;
	border-radius: 6px;

	&:hover {
		cursor: pointer;
	}
`

export const ContainerButtons = styled.div`
	display: flex;
	width: 100%;
	gap: 0.5rem;
`

export const ContainerPaymentInformations = styled.section`
	display: flex;
	flex-direction: column;
	max-width: 26rem;
	width: 100%;
	gap: 1.5rem;

	div {
		display: flex;
		justify-content: space-between;
		width: 100%;

		span {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-size: 1rem;
			line-height: 130%;

			color: #574f4d;
		}

		strong {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-size: 1.5rem;
			line-height: 130%;

			/* Base/Subtitle */

			color: #403937;
		}
	}
`

export const ButtonOrderConfirm = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	max-width: 26rem;
	width: 100%;
	height: 4rem;

	/* Brand / Yellow */

	background: #dbac2c;
	border: none;
	border-radius: 6px;

	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 1rem;
	line-height: 160%;
	/* or 22px */

	text-transform: uppercase;

	/* Base/White */

	color: #ffffff;
	font-stretch: 100;

	&:hover {
		cursor: pointer;
	}
	&:disabled {
		opacity: 0.6;
		cursor: no-drop;
	}
`
