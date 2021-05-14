import { Container, Navbar, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";

const Footer = (props) => {
  let fullYear = new Date().getFullYear();
  return (
    <div className="Footer">
      <Navbar fixed="bottom" bg="dark" variant="dark">

        <Col lg={12} className="text-center text-muted">
          <div>{fullYear}, All Right Reserved </div>
        </Col>
      </Navbar>
    </div>
  );
};
export default Footer;
