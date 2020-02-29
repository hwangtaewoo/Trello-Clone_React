import React from "react";
import styled from "styled-components";
import { FiHome, FiSearch, FiMenu } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { FaTrello } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { AiOutlineBell } from "react-icons/ai";

function TopHeader() {
  return (
    <Header>
      <LeftBtn>
        <TopBtn>
          <FiMenu />
        </TopBtn>
        <TopBtn>
          <FiHome />
        </TopBtn>
        <TopBtn>
          <FaTrello />
          <Text>Boadrs</Text>
        </TopBtn>
        <Search>
          <FiSearch />
        </Search>
      </LeftBtn>
      <Logo>
        <MainIcon />
      </Logo>
      <RightBtn>
        <TopBtn>
          <MdAdd />
        </TopBtn>
        <TopBtn>
          <IoIosInformationCircleOutline />
        </TopBtn>
        <TopBtn>
          <AiOutlineBell />
        </TopBtn>
        <User>황</User>
      </RightBtn>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;

  background: #445b6a;
  padding: 0.25rem;

  font-weight: 700;
`;

const LeftBtn = styled.div`
  display: flex;
`;

const TopBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: hsl(207, 11%, 57%);
  outline: none;
  border: none;
  border-radius: 3px;
  color: #f9f9fa;
  font-size: 0.875rem;

  margin-right: 5px;

  height: 2rem;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    padding-left: 0.125rem;
    padding-right: 0.125rem;
    cursor: pointer;
  }

  &:hover {
    background: #42526e;
  }
`;

const Text = styled.div`
  padding-left: 3px;
  padding-right: 3px;
  font-weight: 700;
`;

const Search = styled.button`
  display: flex;
  justify-content: flex-end;
  cursor: text;

  background: hsl(207, 11%, 57%);
  color: #f9f9fa;
  outline: none;
  border: none;

  width: 10rem;
  border-radius: 3px;
  font-size: 0.875rem;
  margin-right: 5px;
  height: 2rem;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    padding-left: 0.125rem;
    padding-right: 0.125rem;
    cursor: pointer;
  }

  &:hover {
    background: #8e9ba4;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;

  position: absolute;
  left: 50%;
`;

const RightBtn = styled.div`
  display: flex;
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dfe1e6;
  border-radius: 15px;
  color: #172b4d;
  width: 2rem;
  height: 100%;
  cursor: pointer;
`;

const MainIcon = styled.picture`
  background: url(https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png);
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 5rem 1.875rem;
  cursor: pointer;
  height: 1.875rem;
  width: 5rem;
  display: inline-block;
  justify-content: center;
  align-items: center;

  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export default TopHeader;
