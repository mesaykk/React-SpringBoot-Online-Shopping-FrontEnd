import { Container, Navbar, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 


const Footer = (props) => {

    let fullYear = new Date().getFullYear();
    return (
        <div className ="Footer">
        <Navbar sticky="bottom" bg="dark" variant="dark">
            
             
                               
                                {/* <ul className="address">
                                    <li>1234k Avenue, 4th block, <span>New York City.</span></li>
                                    <li><Link to="mailto:info@example.com">info@example.com</Link></li>
                                    <li>+1234 567 567</li>
                                </ul> */}
                           

                    <Col lg={12} className="text-center text-muted">
                        <div>{fullYear}, All Right Reserved </div>
                    </Col>
                
          
    </Navbar>
    </div>
        
    )
}
export default Footer;