import styled from 'styled-components'

export const InputContainer = styled.div`
	display: flex;
	padding: 0.5rem;
	align-items: center;
	justify-content: space-between;
	gap: 0.2rem;

	width: 72px;
	height: 38px;

	background: #e6e5e5;
	border-radius: 6px;

	input {
		width: 100%;
		background-color: transparent;
		border: none;

		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 1rem;
		line-height: 130%;

		text-align: center;

		color: #272221;

		&:focus {
			outline: none;
		}

		&::-webkit-inner-spin-button,
		::-webkit-outer-spin-button {
			-webkit-appearance: none;
		}
	}
`

export const ActionButton = styled.button`
	display: flex;
	border: none;
	align-items: center;
	justify-content: center;

	font-size: 1rem;
	color: #8047f8;

	background-color: transparent;

	&:hover {
		cursor: pointer;
	}
`
