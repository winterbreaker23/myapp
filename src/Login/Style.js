import styled from "styled-components";



export const Loginpage = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    min-height: calc(100vh - 234px);
`;
export const Loginform = styled.div`
    display:flex;
    flex-direction:column;
    width:325px;
    min-height:325px;
`;
export const Container = styled.div`
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 160px;
    padding-right: 160px;
    display:flex;
    justify-content:space-between;

    @media screen and (max-width: 1300px)
   {
    padding-left: 60px;
    padding-right: 60px;
   }
   @media screen and (max-width: 1024px)
   {
    padding-left: 25px;
    padding-right: 25px;
   }
   @media screen and (max-width: 767px)
   {
    padding-left: 15px;
    padding-right: 15px;
   }
`
export const logo=styled.div`
   width:125px;
   height:57px;
   border-radius:10px;
   border:3px solid #60a04c;
   background-color:#d2efca;
`