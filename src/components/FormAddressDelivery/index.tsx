import {
	MapPinLine,
	CurrencyDollar,
	Cardholder,
	Bank,
	Money,
} from 'phosphor-react'
import { InputAddress } from '../Inputs/InputFormAddress'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
	CardPaymentButton,
	ContainerInputs,
	ContainerPayment,
	ContainerTitle,
	FormContainer,
	FormInputsContainer,
	SelectPaymentContainer,
} from './styles'

type paymentMethods = 'cartão de crédito' | 'cartão de débito' | 'dinheiro'

const addressFormValidationSchema = zod.object({
	cep: zod.string().regex(/^[0-9]{5}-?[0-9]{3}$/, 'Informe um cep válido'),
	rua: zod.string().min(1, 'Informe a rua'),
	numero: zod.number(),
	complemento: zod.string().optional(),
	bairro: zod.string().min(1, 'Informe o bairro'),
	cidade: zod.string().min(1, 'Informe a cidade'),
	uf: zod.string().min(1, 'Informe o estado').max(2),
	payment: zod.string(),
})

type FormAddressData = zod.infer<typeof addressFormValidationSchema>

export function FormDelivery() {
	const { register, handleSubmit, formState } = useForm<FormAddressData>({
		resolver: zodResolver(addressFormValidationSchema),
		defaultValues: {
			cep: '63050735',
			rua: 'Rua das flores',
			numero: 1632,
			complemento: '',
			bairro: 'Romeirão',
			cidade: 'Juazeiro do norte',
			uf: 'CE',
		},
	})

	function handleFormSubmit(data: FormAddressData) {
		console.log(data)
	}

	console.log(formState.errors)

	return (
		<FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
			<ContainerInputs>
				<ContainerTitle>
					<MapPinLine size={25} color={'#c47f17'} />
					<div>
						<h1>Endereço de entrega</h1>
						<p>Informe o endereço onde deseja receber seu pedido</p>
					</div>
				</ContainerTitle>
				<FormInputsContainer>
					<InputAddress width={30}>
						<input type="text" placeholder="CEP" {...register('cep')} />
					</InputAddress>
					<InputAddress width={100}>
						<input type="text" placeholder="Rua" {...register('rua')} />
					</InputAddress>
					<InputAddress width={30}>
						<input
							type="number"
							placeholder="Número"
							{...register('numero', { valueAsNumber: true })}
						/>
					</InputAddress>
					<InputAddress width={69} optional>
						<input
							type="text"
							placeholder="Complemento"
							{...register('complemento')}
						/>
					</InputAddress>
					<InputAddress width={30}>
						<input type="text" placeholder="Bairro" {...register('bairro')} />
					</InputAddress>
					<InputAddress width={60}>
						<input type="text" placeholder="Cidade" {...register('cidade')} />
					</InputAddress>
					<InputAddress width={8.5}>
						<input type="text" placeholder="UF" {...register('uf')} />
					</InputAddress>
				</FormInputsContainer>
			</ContainerInputs>
			<ContainerPayment>
				<ContainerTitle>
					<CurrencyDollar size={25} color={'#8047F8'} />
					<div>
						<h1>Pagamento</h1>
						<p>
							O pagamento é feito na entrega. Escolha a forma que deseja pagar
						</p>
					</div>
				</ContainerTitle>
				<SelectPaymentContainer>
					<CardPaymentButton>
						<Cardholder size={32} color="#8047F8" />
						<input type="submit" value="cartão de crédito" />
					</CardPaymentButton>
					<CardPaymentButton>
						<Bank size={32} color="#8047F8" />
						<input type="submit" value="cartão de débito" />
					</CardPaymentButton>
					<CardPaymentButton>
						<Money size={32} color="#8047F8" />
						<input type="submit" value="dinheiro" />
					</CardPaymentButton>
				</SelectPaymentContainer>
			</ContainerPayment>
		</FormContainer>
	)
}
