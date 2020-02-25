import React from 'react';
import styled from 'styled-components';

const BoarderHeader = styled.div`
    background: hsla(0,0%,100%,.24);
    height: auto;
    padding: 8px 4px 4px 8px;
    position: relative;
    transition: padding .1s ease-in;
    color: #172b4d;
    display: flex;
`

const BHName = styled.span`
    background: transparent;
    cursor: default;
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
    padding: 0;
    text-decoration: none;
    max-width: calc(100% - 24px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 12px;
`

const Star = styled.span`  
    background-image: url(https://image.flaticon.com/icons/svg/1828/1828970.svg);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 231px 17px;
    cursor: pointer;
    height: 25px;
    width: 125px;
    display: flex;
`
const StarSpan = styled.button`
    padding: 6px;
    top: 0;
    left: 0;
    border-radius: 3px;
    width: 32px;
    height: 32px;
    text-decoration: none;
    outline: none;
    background-color: rgba(0,0,0,.08);
    border: rgba(0,0,0,08);
    opacity: .5;
    :hover {
        opacity: 1;
    }
`

const FreeSpan = styled.span`
    float: left;
    border-left: 1px solid hsla(0,0%,100%,.24);
    height: 16px;
    margin: 8px 8px 12px 10px;
    border-color: rgba(0,0,0,.2);
`

const Free = styled.span`
    background-color: hsla(0,0%,100%,.3);
    margin: 0px 4px 4px 0px;
    padding: 0px 0px 0px 12px;
    top: 0;
    left: 0;
    border-radius: 3px;
    width: 91.97px;
    height: 32px;
    line-height: 32px;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,.08);
    opacity: .5;
    :hover {
        opacity: 1;
    }
    color: #172b4d;
    font-weight: 700;
`

const HLSpan = styled.span`
    padding-right: 12px;
`

const FreeSpan1 = styled.span`
    background: rgba(0,0,0,.08);
    font-size: 12px;
    border-radius: 12px;
    margin-left: 8px;
    padding: 2px 6px;
`

const TeamVisible = styled.span`
    background-color: hsla(0,0%,100%,.3);
    margin: 0px 4px 4px 0px;
    padding: 0px 0px 0px 12px;
    top: 0;
    left: 0;
    border-radius: 3px;
    width: 91.97px;
    height: 32px;
    line-height: 32px;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,.08);
    opacity: .5;
    :hover {
        opacity: 1;
    }
    color: #172b4d;
`

const TeamText = styled.span`
    font-size: 14px;
    line-height: 32px;
`

// const TeamIcon = styled.span`
//     background-image: url(https://image.flaticon.com/icons/svg/681/681443.svg);
//     background-position: 100% 0;
//     background-repeat: no-repeat;
//     background-size: 75px 25px;
//     cursor: pointer;
//     height: 25px;
//     width: 125px;
//     display: flex;
//     align-items: center;
// `

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

const CircleMore = styled.button`
    height: 28px;
    line-height: 28px;
    width: 28px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 700;
    background-color: rgba(0,0,0,.08);
    border: rgba(0,0,0,.08);
    outline: none;
    opacity: .5;

    :hover {
        opacity: 1;
    }
`

const InviteBtn = styled.button`
    background-color: rgba(0,0,0,.08);
    padding-left: 12px;
    margin-left: 8px;
    border-radius: 3px;
    color: #172b4d;
    border: rgba(0,0,0,.08);
    cursor: default;
    float: left;
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    outline: none;

    opacity: .5;

    :hover {
        opacity: 1;
    }
`

const InviteSpan = styled.span`
    margin-left: 8px;
    border-radius: 3px;
    border: rgba(0,0,0,.08);
    cursor: default;
    float: left;
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    margin: 0 4px 4px 0;
    overflow: hidden;
    position: relative;   
`

const Butler = styled.button`
    background-color: rgba(0,0,0,.08);
    padding-left: 12px;
    margin-left: 8px;
    border-radius: 3px;
    color: #172b4d;
    border: rgba(0,0,0,.08);
    cursor: default;
    float: left;
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    outline: none;

    opacity: .5;

    :hover {
        opacity: 1;
    }
`

const ButlerSpan = styled.span`
    background-image: url(https://image.flaticon.com/icons/svg/2197/2197260.svg);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 225px 28px;
    cursor: pointer;
    height: 25px;
    width: 125px;
    display: flex;
    justify-content: space-around;

    opacity: .5;
    :hover {
        opacity: 1;
    }
`

const Slack = styled.button`
    background-color: rgba(0,0,0,.08);
    padding-left: 12px;
    margin-left: 8px;
    border-radius: 3px;
    color: #172b4d;
    border: rgba(0,0,0,.08);
    cursor: default;
    float: left;
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    outline: none;

    opacity: .5;

    :hover {
        opacity: 1;
    }
`

const SlackSpan = styled.span`
    background-image: url(https://image.flaticon.com/icons/svg/2111/2111615.svg);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 225px 28px;
    cursor: pointer;
    height: 25px;
    width: 125px;
    display: flex;
    justify-content: space-around;

    opacity: .5;
    :hover {
        opacity: 1;
    }
`

const ShowMenu = styled.button`
    background-color: rgba(0,0,0,.08);
    padding-left: 12px;
    margin-left: 8px;
    border-radius: 3px;
    color: #172b4d;
    border: rgba(0,0,0,.08);
    cursor: default;
    float: left;
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    outline: none;

    opacity: .5;

    :hover {
        opacity: 1;
    }
`

const ShowMenuSpan = styled.span`
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 225px 28px;
    cursor: pointer;
    height: 25px;
    width: 125px;
    display: flex;
    justify-content: space-around;

    opacity: .5;
    :hover {
        opacity: 1;
    }
`

const BoaderFlexEnd = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
`

function BoaderHeader() {
    return (
        <BoarderHeader>
            <BHName>Hanlight_V2</BHName>
            <StarSpan>
                <Star />
            </StarSpan>
            <FreeSpan />
            <Free>
                <HLSpan>
                    한빛
                    <FreeSpan1>
                        Free
                    </FreeSpan1>
                </HLSpan>
            </Free>
            <FreeSpan/>
            <TeamVisible>
                {/* <TeamIcon/> */}
                <TeamText>
                    {/* <TeamIcon/> */}
                    Team Visible
                </TeamText>
            </TeamVisible>
            <FreeSpan/>
            <Circle>
                황
            </Circle>
            <Circle>
                W
            </Circle>
            <Circle>
                P
            </Circle>
            <Circle>
                S
            </Circle>
            <Circle>
                강
            </Circle>
            <CircleMore>
                +12
            </CircleMore>
            <InviteBtn>
                <InviteSpan>
                    <div>
                        Invite
                    </div>
                </InviteSpan>
            </InviteBtn>
            <BoaderFlexEnd>
                <Butler>
                    <ButlerSpan>Butler</ButlerSpan>
                </Butler>
                <Slack>
                    <SlackSpan>Slack</SlackSpan>
                </Slack>
                <ShowMenu>
                    <ShowMenuSpan>- - - - Show Menu</ShowMenuSpan>
                </ShowMenu>
            </BoaderFlexEnd>
        </BoarderHeader>
    );
}

export default BoaderHeader;