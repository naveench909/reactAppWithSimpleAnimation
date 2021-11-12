import styled from "styled-components";

export const OuterLayout = styled.section`
    padding: 5rem 18rem;
    @media screen and (max-width:1350px){
        padding: 5rem 14rem;
    }

    @media screen and (max-width:1210px){
        padding: 5rem 10rem;
    }
    @media screen and (max-width:1076px){
        padding: 5rem 6rem;
    }
    @media screen and (max-width:500px){
        padding: 5rem 0.5rem;
    }
`;

export const InnerLayout = styled.section`
    padding: 8rem 0;
`;