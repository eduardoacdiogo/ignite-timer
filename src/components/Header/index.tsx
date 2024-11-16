import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoIgnite from '../../assets/logo-ignite.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to="/" title='timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title='history'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}