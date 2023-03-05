import styled from "styled-components"
import { Link } from "react-router-dom"
import { BackgroundGeneral, WrapperGeneral } from "../../ui/GeneralStyles"
import { Sizes, Colors } from "../../ui/Colors"

const { lightgrey, orange, darkergrey } = Colors

const Background = styled(BackgroundGeneral) `
    height: 100px;
    background-color: white;
`

const Wrapper = styled(WrapperGeneral) `
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.h1 `
    color: ${orange};
    font-size: 2.3rem;
    font-weight: 900;
    text-transform: uppercase;
`
const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 62%;
    height: 100%;
`

const MenuItem = styled(Link) `
    text-transform: uppercase;
    text-decoration: none;
    color: ${darkergrey};
`

export {Background, Wrapper, Logo, MenuWrapper, MenuItem }