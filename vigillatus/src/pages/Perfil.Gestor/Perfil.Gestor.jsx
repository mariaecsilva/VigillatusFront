import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { 
  ProfileContainer, 
  ProfileCard, 
  ProfileImage, 
  ProfileName, 
  ProfileDetails, 
  DetailRow, 
  DetailLabel, 
  DetailValue, 
  EditButton 
} from './ProfileStyle'; // Estilos criados com styled-components
import imageUrl from '../../image/teste/imgPerfil.png'
import Gestor from '../../api/Gestor';

export default function Perfil() {
  const gestorService = new Gestor()
  const gestor = gestorService.getLoggedGestor();

  if (gestor.foto) { // Verifica se o usuário possui foto de perfil
      imageUrl = `data:${gestor.foto.contentType};base64,${gestor.foto.data}`;
  }

  return (
    <div className="app">
    <Navbar />
 <Sidebar />
    <ProfileContainer>
      <ProfileCard>
        <ProfileImage src={imageUrl} alt="Imagem de perfil" />
        <ProfileName>{gestor.nome}</ProfileName>
        
        <ProfileDetails>
          <DetailRow>
            <DetailLabel>Atuação:</DetailLabel>
            <DetailValue>{gestor.cargo}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Email:</DetailLabel>
            <DetailValue>{gestor.email}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Setor:</DetailLabel>
            <DetailValue>{gestor.setor}</DetailValue>
          </DetailRow>
        </ProfileDetails>

        <EditButton>Editar</EditButton>
      </ProfileCard>
    </ProfileContainer>
  </div>
  );
}
