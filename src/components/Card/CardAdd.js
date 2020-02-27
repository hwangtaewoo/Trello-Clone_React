import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { FaFolderPlus } from "react-icons/fa";

function CardInput() {
  return (
    <>
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
    </>
  );
}

const AddBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px 0 8px 8px;
  padding: 4px 8px;
  color: #5e6c84;
`;

const AddBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: none;
  color: #5e6c84;
  width: 228px;
  height: 28px;
  outline: none;
  border: none;
`;

const AddIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const Text = styled.div`
  font-size: 15px;
  margin-left: 3px;
`;

const FolderIcon = styled.div`
  margin-right: 6px;
`;

export default CardInput;
