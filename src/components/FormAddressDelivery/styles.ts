import styled from 'styled-components'

export const FormContainer = styled.form`
	display: flex;
	margin-top: 2rem;

	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
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
	height: 372px;
`

export const ContainerPayment = styled(BaseContainersForm)`
	height: 207px;
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
			/* or 18px */

			display: flex;
			align-items: center;

			/* Base/Text */

			color: #574f4d;

			/* Inside auto layout */

			flex: none;
			order: 1;
			align-self: stretch;
			flex-grow: 0;
		}
	}
`
