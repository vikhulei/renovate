import { Wrapper } from "./NavbarStyle"
import UpperBar from "./upperBar/UpperBar"
import LowerBar from "./lowerBar/LowerBar"

const Navbar = () => {
    return (
        <Wrapper>
            <UpperBar />
            <LowerBar />
        </Wrapper>
    )
}

export default Navbar