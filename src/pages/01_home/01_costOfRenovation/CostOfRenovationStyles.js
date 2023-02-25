import styled from "styled-components"
import { BackgroundGeneral, WrapperGeneral } from "../../../components/ui/GeneralStyles"

const Background = styled(BackgroundGeneral) `
    max-height: 600px;
`

const ImageContainer = styled.div `
position: absolute;
width: 100%;
height: 100%;
z-index: 0;
`

const Image = styled.img `
width: 100%;
height: 100%;
object-fit: cover;
`

const Wrapper = styled(WrapperGeneral) `
    position: relative;
    border: 5px solid blue;
    z-index: 100;
`

export {Background, ImageContainer, Image, Wrapper}