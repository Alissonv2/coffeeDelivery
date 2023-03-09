import { useState } from 'react'
import { ActionButton, InputContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'
import { useCart } from '../../../hooks/ShoppingCart'

type ItemProps = {
	item: {
		name: string
		price: number
		image: string
	}
}

export function InputQTDEitems({ item }: ItemProps) {
	const { addItem, removeItem } = useCart()
	const [inputValue, setInputValue] = useState<number>(0)
	const { name, price, image } = item

	function handleSetInputValue() {
		addItem({ name, price, image })
		setInputValue((state) => state + 1)
	}

	function handlePutInputValue() {
		if (inputValue > 0) {
			removeItem(name)
			setInputValue((state) => state - 1)
		}
	}

	return (
		<InputContainer>
			<ActionButton onClick={handlePutInputValue}>
				<Minus size={12} />
			</ActionButton>
			<input type="number" name="" value={inputValue} id="" min={1} disabled />
			<ActionButton onClick={handleSetInputValue}>
				<Plus size={12} />
			</ActionButton>
		</InputContainer>
	)
}
