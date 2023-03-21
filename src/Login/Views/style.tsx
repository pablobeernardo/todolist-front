import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #333;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.img`
  height: 40px;
`;

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(https://img.freepik.com/fotos-gratis/fundo-azul-do-gradiente-de-luxo-abstrato-liso-azul-escuro-com-vinheta-preta-studio-banner_1258-72075.jpg);
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  margin-top:5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const StyledLogo = styled.img`
  max-width: 30%;
  heigth: auto;
  margin-bottom:7px;

`

