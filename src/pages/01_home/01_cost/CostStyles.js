import styled from "styled-components"
import { Wrapper } from "../../../components/ui/GeneralStyles"

const WrapperCost = styled(Wrapper) `
    background-color: red;
`

const MainImage = styled.img `
    width: 100%;
    height: 50%;
    object-fit: cover;
`

export {WrapperCost, MainImage}