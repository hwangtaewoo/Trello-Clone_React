import React from "react";
import styled from "styled-components";
import { FiStar } from "react-icons/fi";
import { FaSlack, FaConciergeBell } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";

function SecondHeader() {
  return (
    <Header>
      <LeftBtn>
        <TeamName>Hanlight_V2</TeamName>
        <HeaderBtn>
          <FiStar />
        </HeaderBtn>
        <VerticalLine />
        <HeaderBtn>
          <Text>
            한빛<Free>Free</Free>
          </Text>
        </HeaderBtn>
        <VerticalLine />
        <HeaderBtn>
          <AiOutlineTeam />
          <Text>Team Visible</Text>
        </HeaderBtn>
        <VerticalLine />
        <Circle>
          <Text>황</Text>
        </Circle>
        <Circle>
          <Text>Woo</Text>
        </Circle>
        <Circle>
          <Text>P</Text>
        </Circle>
        <Circle>
          <Text>S</Text>
        </Circle>
        <Circle>
          <Text>H</Text>
        </Circle>
        <CountUser>+13</CountUser>
        <HeaderBtn>
          <Text>Invite</Text>
        </HeaderBtn>
      </LeftBtn>
      <RightBtn>
        <HeaderBtn>
          <FaConciergeBell />
          <Text>Butler</Text>
        </HeaderBtn>
        <HeaderBtn>
          <FaSlack />
          <Text>Slack</Text>
        </HeaderBtn>
        <HeaderBtn>
          <MdMoreHoriz />
          <Text>Show Menu</Text>
        </HeaderBtn>
      </RightBtn>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background: hsla(0, 0%, 100%, 0.24);
  height: 2rem;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  font-weight: 400;
  color: #172b4d;
`;

const LeftBtn = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

const RightBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  margin-right: 0.25rem;
`;

const TeamName = styled.div`
  display: flex;
  color: #172b4d;
  font-size: 1.125rem;
  padding: 3px;
  margin-right: 0.625rem;
  margin-left: 0.625rem;
  font-weight: 700;
`;

const HeaderBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #a5b6c0;
  outline: none;
  border: none;
  border-radius: 3px;
  color: #4a5a79;
  font-size: 0.875rem;

  height: 2rem;

  svg {
    width: 1rem;
    height: 1rem;
    padding-left: 0.125rem;
    padding-right: 0.125rem;
    cursor: pointer;
  }

  & + & {
    margin-left: 5px;
  }

  &:hover {
    background: #8798a5;
  }
`;

const VerticalLine = styled.div`
  border-right: 1px solid #778593;
  height: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3px;
  font-weight: 700;
`;

const Free = styled.div`
  background: rgba(0, 0, 0, 0.08);
  color: #172b4d;
  margin: 0 0.5rem;
  border-radius: 0.75rem;
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
`;

const CountUser = styled.div`
  display: flex;
  justify-content: center;
  background: #869caa;
  color: #172b4d;
  border-radius: 0.75rem;

  padding: 3px 5px;
  height: 1.25rem;
  font-size: 0.75rem;
  margin-right: 0.625rem;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e0e1e6;
  border-radius: 15px;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.625rem;
  padding: 0.125rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export default SecondHeader;
