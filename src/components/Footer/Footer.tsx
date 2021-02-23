import React from 'react'
import styled from 'styled-components'

const Footer: React.FC = () => {
    return (
        <Nav>
            <NavLab>
                <Box href={'#'}>
                    github
                </Box>
                <Box href={'#'}>
                    关于
                </Box>
            </NavLab>

        </Nav>
    )
}

const Nav = styled.div`
   bottom: 0px;
   width: 100%;
   height: 100px;
   background-color: #c6de41;
`

const NavLab = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: space-around;
`
const Box = styled.a`
    margin-top: 30px;
    width: 60px;
    height: 40px;
    text-decoration: none;
    text-align: center;
    line-height: 40px;
    color: inherit;
    border:1px solid #153b44;
    border-radius: 12px;
    background-color: #2d6e7e;
`

export default Footer