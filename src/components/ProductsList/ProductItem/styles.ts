import styled from 'styled-components'

export const ContentProductItem = styled.div`
	display: flex;
	flex-direction: column;
	width: 16rem;
	min-height: 20rem;

	background: #f3f2f2;
	border-radius: 6px 36px;
	align-items: center;
	gap: 1rem;

	img {
		margin-top: -1.8rem;
		width: 8rem;
		height: 8rem;
	}
`

export const ContainerTypes = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	gap: 0.5rem;

	span {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;

		width: 5rem;
		height: 1.5rem;

		background: #f1e9c9;
		border-radius: 100px;

		font-size: 0.8rem;
		color: #c47f17;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		line-height: 130%;
	}
`

export const ProductName = styled.span`
	font-family: 'Baloo 2';
	font-style: normal;
	font-weight: 700;
	font-size: 1.25rem;
	line-height: 130%;

	display: flex;
	text-align: center;

	color: #403937;
`

export const PoductDescription = styled.p`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 0.875rem;
	line-height: 130%;
	padding: 1rem;

	text-align: center;

	color: #8d8686;
`

export const FooterProductItem = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;

	width: 100%;
	height: 100%;

	span {
		font-family: 'Baloo 2';
		font-size: 1.5rem;
		font-weight: 800;
		line-height: 2rem;
		letter-spacing: 0em;
		text-align: right;

		/* 		&::before {
			content: 'R$ ';
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-size: 0.875rem;
			line-height: 130%;

			text-align: right;

			color: #574f4d;
		} */
	}
`
