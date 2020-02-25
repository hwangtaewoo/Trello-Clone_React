import React from 'react';
import styled from 'styled-components';

const Boader = styled.div`
    background-color: #EBECF0;
    border-radius: 3px;
    width: 272px;
    margin: 0 4px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    width: ${props => props.width || '272px'};
`
const BoaderHeader = styled.div`
    cursor: pointer;
    width: 270px;
    height: 40px;
`

const CardList = styled.div`
    width: 264px;
    /* height: 356px; */
    margin: 0px 4px;
    padding: 0px 4px;
`

const Card = styled.div`
    width: 256px;
    height: 44px;
    background-color: #ffffff;
    border-radius: 3px;
    overflow: hidden;
    padding: 6px 8px -1px;
    margin-bottom: 1rem;
`
const Label = styled.span`
    margin: 0px 4px 4px 0px;
    width: 40px;
    height: 8px;
    border-radius: 4px;
    background: ${props => props.color || '#EB5A46'};
    display: flex;
`

const CheckMark = styled.span`
    background-image: url(https://image.flaticon.com/icons/svg/1287/1287087.svg);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 220px 11px;
    cursor: pointer;
    height: 25px;
    width: 125px;
    display: flex;
    flex-grow: 1;
`

const AddCard = styled.div`
    
`

function BoaderList() {
    return (
        <>
        <Boader>
            <BoaderHeader>
                Reminder
            </BoaderHeader>
            <CardList>
                <Card>
                    <Label />
                    한빛의 졸업식 영상 게시
                </Card>
                <Card>
                    <Label />
                    자료 수집
                    0/5
                    <CheckMark/>
                </Card>
                <Card>
                    <Label color="#61BD4F"/>
                    한빛 뮤직
                </Card>
                <Card>
                    <Label color="#F2D600"/>
                    당일 시간표 수정
                </Card>
                <Card>

                </Card>
                <Card>

                </Card>
                <AddCard />
            </CardList>
        </Boader>
        <Boader>
            <BoaderHeader>
                Tasking Space(ALL) 
            </BoaderHeader>
            <CardList>
                <Card>
                    <Label />
                    팀장 회의
                </Card>
                <Card>
                    <Label color="#61BD4F"/>
                    주간 회의 결과 공유
                </Card>
                <Card>
                    <Label color="#61BD4F"/>
                    한빛 뮤직
                </Card>
                <Card>
                    <Label color="#F2D600"/>
                    당일 시간표 수정
                </Card>
                <AddCard />
            </CardList>
        </Boader>
        <Boader>
            <BoaderHeader>
                Reminder
            </BoaderHeader>
            <CardList>
                <Card>
                    <Label />
                    한빛의 졸업식 영상 게시
                </Card>
                <Card>
                    <Label />
                    자료 수집
                    0/5
                    <CheckMark/>
                </Card>
                <Card>
                    <Label color="#61BD4F"/>
                    한빛 뮤직
                </Card>
                <Card>
                    <Label color="#F2D600"/>
                    당일 시간표 수정
                </Card>
                <Card>

                </Card>
                <Card>

                </Card>
                <AddCard />
            </CardList>
        </Boader>
        <Boader>
            <BoaderHeader>
                Reminder
            </BoaderHeader>
            <CardList>
                <Card>
                    <Label />
                    한빛의 졸업식 영상 게시
                </Card>
                <Card>
                    <Label />
                    자료 수집
                    0/5
                    <CheckMark/>
                </Card>
                <Card>
                    <Label color="#61BD4F"/>
                    한빛 뮤직
                </Card>
                <Card>
                    <Label color="#F2D600"/>
                    당일 시간표 수정
                </Card>
                <Card>

                </Card>
                <Card>

                </Card>
                <AddCard />
            </CardList>
        </Boader>
        <Boader>
            <BoaderHeader>
                Reminder
            </BoaderHeader>
            <CardList>
                <Card>
                    <Label />
                    한빛의 졸업식 영상 게시
                </Card>
                <Card>
                    <Label />
                    자료 수집
                    0/5
                    <CheckMark/>
                </Card>
                <Card>
                    <Label color="#61BD4F"/>
                    한빛 뮤직
                </Card>
                <Card>
                    <Label color="#F2D600"/>
                    당일 시간표 수정
                </Card>
                <Card>

                </Card>
                <Card>

                </Card>
                <AddCard />
            </CardList>
        </Boader>
        <Boader width="256px">
            <BoaderHeader>
                Reminder
            </BoaderHeader>
            <CardList>
                <Card>
                    <Label />
                    한빛의 졸업식 영상 게시
                </Card>
                <Card>
                    <Label />
                    자료 수집
                    0/5
                    <CheckMark/>
                </Card>
                <Card>
                    <Label color="#61BD4F"/>
                    한빛 뮤직
                </Card>
                <Card>
                    <Label color="#F2D600"/>
                    당일 시간표 수정
                </Card>
                <Card>

                </Card>
                <Card>

                </Card>
                <AddCard />
            </CardList>
        </Boader>
        </>
    );
}

export default BoaderList;