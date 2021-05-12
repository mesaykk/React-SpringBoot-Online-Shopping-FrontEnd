import './Header.css';
import { Link } from 'react-router-dom';


const Header = (props) => {

	return (
		<div className='Header'>
			<div className="Header" id="home1">
				<div className="Container">

					<div className="Banner">
						<h1><Link to="#">Mini Store,<span> Your stores. Your place.</span></Link></h1>
					</div>
					<div className="Search">
					{/* <Form >
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-light">Search</Button>
					</Form> */}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Header;


