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
