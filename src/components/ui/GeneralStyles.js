import styled from "styled-components";
import {Sizes} from "../Constants.js"

const {wrapperWidth} = Sizes;


const Background = styled.div `
    width: 100vw;
`

const Wrapper = styled.div `
    width: ${wrapperWidth};
    height: 700px;
`

export {Background, Wrapper}