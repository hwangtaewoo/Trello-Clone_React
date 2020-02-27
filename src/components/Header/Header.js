import React from "react";
import styled from "styled-components";
import { FiStar } from "react-icons/fi";
import { FaSlack, FaConciergeBell } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";

function Header() {

    return (
        <Detail>
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
        </Detail>
    );
}

const Detail = styled.div`
    display: flex;
    justify-content: space-between;
    background: hsla(0,0%,100%,.24);
    width: 105.5rem;
    height: 2rem;
    padding: 5px;
    margin-top: 42px;
    position: fixed;
    font-weight: 400;
    color: #172B4D;
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
    margin-right: 15px;
`;

const TeamName = styled.div`
    display: flex;
    color: #172B4D;
    font-size: 18px;
    padding: 3px;
    margin-right: 10px;
    margin-left: 10px;
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
    font-size: 14px;

    height: 2rem;

    svg {
        width: 16px;
        height: 16px;
        padding-left: 2px;
        padding-right: 2px;
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
    margin-left: 8px;
    margin-right: 8px;
`;

const Text = styled.div`
    display: flex;
    align-items: center;
    padding-left: 3px;
    padding-right: 3px;
    font-weight: 700;
`;

const Free = styled.div`
    background: rgba(0,0,0,0.08);
    color: #172b4d;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 12px;
    font-size: 13px;
    padding: 2px 6px;
`;

const CountUser = styled.div`
    display: flex;
    justify-content: center;
    background: #869caa;
    color: #172B4D;
    border-radius: 12px;
    padding: 3px;
    padding-left: 5px;
    padding-right: 5px;
    height: 20px;
    font-size: 13px;
    margin-right: 10px;
`;

const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e0e1e6;
    border-radius: 15px;
    width: 24px;
    height: 24px;
    font-size: 10px;
    padding: 2px;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
`;

export default Header;