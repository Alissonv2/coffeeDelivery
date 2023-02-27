import Logo from '../../assets/Logo.svg'
import { MenuHeader } from '../MenuHeader'
import { HeaderContainer } from './styles'

export function Header() {
	return (
		<HeaderContainer>
			<img src={Logo} alt="" />
			<MenuHeader />
		</HeaderContainer>
	)
}
