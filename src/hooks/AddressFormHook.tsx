import { useEffect, useState } from 'react'

interface AddressDataType {
	cep: string
	rua: string
	numero: number | null
	complemento?: string
	bairro: string
	cidade: string
	uf: string
}

type PaymentMethodType =
	| 'Cartão de crédito'
	| 'Cartão de débito'
	| 'Dinheiro'
	| null

export function useAddressDeliveryData() {
	const [addressData, setAddressData] = useState<AddressDataType>()
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>()

	useEffect(() => {
		const addressDeliveryLocale = localStorage.getItem(
			'@CoffeeDelivery-addressDelivery',
		)
		const paymentSaved = localStorage.getItem('@CoffeeDelivery-payment')

		if (!addressDeliveryLocale || !paymentSaved) return

		const parsedAddressDeliveryLocale = JSON.parse(addressDeliveryLocale)
		const parsedPayment = JSON.parse(paymentSaved)

		setAddressData(parsedAddressDeliveryLocale)

		setPaymentMethod(parsedPayment)

		return () => {
			resetFormAddress()
		}
	}, [])

	const handleSaveAddressData = (data: AddressDataType) => {
		localStorage.setItem(
			'@CoffeeDelivery-addressDelivery',
			JSON.stringify(data),
		)
		setAddressData(data)
	}

	const resetFormAddress = () => {
		setAddressData({
			cep: '',
			rua: '',
			numero: null,
			complemento: '',
			bairro: '',
			cidade: '',
			uf: '',
		})
	}

	const savePaymentMethod = (payment: PaymentMethodType) => {
		localStorage.setItem('@CoffeeDelivery-payment', JSON.stringify(payment))
		setPaymentMethod(payment)
	}

	return {
		addressData,
		handleSaveAddressData,
		resetFormAddress,
		savePaymentMethod,
		paymentMethod,
	}
}
