import React from "react";
import styled, { css } from "styled-components";
import { IoMdCheckboxOutline } from "react-icons/io";

function Card({ card }) {
  return (
    <Cards>
      <CardLabel id={card.id} value={card.value}>
        {card.value}
      </CardLabel>
      <Text>{card.text}</Text>
      <Text>
        <IoMdCheckboxOutline /> 0/5
      </Text>
    </Cards>
  );
}

const CardList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cards = styled.div`
  background: #ffffff;
  border-radius: 3px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #b2b9c5;
`;

const CardLabel = styled.div`
  height: 1rem;
  font-size: 0.75rem;
  color: #ffffff;
  border-radius: 3px;
  margin-bottom: 5px;
  font-weight: 700;
  padding: 0 0.5rem;

  ${props => {
    const { value } = props;

    if (value === "To do") {
      return css`
        background: #eb5a46;
      `;
    }

    if (value === "Complete") {
      return css`
        background: #61bd4f;
      `;
    }

    if (value === "Progress") {
      return css`
        background: #f2d600;
      `;
    }
  }}
`;

const Text = styled.div`
  font-size: 0.875rem;
  display: flex;
  align-items: center;
`;

export default Card;
