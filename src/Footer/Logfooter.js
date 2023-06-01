import styled from 'styled-components';
import * as St from '../Login/Style' ;
import {Link} from 'react-router-dom'
function Logfooter()
{
    return(
        <Footer>
            <St.Container>
                <div className='copyright fo-18 fo-b4' style={{color:"#a4a4a4"}}>
                    Copyright © 2023 | All Rights Reserved
                </div>
                <div className='linkg'>
                    <Link to='' className='linkbt'>
                        <i className='fa fa-twitter'></i>
                    </Link>
                    <Link to='' className='linkbt'>
                        <i className='fa fa-linkedin'></i>
                    </Link>
                </div>
            </St.Container>
        </Footer>
    );
}
const Footer = styled.div`
    padding: 40px 0 41px 0px;
    width:100%;
`
export default Logfooter;