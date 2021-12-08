import ListHeader from "./ListHeader";
import { StyledList } from "./styles";

const List = ({ name, children }) => {

    return (
        <StyledList>
            <ListHeader name={name} />
            <ul>
                {children}
            </ul>
        </StyledList>
    )
}

export default List;