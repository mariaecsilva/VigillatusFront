import React, { useState, useEffect } from "react";
import Home from '../../image/icons/Home.svg';
import User from '../../image/icons/User.svg';
import Capacete from '../../image/icons/Capacete.svg';
import Camera from '../../image/icons/Camera.svg';
import Logout from '../../image/icons/icons/Logout.svg'
import { StyledSidebar, ButtonContainer, DivLogout } from "./Style";
import SidebarButton from './SidebarButton';
import { useNavigate, useLocation } from 'react-router-dom';
import Gestor from "../../api/Gestor";

export default function Sidebar() {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/home':
        setActiveButton('home');
        break;
      case '/colaboradores':
        setActiveButton('user');
        break;
      case '/cameras':
        setActiveButton('camera');
        break;
      case '/ocorrencias':
        setActiveButton('capacete');
        break;
      default:
        setActiveButton(null);
    }
  }, [location.pathname]);

  const handleButtonClick = (button, path) => {
    setActiveButton(button);
    navigate(path);
  };

  const handleLogoutButton = (button, path) => {
    handleButtonClick(button, path);

    const app_service = new Gestor()
    app_service.clearLoggedGestor()
    app_service.setToken(null)
  };

  return (
    <StyledSidebar>
      <ButtonContainer>
      <div>
          <SidebarButton
            icon={Home}
            text="Home"
            onClick={() => handleButtonClick('home', '/home')}
            isActive={activeButton === 'home'}
          />
          <SidebarButton
            icon={User}
            text="Colaboradores"
            onClick={() => handleButtonClick('user', '/colaboradores')}
            isActive={activeButton === 'user'}
          />
          <SidebarButton
            icon={Camera}
            text="Câmeras"
            onClick={() => handleButtonClick('camera', '/cameras')}
            isActive={activeButton === 'camera'}
          />
          <SidebarButton
            icon={Capacete}
            text="Ocorrências"
            onClick={() => handleButtonClick('capacete', '/ocorrencias')}
            isActive={activeButton === 'capacete'}
          />
        </div>
        <DivLogout>
          <SidebarButton
            icon={Logout}
            text="Logout"
            onClick={() => handleLogoutButton('logout', '/')}
          />
        </DivLogout>
      </ButtonContainer>
    </StyledSidebar>
  );
}
