import React from 'react';

import { Container, Content, Profile } from './styles';

import { Link } from 'react-router-dom';

import logoPurple from '~/assets/logo_purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPurple} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Alex Xavier</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Alex Xavier"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
