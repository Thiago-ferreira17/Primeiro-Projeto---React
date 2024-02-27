import styled from "styled-components";
import Background from "../../Assets/bg image 1.svg";




export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

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
`;



export const InputLabel = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  color: rgba(238, 238, 238, 1);
  margin-left: 25px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  top: 193px;
  left: 36px;
  margin-bottom: 34px;
  padding: 15px 20px 15px 25px;

  border-radius: 14px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.25);
  border: none;
  outline: none;

  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 132px;
  border-radius: 14px;
  border: none;

  background: #000000cc;
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
  line-height: 28px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
