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

  .img {
    margin-top: 60px;
  }

  .navegacao {
    display: flex;
    width: 100%;
    max-width: 1440px;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: -20px;
    list-style: none;
  }
  a {
    margin: auto 20px;
    text-decoration: none;
    font-family: Commissioner;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    transition: 1s;
    color: #ffffff;
    cursor: pointer;
  }
  a:hover {
    color: #F5F5DC;
  }
`;
