import Header from "./Header";
import ListContainer from "../ListContainer/index";
import { StyledBase } from "./styles";

const Base = () => {
    return (
        <StyledBase>
            <Header />
            <ListContainer />
        </StyledBase>
    )
};

export default Base;