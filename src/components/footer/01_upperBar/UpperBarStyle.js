import styled from "styled-components"
import { BackgroundGeneral, WrapperGeneral } from "../../ui/GeneralStyles"
import {Colors} from "../../ui/Colors"

const {orange} = Colors

const Background = styled(BackgroundGeneral) `
    background-color: ${orange};
    height: 150px;
`

const Wrapper = styled(WrapperGeneral) `
    height: 100%;
    display: flex;
    justify-content: space-between;
`

const SectionWrapper = styled.div `
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
`

const IconWrapper = styled.div `
    width: 90px;
    height: 90px;
    // padding: 5px;
    background-color: white;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 2;
`

const Text = styled.p `
    color: white;
`

export {Background, Wrapper, SectionWrapper, IconWrapper, TextWrapper, Text}