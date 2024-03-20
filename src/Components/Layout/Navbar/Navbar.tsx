import React, {FC} from 'react';
import { Container, FlexUl, Flex } from '../index';
import { NavLinkStyled } from './Navbar.styles';
import { ToggleSwitch } from '@/Components/UI';


interface IProps {
  toggleTheme: () => void;
}

export const Navbar: FC<IProps> = ({ toggleTheme }) => {
  return (
    <header>
      <Container>
        <Flex align='center' justify='space-between'>
          <nav>
            <FlexUl gap='1.5rem' align='center'>
              <li>
                <NavLinkStyled to='/'>
                  <img src="../../../../public/icon.png" alt="logo" width='32px'/>
                </NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to='/'>
                  Проект
                </NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to='about'>
                  О нас
                </NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to='help'>
                  Помощь по программе
                </NavLinkStyled>
              </li>
            </FlexUl>
          </nav>
          <ToggleSwitch toggleTheme={toggleTheme} />
        </Flex>
      </Container>
    </header>
  )
}