import React from "react";
import styled from "styled-components";
import CardList from "./CardList";

function CardLists() {
  const cards = [
    {
      id: 1,
      title: "Reminder"
    },
    {
      id: 2,
      title: "Tasking Space(All)"
    },
    {
      id: 3,
      title: "Task_Design"
    },
    {
      id: 4,
      title: "Task_Frontend"
    },
    {
      id: 5,
      title: "Ask All"
    }
  ];

  return (
    <CardBlock>
      <CardList lists={cards} />
    </CardBlock>
  );
}

const CardBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  background: none;
  padding: 8px;
  padding-top: 0px;
`;

export default CardLists;
