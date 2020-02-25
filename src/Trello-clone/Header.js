import React from 'react';
import styled from 'styled-components';

const Header = styled.div` 
    background: rgba(0,0,0,.32);
    opacity: 0.6;
    font-size: 14px;
    height: 40px;
    /* padding: 4px; */
    display: flex;
    font-weight: 700;
`

const HeaderFlexStart = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
    padding: 0.5rem;
    height: 32px;
`

const FBtn = styled.span`
    height: 24px;
    line-height: 32px;
    width: 24px;
    background-color: hsla(0,0%,100%,.3);
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 1rem;
    border-radius: 3px;

    opacity: .5;

    :hover {
        opacity: 1;
    }
`

const ArrayIcon = styled.span`
    background-image: url(https://image.flaticon.com/icons/svg/335/335376.svg);
    height: 20px;
    width: 20px;
    display: flex;
    background-size: 23px 20px;
    background-position: 100% 0;
`

const SBtn = styled.span`
    height: 24px;
    line-height: 32px;
    width: 24px;
    background-color: hsla(0,0%,100%,.3);
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 1rem;
    border-radius: 3px;
    opacity: .5;

    :hover {
        opacity: 1;
    }
`

const HouseSpan = styled.span`
    background-image: url(https://image.flaticon.com/icons/svg/747/747420.svg);
    height: 20px;
    width: 20px;
    display: flex;
    background-size: 20px 20px;
    background-position: 100% 0;
`

const TBtn = styled.span`
    height: 24px;
    line-height: 32px;
    width: 72px;
    background-color: hsla(0,0%,100%,.3);
    color: #ffffff;
    font-size: 14px;
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 1rem;
    border-radius: 3px;
    display: flex;
    justify-content: center;

    opacity: .5;

    :hover {
        opacity: 1;
    }
`

const Search = styled.input`
    background-color: hsla(0,0%,100%,.3);
    border-radius: 3px;
    border: none;
    box-shadow: none;
    box-sizing: border-box;
    color: hsla(0,0%,100%,.5);
    float: left;
    font-size: 13px;
    height: 32px;
    line-height: 19px;
    margin: 0;
    outline: none;
    padding-left: 8px;
    padding-right: 30px;
    transition: width .15s;
    width: 180px;

    opacity: .5;

    :hover {
        opacity: 1;
    }
`

const Zoom = styled.span`
    background-image: url(https://image.flaticon.com/icons/svg/482/482631.svg);
    height: 20px;
    width: 20px;
    display: flex;
    background-size: 20px 20px;
    background-position: 100% 0;
`

const BoardIcon = styled.span`
    background-image: url(https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png);
    background-position: 100% 2;
    /* background-repeat: no-repeat; */
    background-size: 61px 22px;
    display: inline-block;
    display: flex;
    justify-content: flex-start;
    height: 20px;
    width: 20px;
    padding-right: 1rem;
`

const BoarderSpan = styled.span`   
    transition: .1s ease;
    padding: 0 8px 0 2px;
    max-width: 150px;
`

const TrelloMainIcon = styled.span`
    background-image: url(https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 80px 30px;
    cursor: pointer;
    display: inline-block;
    height: 30px;
    width: 80px;
    display: flex;
    opacity: .5;

    margin-left: 30rem;

    :hover {
        opacity: 1;
    }
`

const PlusBtn = styled.span`
    height: 24px;
    line-height: 32px;
    width: 24px;
    background-color: hsla(0,0%,100%,.3);
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 1rem;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const IBtn = styled.span`
    height: 24px;
    line-height: 32px;
    width: 24px;
    background-color: hsla(0,0%,100%,.3);
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 1rem;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BellBtn = styled.span`
    height: 24px;
    line-height: 32px;
    width: 24px;
    background-color: hsla(0,0%,100%,.3);
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 1rem;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Circle = styled.button`
    height: 28px;
    line-height: 28px;
    width: 28px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 700;
    background-color: #dfe1e6;
    outline: none;
    opacity: .5;

    :hover {
        opacity: 1;
    }
`

const HeaderFlexEnd = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    padding-right: 1rem;
`

function TopHeader() {
    return(
        <Header>
            <HeaderFlexStart>
                <FBtn>
                    <ArrayIcon>
                    </ArrayIcon>
                </FBtn>
                <SBtn>
                    <HouseSpan>
                    </HouseSpan>
                </SBtn>
                <TBtn>
                    <BoardIcon/>
                    <BoarderSpan>
                        Boards
                    </BoarderSpan>
                </TBtn>
                    <Search />
                    <Zoom />
                <TrelloMainIcon />
            </HeaderFlexStart>
            <HeaderFlexEnd>
                <PlusBtn>+</PlusBtn>
                <IBtn>i</IBtn>
                <BellBtn>🛎</BellBtn>
                <Circle>황</Circle>
            </HeaderFlexEnd>
        </Header>
    );
}

export default TopHeader;