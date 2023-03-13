import styled from 'styled-components'

const STATUS_COLORS = {
	yellow: 'yellow-500',
	orange: 'yellow-800',
	purple: 'purple-500',
	gray: 'gray-700',
} as const

interface StatusProps {
	statusColor: keyof typeof STATUS_COLORS
}

export const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	flex: 1;
	width: 100%;
	height: auto;
	margin-top: 10rem;

	padding: 1rem;
	gap: 2rem;
`

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 35rem;
	flex-wrap: wrap;

	p {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 1.3rem;
		line-height: 130%;

		color: #403937;
		font-stretch: 100;
	}

	@media (max-width: 680px) {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`

export const Title = styled.h1`
	font-family: 'Baloo 2';
	font-style: normal;
	font-weight: 800;
	font-size: 32px;
	line-height: 130%;

	color: #c47f17;
	align-self: stretch;
`

export const ContainerContent = styled.div`
	display: flex;
	flex-wrap: wrap;

	width: 100%;
	height: auto;
	justify-content: space-between;

	@media (max-width: 670px) {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`

const Content = styled.div`
	display: flex;
	flex: 1;

	max-width: 35rem;
	width: 100%;
`

export const ContentOrder = styled(Content)`
	position: relative;
	flex-direction: column;
	min-height: 10rem;

	border: double 1px transparent;
	border-radius: 6px 36px;
	background-image: linear-gradient(white, white),
		radial-gradient(circle at top left, #dbac2c 2.61%, #8047f8 98.76%);
	background-origin: border-box;
	background-clip: content-box, border-box;

	@media (max-width: 670px) {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`

export const ContainerItems = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	padding: 3rem;
	gap: 2rem;
`
export const ImageDelivery = styled(Content)`
	display: flex;
	img {
		width: 100%;
	}
`

export const ItemsInformation = styled.p`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;

	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 1rem;
	line-height: 130%;

	color: #574f4d;
`

export const Item = styled.div<StatusProps>`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${(props) => props.theme['background-app']};
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
	}
`
