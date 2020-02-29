import React from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import CardAdd from "./CardAdd";
import { MdMoreHoriz } from "react-icons/md";

function CardList({ list, title }) {
  const cardList = list.map(item => <CardItem key={item.id} card={item} />);

  return (
    <ListBlock>
      <List>
        <ListHeader>
          <Text>{title}</Text>
          <Menu>
            <MdMoreHoriz color="#6a768b" />
          </Menu>
        </ListHeader>
        {cardList}
        <CardAdd />
      </List>
    </ListBlock>
  );
}

const ListBlock = styled.div`
  width: 17rem;
  height: 100%;
  margin-right: 0.5rem;
`;

const List = styled.div`
max-height: 95%;
  background: #ebecf0;
  border-radius: 3px;
  padding: 0.625rem;

  overflow: scroll;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.25rem;
  font-size: 0.875rem;
  color: #172b4d;
  padding-bottom: 0.625rem;
`;

const Text = styled.div`
  display: inline;
  margin-left: 0.5rem;
  font-weight: 700;
`;

const Menu = styled.div`
  float: right;
  margin-right: 0.25rem;
`;

export default CardList;
