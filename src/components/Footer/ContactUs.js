import { Container, Navbar, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactUs = (props) => {
  let fullYear = new Date().getFullYear();
  return (
    <div className="ContactUs">
      {/* <ul className="address" style={{ listStyle: "none" }}>
        <li>
          1234k Avenue, 4th block, New York City.
        </li>
        <li>
          <Link to="mailto:info@example.com">info@example.com</Link>
        </li>
        <li>+1234 567 567</li>
      </ul> */}
    </div>
  );
};
export default ContactUs;
