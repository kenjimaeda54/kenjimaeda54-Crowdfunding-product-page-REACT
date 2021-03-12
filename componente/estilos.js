import styled from "styled-components";

import imageHero from "../assests/imageHero.jpg";

export const Content = styled.header`
  width: 100%;
  max-width: 1440px;
  height: 400px;
  background-image: url(${imageHero});
`;

export const Main = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 128px;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.0001) 100%);
  padding: 30px;
  list-style: none;
  .img {
    margin-top: 60px;
    transition: 3s;
    cursor: pointer;
  }
  .img:hover {
    opacity: 39%;
  }

  @media (min-width: 740px) {
    .navegacao {
      display: flex;
      width: 100%;
      max-width: 1440px;
      flex-direction: row;
      justify-content: flex-end;
      margin-top: -20px;
      list-style: none;
    }
    .imgbar {
      display: none;
    }
  }
  @media (max-width: 740px) {
    .imgbar {
      width: 100%;
      height: 20px;
      max-width: 1440px;
      display: flex;
      justify-content: flex-end;
      margin-top: -20px;
    }
    #icon {
      width: 16px;
      height: 16px;
      transition: 3s;
    }
    #icon:hover {
      opacity: 39%;
    }
    .navegacao {
      display: none;
    }
  }

  a {
    margin: auto 20px;
    text-decoration: none;
    font-family: Commissioner;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    transition: 3s;
    color: #ffffff;
    cursor: pointer;
  }
  a:hover {
    color: #000000;
  }
`;

export const Mobile = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  max-width: 1440px;
  justify-content: flex-start; /* alinha de acordo com o flex direction,ja que esta em coluna essa propriedade vai alterar por coluna */
  align-items: flex-end;
  flex-direction: column;
  margin-top: 10px;

  a {
    margin: auto 20px;
    text-decoration: none;
    font-family: Commissioner;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    transition: 3s;
    color: #ffffff;
    cursor: pointer;
  }
`;
