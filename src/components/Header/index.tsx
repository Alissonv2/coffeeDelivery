import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { MenuHeader } from '../MenuHeader'
import { HeaderContainer, LogoContainer } from './styles'

export function Header() {
	const navigate = useNavigate()
	return (
		<HeaderContainer>
			<LogoContainer onClick={() => navigate('')}>
				<img src={Logo} alt="" />
			</LogoContainer>

			<MenuHeader />
		</HeaderContainer>
	)
}
