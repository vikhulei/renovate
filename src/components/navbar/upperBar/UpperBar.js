import {Background, Wrapper, TabWrapper, ContactTab, RightSection, IconsTab} from "./UpperBarStyle"
import { Colors } from "../../ui/Colors"
const { darkergrey } = Colors



const UpperBar = () => {
    return (
        <Background>
            <Wrapper>
                <TabWrapper>
                    <ContactTab>+140 65 5543435454</ContactTab>
                    <ContactTab>+140 65 5543435454</ContactTab>
                    <ContactTab>+140 65 5543435454</ContactTab>
                </TabWrapper>
                <TabWrapper>
                    <IconsTab>
                        L
                    </IconsTab>
                    <IconsTab>
                        L
                    </IconsTab>
                    <IconsTab>
                        L
                    </IconsTab>
                </TabWrapper>
            </Wrapper>
        </Background>
    )
}

export default UpperBar