import styled from 'styled-components'

export const FormContainer = styled.form`
	display: flex;
	margin-top: 2rem;

	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;

	min-width: 640px;
	width: 100%;
	height: 591px;
`

const BaseContainersForm = styled.div`
	display: flex;

	flex-direction: column;
	align-items: flex-start;
	padding: 3rem;
	gap: 3rem;

	min-width: 640px;
	width: 100%;

	background: #f3f2f2;
	border-radius: 6px;
`

export const ContainerInputs = styled(BaseContainersForm)`
	max-height: 25rem;
`

export const ContainerPayment = styled(BaseContainersForm)`
	gap: 1rem;
	max-height: 12rem;
`

export const FormInputsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	gap: 0.2rem;
`

export const ContainerTitle = styled.div`
	display: flex;
	width: 100%;
	gap: 0.5rem;

	div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		h1 {
			/* Text/Regular M */

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

			/* Inside auto layout */

			flex: none;
			order: 0;
			align-self: stretch;
			flex-grow: 0;
		}

		p {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-size: 0.875rem;
			line-height: 130%;

			display: flex;
			align-items: center;

			color: #574f4d;

			flex: none;
			order: 1;
			align-self: stretch;
			flex-grow: 0;
		}
	}
`

export const SelectPaymentContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	width: 100%;
`

export const CardPaymentButton = styled.div`
	display: flex;
	align-items: center;
	padding-left: 0.5rem;
	gap: 0.8rem;

	width: 8rem;
	height: 51px;

	/* Base/Button */

	background: #e6e5e5;
	border-radius: 6px;

	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 1;

	input {
		display: flex;
		background: transparent;
		border: none;
		width: 100%;
		height: 100%;

		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 0.7rem;
		line-height: 160%;

		text-transform: uppercase;

		color: #574f4d;

		&:hover {
			cursor: pointer;
		}
	}

	&:hover {
		cursor: pointer;
		background: #ebe5f9;
		border: 1px solid #8047f8;
	}
`
