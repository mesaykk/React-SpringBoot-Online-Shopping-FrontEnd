import React from 'react';
import {faInfoCircle, faMailBulk, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactUs = (props) => {
  
  return (
    <div className="container mt-5">
        <h4><FontAwesomeIcon className="ml-2 mr-2" icon={faInfoCircle}/>Contacts</h4>
        <br/>
        <p><b><FontAwesomeIcon className="ml-2 mr-2" icon={faPhone}/>Mobile:</b> (111)-123-1234<br/>
            <b><FontAwesomeIcon className="ml-2 mr-2" icon={faMailBulk}/>E-mail:</b> admin@gmail.com</p>
        <br/>
        <h6>Working time</h6>
        <p>The online store is open from 08:00 to 20:00 without breaks and weekends. <br/>
            Online orders are accepted around the clock.</p>
        <br/>
        <h6>Delivery</h6>
        <p>Delivery of orders come through courier service.</p>
    </div>
  );
};
export default ContactUs;
