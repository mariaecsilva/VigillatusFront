import React, { useEffect, useState } from "react";
import { Linha, DivFlex, UlSub, LiSub} from './Style.js';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SubNavbar(onClick, isActive) {
    const [activeButton, setActiveButton] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleButtonClick = (button, path) => {
        setActiveButton(button);
        navigate(path);
      };
  
    useEffect(() => {
      switch (location.pathname) {
        case '/ocorrencias':
          setActiveButton('ocorrencias');
          break;
        case '/ocorrencias/historico':
          setActiveButton('historico');
          break;
      }
    }, [location.pathname]);

    return (
        <DivFlex>
          <Linha>
                <UlSub>
                    <LiSub
                    onClick={() => handleButtonClick('ocorrencias', '/ocorrencias')}
                    className={activeButton === 'ocorrencias' ? 'active' : ''}
                    style={{ marginRight: '20px' }}>
                        Novas Ocorrências
                    </LiSub>
                    <LiSub
                    onClick={() => handleButtonClick('historico', '/ocorrencias/historico')}
                    className={activeButton === 'historico' ? 'active' : ''}>
                        Histórico
                    </LiSub>
                </UlSub>
            </Linha >
        </DivFlex>
    );
}
