import React from "react";
import styled, { css } from "styled-components";
import { IoMdCheckboxOutline } from "react-icons/io";

function Card({ cards }) {
    return (
        <CardList>
            {cards.map(card => (
                <Cards>
                    <CardLabel id={card.id} value={card.value}>
                        {card.value}
                    </CardLabel>
                    <Text>{card.text}</Text>
                    <Text>
                        <IoMdCheckboxOutline /> 0/5
                    </Text>
                </Cards>
            ))}
        </CardList>
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
    padding: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid #b2b9c5;
`;

const CardLabel = styled.div`
    width: 40px;
    height: 16px;
    font-size: 12px;
    color: #ffffff;
    border-radius: 3px;
    margin-bottom: 5px;
    font-weight: 700;

    ${props =>
        props.value === "To do" &&
        css`
            background: #Eb5A46;
        `}
    ${props => 
        props.value === "Complete" &&
        css`
            background: #61BD4F;
            padding-right: 16px;
        `}
    ${props =>
        props.value === "Progress" &&
        css`
            background: #F2D600;
            padding-right: 8px;
        `}
`;

const Text = styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
`;

export default Card;