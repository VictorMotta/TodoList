import { StyledLogo } from "./styled";
import logoImg from "../../assets/logo.png"
 
const Logo = () => {
    return (
        <StyledLogo>
            <img src={logoImg} />
        </StyledLogo>
    );
};

export default Logo;