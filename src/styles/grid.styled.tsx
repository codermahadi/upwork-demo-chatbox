import styled from "styled-components";

type GridProps = {
    col:number,
    xs?: number,
    sm?: number,
    md?: number,
    ld?: number,
    xl?: number,

} 

const Grid = styled.div<GridProps>`
    grid-column: span col / span col;
/* Smartphones (portrait and landscape) ----------- xs */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    grid-column: span ${props => props.xs || props.col} / span ${props => props.xs || props.col};
}
/* Smartphones (portrait and landscape) ----------- sm */
@media only screen and (min-device-width : 481px) and (max-device-width: 600px) {
    grid-column: span ${props => props.sm || props.col} / span ${props => props.sm || props.col};
}
/* Large devices (laptops/desktops, 992px and up) md */
@media screen and (min-width: 601px) and (max-width: 992px){
    grid-column: span ${props => props.md || props.col} / span ${props => props.md || props.col};
}
/* Desktops and laptops ----------- ld*/
@media only screen  and (min-width : 1224px) {
    grid-column: span ${props => props.ld || props.col} / span ${props => props.ld || props.col};
}
/* Large screens ----------- */
@media only screen  and (min-width : 1824px) {
    grid-column: span ${props => props.xl || props.col} / span ${props => props.xl || props.col};
}
`;

export {Grid};