import { useEffect, useRef, useState } from "react";
import { StyledListItem } from "./styles";


const ListItem = ({ itemObj, type, removeItem, index, addItem, prevInput }) => {

    const [value, setValue] = useState(itemObj.name);
    const inputRef = useRef(null);

    useEffect(() => {
        if (index === prevInput) {
            inputRef.current.focus();
        }
    }, [inputRef, index, prevInput]);

    return (
        <StyledListItem>
            <span>{index + 1}.</span>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                    removeItem({ ...itemObj, name: e.target.value }, type)
                    addItem?.({ id: Math.random(), name: e.target.value }, type)
                }}
            />
        </StyledListItem>
    )
}

export default ListItem;