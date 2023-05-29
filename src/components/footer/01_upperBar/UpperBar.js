import { Background, Wrapper, SectionWrapper, IconWrapper, Icon, TextWrapper, Text } from "./UpperBarStyle"
import phone from "../../../assets/footer/phone.jpg"
import post from "../../../assets/footer/post.jpg"
import email from "../../../assets/footer/email.jpg"

const UpperBar = () => {
    return (
        <Background>
            <Wrapper>
                <SectionWrapper>
                    <IconWrapper>
                        <Icon src={phone} alt="phone"/>
                    </IconWrapper>
                    <TextWrapper>
                        <Text>Phone:</Text>
                        <Text>+149 75 23 222 35</Text>
                    </TextWrapper>
                </SectionWrapper>
                <SectionWrapper>
                    <IconWrapper>
                    <Icon src={post} alt="phone"/>
                    </IconWrapper>
                    <TextWrapper>
                        <Text>Phone:</Text>
                        <Text>+149 75 23 222 35</Text>
                    </TextWrapper>
                </SectionWrapper>
                <SectionWrapper>
                    <IconWrapper>
                    <Icon src={email} alt="phone"/>
                    </IconWrapper>
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