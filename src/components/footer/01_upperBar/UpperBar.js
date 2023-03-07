import { Background, Wrapper, SectionWrapper, IconWrapper, TextWrapper, Text } from "./UpperBarStyle"

const UpperBar = () => {
    return (
        <Background>
            <Wrapper>
                <SectionWrapper>
                    <IconWrapper></IconWrapper>
                    <TextWrapper>
                        <Text>Phone:</Text>
                        <Text>+149 75 23 222 35</Text>
                    </TextWrapper>
                </SectionWrapper>
                <SectionWrapper>
                    <IconWrapper></IconWrapper>
                    <TextWrapper>
                        <Text>Phone:</Text>
                        <Text>+149 75 23 222 35</Text>
                    </TextWrapper>
                </SectionWrapper>
                <SectionWrapper>
                    <IconWrapper></IconWrapper>
                    <TextWrapper>
                        <Text>Phone:</Text>
                        <Text>+149 75 23 222 35</Text>
                    </TextWrapper>
                </SectionWrapper>
            </Wrapper>
        </Background>
    )
}

export default UpperBar