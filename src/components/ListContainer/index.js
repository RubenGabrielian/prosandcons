import React, { useState } from "react";
import List from "../List/index";
import ListItem from "../List/ListItem";
import { StyledListsContainer } from "./styles";

const ListsContainer = () => {

    const [prosList, setProsList] = useState([]);

    const [consList, setConsList] = useState([]);

    const removeItem = (item, type) => {
        if (type === "pros") {
            if (item?.name?.trim() === "") {
                const newArray = prosList.filter((prostListItem) => {
                    return prostListItem.id !== item.id
                });
                setProsList(newArray)
            }
        } else {
            if (item?.name?.trim() === "") {
                const newArray = consList.filter((consListItem) => {
                    return consListItem.id !== item.id
                });
                setConsList(newArray)
            }
        }
    }


    const addItem = (item, type) => {
        if (type === "pros") {
            const newArray = [...prosList, item];
            setProsList(newArray);
        } else {
            const newArray = [...consList, item];
            setConsList(newArray);
        }
    }


    return (
        <StyledListsContainer>
            <List name="PROS">
                {
                    prosList.length ? (
                        prosList.map((item, index, allArray) => {
                            return (
                                <React.Fragment key={item.id}>
                                    <ListItem
                                        itemObj={item}
                                        type="pros"
                                        index={index}
                                        removeItem={removeItem}
                                        prevInput={allArray.length - 1}
                                    />
                                    {
                                        index === allArray.length - 1 ? (
                                            <ListItem
                                                itemObj={{ id: '', name: '' }}
                                                index={index + 1}
                                                key={index}
                                                type="pros"
                                                removeItem={removeItem}
                                                addItem={addItem}
                                            />
                                        ) : null
                                    }
                                </React.Fragment>
                            )
                        })
                    ) : <ListItem
                        itemObj={{ id: '', name: '' }}
                        index={0}
                        key={0}
                        type="pros"
                        removeItem={removeItem}
                        addItem={addItem}
                    />
                }
            </List>
            <List name="CONS">
                {
                    consList.length ? (
                        consList.map((item, index, allArray) => {
                            return (
                                <React.Fragment key={item.id}>
                                    <ListItem
                                        itemObj={item}
                                        index={index}
                                        type="cons"
                                        removeItem={removeItem}
                                        prevInput={allArray.length - 1}
                                    />
                                    {
                                        index === allArray.length - 1 ? (
                                            <ListItem
                                                itemObj={{ id: '', name: '' }}
                                                index={index + 1}
                                                key={index}
                                                type="cons"
                                                removeItem={removeItem}
                                                addItem={addItem}

                                            />
                                        ) : null
                                    }
                                </React.Fragment>

                            )
                        })
                    ) : <ListItem
                        itemObj={{ id: '', name: '' }}
                        index={0}
                        key={1}
                        type="cons"
                        removeItem={removeItem}
                        addItem={addItem}
                    />

                }

            </List>
        </StyledListsContainer>
    )
}
export default ListsContainer;