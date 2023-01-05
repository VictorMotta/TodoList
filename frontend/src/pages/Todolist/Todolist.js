import Logo from "../../components/Logo/Logo";
import { StyledContainerContent, StyledContainerPrincipal } from "./styled";

const Todolist = () => {
    return (
        <StyledContainerPrincipal>
            <StyledContainerContent>
                <Logo/>
                
            </StyledContainerContent>
        </StyledContainerPrincipal>
    );
};

export default Todolist;