import React from "react";
import styled from "styled-components";
import { MdMoreHoriz } from "react-icons/md";
import Card from "./Card";
import CardAdd from "./CardAdd";

function CardList({ lists }) {
    const cards = [
        {
            id: 1,
            value: "To do",
            text: "한빛 뮤직"
        },
        {
            id: 2,
            value: "Complete",
            text: "dd"
        },
        {
            id: 3,
            value: "Progress",
            text: "asdasda"
        },
        {
            id: 4,
            value: "To do",
            text: "dd"
        },
        {
            id: 5,
            value: "To do",
            text: "dd"
        }
    ];

    return (
        <>
            {lists.map(list => (
                <ListBlock>
                    <List>
                        <ListHeader>
                            <Text id={list.id}>
                                {list.title}
                            </Text>
                            <Menu>
                                <MdMoreHoriz color="#6a768b"/>
                            </Menu>
                        </ListHeader>
                        <Card cards={cards} />
                        <CardAdd />
                    </List>
                </ListBlock>
            ))}
        </>
    );
}

const ListBlock = styled.div`
    width: 272px;
    height: 396px;
    margin-right: 8px;
    padding-top: 6rem;
`;

const List = styled.div`
    background: #ebecf0;
    border-radius: 3px;
    padding: 10px;
`;

const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 20px;
    font-size: 14px;
    color: #172b4d;
    padding-bottom: 10px;
`;

const Text = styled.div`
    display: inline;
    margin-left: 8px;
    font-weight: 700;
`;

const Menu = styled.div`
    float: right;
    margin-right: 4px;
`;

export default CardList;