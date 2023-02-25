import styled from "styled-components";
import {Sizes} from "./Colors.js"

const {wrapperWidth} = Sizes;


const BackgroundGeneral = styled.div `
    position: relative;
    width: 100vw;
`

const WrapperGeneral = styled.div `
    width: ${wrapperWidth};
    height: 700px;
    margin: 0 auto;
`

export {BackgroundGeneral, WrapperGeneral}