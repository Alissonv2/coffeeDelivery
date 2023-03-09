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

export function useAddressDeliveryData() {
	const [addressData, setAddressData] = useState<AddressDataType>()

	useEffect(() => {
		const addressDeliveryLocale = localStorage.getItem(
			'@CoffeeDelivery-addressDelivery',
		)

		if (!addressDeliveryLocale) return

		const parsedAddressDeliveryLocale = JSON.parse(addressDeliveryLocale)
		setAddressData(parsedAddressDeliveryLocale)

		return () => {
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

	return { addressData, handleSaveAddressData, resetFormAddress }
}
