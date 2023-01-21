import styled from "styled-components";
import {sizes} from "../Constants.js"

const {wrapperWidth} = sizes;


const Background = styled.div `
    width: 100vw;
`

const Wrapper = styled.div `
    width: ${wrapperWidth};
    height: 700px;
`

export {Background, Wrapper}