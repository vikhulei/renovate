import {Background, Wrapper, Logo, MenuWrapper, MenuItem } from "./LowerBarStyle"

const LowerBar = () => {
    return (
        <Background>
            <Wrapper>
                <Logo>renovate</Logo>
                <MenuWrapper>
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/services">Services</MenuItem>
                    <MenuItem to="/projects">Projects</MenuItem>
                </MenuWrapper>
            </Wrapper>
        </Background>
    )
}

export default LowerBar