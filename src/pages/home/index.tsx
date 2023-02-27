import CoffeeImage from '../../assets/coffee.svg'
import { ListItensSubtitle } from './ItensSubtitle'
import { ProductListCoffee } from '../../components/ProductsList'

import { productsData } from '../../../products'
import {
	HomeContainer,
	HomeIntroduction,
	TitleContainer,
	ImageContainer,
	Title,
} from './styles'

export function Home() {
	return (
		<HomeContainer>
			<HomeIntroduction>
				<TitleContainer>
					<Title size={3}>
						Encontre o café perfeito para qualquer hora do dia
					</Title>
					<p>
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</p>
					<ListItensSubtitle />
				</TitleContainer>
				<ImageContainer>
					<img src={CoffeeImage} alt="" />
				</ImageContainer>
			</HomeIntroduction>
			<Title size={2}>Nossos cafés</Title>
			<ProductListCoffee products={productsData} />
		</HomeContainer>
	)
}
