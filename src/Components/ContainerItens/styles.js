import styled from "styled-components";

export const ContainerItens = styled.div`
  width: 414px;
  height: 645px;
  top: 251px;
  padding: 50px 36px;
  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.isBlur &&
    `
  backdrop-filter: blur(45px);
  
  `}
`;
