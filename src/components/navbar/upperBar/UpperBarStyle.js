import styled from "styled-components"
import { BackgroundGeneral, WrapperGeneral } from "../../ui/GeneralStyles"
import { Sizes, Colors } from "../../ui/Colors"


const { lightergrey, darkergrey, bordergrey } = Colors


const Background = styled(BackgroundGeneral) `
background-color: ${lightergrey}
`

const Wrapper = styled(WrapperGeneral) `
    height: 45px;
    display: flex;
    justify-content: space-between;
`

const TabWrapper = styled.div `
    height: 100%;
    display: flex;
`

const ContactTab = styled.div `
    font-size: 0.75rem;
    color: ${darkergrey};
    width: 180px;
    height: 100%;
    text-align: center;
    line-height: 45px;
    border-left: solid 0.5px ${bordergrey};
    &&:last-of-type {
        border-right: solid 0.5px ${bordergrey};;
    }
`

const RightSection = styled.div `

`

const IconsTab = styled(ContactTab) `
    width: 50px;
`

export {Background, Wrapper, TabWrapper, ContactTab, RightSection, IconsTab}