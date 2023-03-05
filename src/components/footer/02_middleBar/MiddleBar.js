import { Background, Wrapper } from "./MiddleBarStyle"
import AboutUs from "./01_aboutUs/AboutUs"
import OurServices from "./02_ourServices/OurServices"
import Categories from "./03_categories/Categories"
import LatestPolls from "./04_latestPolls/LatestPolls"

const MiddleBar = () => {
return (
    <Background>
        <Wrapper>
            <AboutUs />
            <OurServices />
            <Categories />
            <LatestPolls />
        </Wrapper>
    </Background>
)
}

export default MiddleBar