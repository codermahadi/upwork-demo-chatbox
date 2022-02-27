import styled from "styled-components";

const Container = styled.div`
width: 60%;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-column-gap: 1%;
/* TODO: Update after finishing code */
/* Smartphones (portrait and landscape) ----------- xs */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 100%;
    margin: 0;
}
/* Smartphones (portrait and landscape) ----------- sm */
@media only screen and (min-device-width : 481px) and (max-device-width: 600px) {
    width: 96%;
    margin: 0 auto;
}
`;

export {Container};