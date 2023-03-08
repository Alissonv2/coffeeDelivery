import styled from 'styled-components'

interface ContainerInputAddressProps {
	width?: number
	flex?: number
}

export const InputAddressContainer = styled.div<ContainerInputAddressProps>`
	box-sizing: border-box;
	flex: ${(props) => props.flex};

	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 12px;
	gap: 4px;

	width: ${(props) => `${props.width}%`};
	height: 3rem;

	/* Base/Input */

	background: #eeeded;
	/* Base/Button */

	border: 1px solid #e6e5e5;
	border-radius: 4px;

	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 0;

	span {
		font-family: 'Roboto';
		font-style: italic;
		font-weight: 400;
		font-size: 0.7rem;
		line-height: 130%;
		/* identical to box height, or 16px */

		/* Base/Label */

		color: #8d8686;
	}

	input {
		width: 100%;
		background-color: transparent;
		border: none;

		&:focus {
			outline: none;
		}

		&::-webkit-inner-spin-button,
		::-webkit-outer-spin-button {
			-webkit-appearance: none;
		}

		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 0.875rem;
		line-height: 130%;
		/* or 18px */

		/* Base/Label */

		color: #8d8686;
	}
`
