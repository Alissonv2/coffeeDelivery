import styled from 'styled-components'

export const HomeContainer = styled.main`
	flex: 1;
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	margin-top: 5rem;
	gap: 2rem;
`

interface TitleProps {
	size: number
}

export const Title = styled.h1<TitleProps>`
	font-family: 'Baloo 2';
	font-style: normal;
	font-weight: 800;
	font-size: ${(props) => `${props.size}rem`};
	line-height: 130%;

	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
	color: ${(props) => props.theme['font-color']};
`

export const HomeIntroduction = styled.section`
	display: flex;
	width: 100%;
	height: auto;
	gap: 2rem;
	flex-wrap: wrap-reverse;
`

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 35rem;
	flex-wrap: wrap;

	p {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 130%;

		color: #403937;
		font-stretch: 100;

		flex: none;
		align-self: stretch;
		order: 0;
		flex-grow: 0;
	}
`

export const ImageContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;

	img {
		width: 100%;
	}
`
