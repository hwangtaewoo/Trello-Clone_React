import React from 'react';
import styled from 'styled-components';
import { FiHome, FiSearch, FiMenu } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { FaTrello } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { AiOutlineBell } from "react-icons/ai";

function TopHeader() {
    return(
        <>
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
        </>
    );
}

const Header = styled.div`
    display: flex;
    align-content: center;
    background: #445b6a;
    padding: 4px;
    position: fixed;
    font-weight: 700;
`;

const LeftBtn = styled.div`
    display: flex;
    justify-content: flex-start;

    width: 49rem;
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
    font-size: 14px;

    margin-right: 5px;

    height: 2rem;

    svg {
        width: 20px;
        height: 20px;
        padding-left: 2px;
        padding-right: 2px;
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
    font-size: 14px;
    margin-right: 5px;
    height: 2rem;

    svg {
        width: 20px;
        height: 20px;
        padding-left: 2px;
        padding-right: 2px;
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
    font-size: 25px;
`;

const RightBtn = styled.div`
    display: flex;
    width: 162px;
    padding-left: 40.5rem;
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
    background-size: 80px 30px;
    cursor: pointer;
    height: 30px;
    width: 80px;
    display: inline-block;
    justify-content: center;
    align-items: center;

    opacity: .5;

    &:hover {
        opacity: 1;
    }
`;

export default TopHeader;