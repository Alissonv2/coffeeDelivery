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

export const ContainerListSubtitleItens = styled.div`
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
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

	span {
		display: flex;
		width: 14rem;
		align-items: center;
		height: 1.4rem;
		gap: 1rem;

		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 0.7rem;
		line-height: 130%;
	}
`
