import CostOfRenovation from "./01_costOfRenovation/CostOfRenovation"
import OurServices from "./02_ourServices/OurServices"
import RecentProjects from "./03_recentProjects/RecentProjects"
import AboutUs from "./04_aboutUs/AboutUs"
import OurOffer from "./05_ourOffer/OurOffer"
import WhyChooseRenovate from "./06_whyChooseRenovate/WhyChooseRenovate"
import Testimonial from "./07_testimonial/Testimonial"
import WeWorkWith from "./08_weWorkWith/WeWorkWith"

const Home = () => {
    return (
        <>
        <CostOfRenovation />
        <OurServices />
        <RecentProjects />
        <AboutUs />
        <OurOffer />
        <WhyChooseRenovate />
        <Testimonial />
        <WeWorkWith />
        </>
    )
}

export default Home