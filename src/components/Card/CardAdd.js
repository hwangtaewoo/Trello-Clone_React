import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { FaFolderPlus } from "react-icons/fa";

function CardInput() {
  return (
    <AddBox>
      <AddBtn>
        <AddIcon>
          <MdAdd />
        </AddIcon>
        <Text>Add another card</Text>
      </AddBtn>
      <FolderIcon>
        <FaFolderPlus />
      </FolderIcon>
    </AddBox>
  );
}

const AddBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #5e6c84;
`;

const AddBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: none;
  color: #5e6c84;
  width: 14.25rem;
  height: 1.75rem;
  outline: none;
  border: none;
`;

const AddIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

const Text = styled.div`
  font-size: 0.875rem;
  margin-left: 3px;
`;

const FolderIcon = styled.div`
  margin-right: 0.375rem;
`;

export default CardInput;
