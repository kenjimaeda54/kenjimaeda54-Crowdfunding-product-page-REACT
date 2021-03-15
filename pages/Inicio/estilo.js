import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100%;
`;

export const Aritcle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: auto;
  margin: -100px auto;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.0497193);
  box-sizing: border-box;
  border-radius: 8px;
  width: 730px;
  height: 280.28px;
  #faicon {
    width: 56px;
    height: 55.64px;
    width: 56px;
    height: 55.64px;
    left: 692px;
    margin: -15px;
    padding: -15px;
    background: #000000;
  }
  h1 {
    font-family: Commissioner;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    margin: 20px;
    padding: 20px;
  }
  span {
    margin: -15px;
    padding: -15px;
    font-family: Commissioner;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 800px) {
    width: 327px;
    height: 284px;
    #faicon {
      width: 56px;
      height: 56px;
    }
    h1 {
      text-justify: center;
    }
    span {
      text-align: center;
      text-justify: center;
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const Session = styled.section`
  display: flex;
  width: 634px;
  height: 55.64px;
  margin: auto;
  padding: auto;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  .sessionBotao {
    background: #3cb3ab;
    border-radius: 33.5px;
    width: 204px;
    height: 55.64px;
    font-family: Commissioner;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    align-items: center;
    color: #ffffff;
    margin-top: 40px;
  }
  .estados {
    display: flex;
    mix-blend-mode: normal;
    border-radius: 33.5px;
    align-items: center;
    justify-content: space-around;
    width: 174px;
    height: 55 64px;
    margin-top: 40px;
    img {
      margin-left: -20px;
    }
  }
  @media (max-width: 800px) {
    .estados {
      display: flex;
      justify-content: flex-end;
      width: 56px;
      height: 56px;
      bottom: hidden;
      border: none;
      margin-right: 320px;
      span {
        display: none;
      }
    }
  }
`;

export const State = styled.div`
  margin: 120px auto;  //para esta div ficar alinhada com a superior,tem que deixar com mesmas propriedades.margin,pading...
  padding: auto;
  width: 730px;
  height: 210.65px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.0497193);
  box-sizing: border-box;
  border-radius: 8px;

  @media (max-width: 800px) {
    width: 327px;
    height: 412px;
  }
`;

export const Sub = styled.section``;

export const Bamboo = styled.section``;

export const Black = styled.section``;

export const Mahogany = styled.section``;
