import { useState } from 'react'
import { ActionButton, InputContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'

export function InputQTDEitems() {
	const [inputValue, setInputValue] = useState<number>(0)

	function handleSetInputValue() {
		setInputValue((state) => state + 1)
	}

	function handlePutInputValue() {
		if (inputValue > 0) {
			setInputValue((state) => state - 1)
		}
	}

	return (
		<InputContainer>
			<ActionButton onClick={handlePutInputValue}>
				<Minus size={12} />
			</ActionButton>
			<input type="number" name="" value={inputValue} id="" min={0} disabled />
			<ActionButton onClick={handleSetInputValue}>
				<Plus size={12} />
			</ActionButton>
		</InputContainer>
	)
}