import React from 'react'
import styled from 'styled-components'

const Header : React.FC = () => {
    return(
        <Top>
            报价
        </Top>
    )
}

const Top = styled.div`
    width: 100%;
    height: 60px;
    font-size: 20px;
    margin-top: 20px;
    text-align: center;
    line-height: 50px;
    background-color: #8ac4d0;
    box-shadow: 0 5px 5px 1px #F4AAB9
`

export default Header;
