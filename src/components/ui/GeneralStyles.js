import styled from "styled-components";
import {Sizes} from "./Colors.js"

const {wrapperWidth} = Sizes;


const BackgroundGeneral = styled.div `
    width: 100vw;
`

const WrapperGeneral = styled.div `
    width: ${wrapperWidth};
    height: 700px;
`

export {BackgroundGeneral, WrapperGeneral}