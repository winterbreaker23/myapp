import styled from 'styled-components';
import * as St from '../Login/Style' ;
function Logheader()
{
    return(
        <Header>
            <St.Container>
                <St.logo>
                    <div className='fo-24 fo-b7 maincolor d-block tt-center' style={{letterSpacing:"3px"}}>
                        DECIDE
                    </div>
                    <div className='fo-16 maincolor d-block tt-center' style={{letterSpacing:"3px"}}>
                        WISE
                    </div>
                </St.logo>
                <div className='headerbtn'>
                    <div className='wt-bt maincolor fo-16 fo-b6'>
                        Log in
                    </div>
                    <div className='bl-bt white fo-16 fo-b6' style={{background:"#60a04c"}}>
                        Sign up
                    </div>
                </div>
            </St.Container>
        </Header>
    );
}

const Header = styled.div`
    padding: 30px 0;
    width:100%;
`
export default Logheader;
