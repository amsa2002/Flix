import React from 'react'
import styled from 'styled-components'

function UploadButton({name, onClick, icon, bg, type, disabled}) {
  return (
    <UploadButtonStyled style={{
        background:bg
    }} onClick={onClick} type={type} disabled={disabled}>
        {icon}
        {name}
    </UploadButtonStyled>
  )
}

const UploadButtonStyled = styled.div `
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 1.5rem;
    border-radius: 7px;
    cursor: pointer;
    transition: all .4s ease;
    color: rgba(255,255,255,0.8);
    font-weight: 600;
    &:hover{
        color: rgba(255,255,255, 1);
    }
`;

export default UploadButton