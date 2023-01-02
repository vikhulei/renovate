import styled from "styled-components"

const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ImageContainer = styled.div `
    margin: 100px auto;
    width: 400px;
    height: 200px;
`

export { ImageContainer, Image }