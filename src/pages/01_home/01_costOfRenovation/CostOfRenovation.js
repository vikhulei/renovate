import { Background, ImageContainer, Image, Wrapper } from "./CostOfRenovationStyles"
import excavator from "../../../assets/home/excavator.jpg"

const CostOfRenovation = () => {
    return (
        <Background>
            <ImageContainer>
            <Image src={excavator} />
            </ImageContainer>
            <Wrapper>
                <h2>Cost of Renovation</h2>
            </Wrapper>
        </Background>
    )
}

export default CostOfRenovation