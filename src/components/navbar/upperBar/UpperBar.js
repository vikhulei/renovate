import { Background, Wrapper, TabWrapper, ContactTab, RightSection, IconsTab } from "./UpperBarStyle"
import twitter from "../../../assets/twitter.jpg"
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import Search from "@mui/icons-material/Search";

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
                        f
                    </IconsTab>
                    <IconsTab>
                        <TwitterIcon />
                    </IconsTab>
                    <IconsTab>
                        <SearchIcon />
                    </IconsTab>
                </TabWrapper>
            </Wrapper>
        </Background>
    )
}

export default UpperBar