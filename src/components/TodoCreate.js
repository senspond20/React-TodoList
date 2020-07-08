import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';

const CircleButton = styled.button`
    background : #38d9a9;
    &:hover{
        background:#63e6be;
    }
    &:active{
        background:#20c997;
    }

    z-index:5;
    cursor:pointer;
    width : 60px;
    heigth:  60px;
    display:flex;
    align-items: center;
    justify-content:center;

    position:absolute;
    left:50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    font-size: 60px;
    color:white;
    border-radius: 40px;
    border:none;
    outline:none;
    
    transition: 0.125s all ease-in;
    ${props =>
        props.open && 
        css`
        background: #ff6b6b;
        &:hover{
            background:#ff87878;
        }
        &:hover{
            background:#fa5252;
        }
        transform:translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPostioner = styled.div`
    width: 100%;
    bottom : 0;
    left: 0;
    postion: absolute;
`;
const InsertFrom = styled.div`
     background : #f8f9fa;
     padding: 32px;
     padding-bottom: 72px;
     border-bottom-left-radius: 16px;
     border-bottom-rihgt-radius: 16px;
     border-top: 1px solid #e9ecef;
`;
const Input = styled.input`
        padding: 12px;
        border-radius: 4px;
        border:1psx solid #dee2e6;
        width:100%;
        outline: none;
        font-size: 18px;
        box-sizing: border-box;
`;
function TodoCreate(){
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);

    return (
        <>
            {open &&(
                <InsertFormPostioner>
                    <InsertFrom>
                        <Input placeholder="할일을 입력 후, Enter을 누르세요" autoFocus/>
                    </InsertFrom>
                </InsertFormPostioner>
            )}
        
            <CircleButton onClick ={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
}

export default TodoCreate;


















