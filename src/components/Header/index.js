import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.png';
import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const name = useSelector(state => state.user.profile.name);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <ul>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/students">Alunos</Link></li>
            <li><Link to="/companies">Empresas</Link></li>
            <li><Link to="/contracts">Contratos</Link></li>
            <li><Link to="/calendar">Calendário</Link></li>
            <li><Link to="/" onClick={handleSignOut}>Sair</Link></li>



          </ul>

        </nav>
        <aside>
          <Profile>
            <div>
              <strong>
                {name}
              </strong>
              <Link to="/profile">
                Meu perfil
              </Link>
            </div>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Dennis Çee"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
