import { WrapperCost, MainImage } from "./CostStyles"
import cost from "../../../assets/home/01_cost.jpg"

const Cost = () => {
    return (
        <WrapperCost>
            <MainImage src={cost} alt="renovation"/>
        </WrapperCost>
    )
}

export default Cost