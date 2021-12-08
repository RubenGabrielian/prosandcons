import styled from "styled-components";
export const StyledList = styled.div`
    width: 50%;
    &:nth-child(odd) {
        border-right: 1px solid #a7a7a7;
    }
    ul {
        margin: 0;
        padding: 20px;
        list-style: none;
        max-height: calc(600px - 160px);
        overflow: auto;
    }
`
export const StyledListHeader = styled.div`
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid #a7a7a7;
    font-size: 20px;
    font-weigth: 500;
`

export const StyledListItem = styled.li`
padding: 10px 0;
border-bottom: 1px solid #b1b1b1;
span {
    font-weight: bold;
}
input {
    border: none;
    background: transparent;
    font-weight: 600;
    outline-color: #54a2e1;
    padding: 5px;
    border-radius: 3px;
}
`