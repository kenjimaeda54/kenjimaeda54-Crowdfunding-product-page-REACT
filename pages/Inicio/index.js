import React, { useState } from "react";
import faicon from "../../assests/faicon.png";
import estados from "../../assests/estados.svg";
import {
  Aritcle,
  State,
  Sub,
  Bamboo,
  Black,
  Mahogany,
  Session,
  Body,
} from "./estilo";
import { Link } from "react-router-dom";

export default function Inicio() {
  const [total, setTotal] = useState(89.914);

  return (
    <Body>
      <Aritcle>
        <img id="faicon" src={faicon} alt="imagem top" />
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <span>
          A beautiful and handcrafted monitor stand to reduce neck and eye
          strain.
        </span>

        <Session>
          <button className="sessionBotao" type="button" onClick={() => {}}>
            Back this project
          </button>
          <button type="button" disabled className="estados">
            <img src={estados} alt="imagem estado" />
            <span>Bookmark</span>
          </button>
        </Session>
      </Aritcle>

      <State>
        <h2>${total}</h2>
        <span>of $100,000 backed</span>
        <div id="atual">|</div>
        <h2>5,007</h2>
        <span>total backers</span>
        <div id="total">|</div>
        <h2>56</h2>
        <span>days left</span>
        <progress></progress>
      </State>

      <Sub>
        <title>About this project</title>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand. Featuring artisan craftsmanship, the
          simplicity of design creates extra desk space below your computer to
          allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
        <Bamboo>
          <h2>Bamboo Stand</h2>
          <Link to="/carrinho">Pledge $25 or more</Link>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <span>101 left</span>
          <button type="button" onClick={() => {}}>
            Select Reward
          </button>
        </Bamboo>

        <Black>
          <h2>Black Edition Stand</h2>
          <Link to="/carrinho">Pledge $75 or more</Link>
          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <span>64 left</span>
          <button type="button" onClick={() => {}}>
            Select Reward
          </button>
        </Black>

        <Mahogany>
          <h2>Mahogany Special Edition</h2>
          <Link to="/carrinho">Pledge $200 or more</Link>
          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.{" "}
          </p>
          <span>0 left</span>
          <button>Out of stock</button>
        </Mahogany>
      </Sub>
    </Body>
  );
}
