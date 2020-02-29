import React from "react";
import styled from "styled-components";
import CardList from "./CardList";
import { MdAdd } from "react-icons/md";

function CardListTemplate() {
  const cards = [
    {
      id: 1,
      title: "Reminder",
      task: [
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
      ]
    },
    {
      id: 2,
      title: "Tasking Space(All)",
      task: [
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
      ]
    },
    {
      id: 3,
      title: "Task_Design",
      task: [
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
      ]
    },
    {
      id: 4,
      title: "Task_Frontend",
      task: [
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
      ]
    },
    {
      id: 5,
      title: "Ask All",
      task: [
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
      ]
    }
  ];

  const taskList = cards.map(item => (
    <CardList key={item.id} list={item.task} title={item.title} />
  ));

  return (
    <Wrapper>
      {taskList}
      <AddListWrapper>
        <MdAdd />
        Add another List
      </AddListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 6.5rem);
  padding: 0.5rem;

  overflow-x: scroll;
`;

const AddListWrapper = styled.div`
  min-width: 15.5rem;
  height: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0.625rem 0.75rem;

  background-color: rgba(0, 0, 0, 0.08);
`;

export default CardListTemplate;
