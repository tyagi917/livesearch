import React from 'react';
import Card from "react-bootstrap/Card";
class Country extends React.Component{
	render()
	{
		const {cou}=this.props;
		return(
			<Card  className="a" style={{ width: '18rem' }}>
			<Card.Body>
			<Card.Title>{cou.id}</Card.Title>
			<Card.Title>{cou.name}</Card.Title>
			<Card.Title>{cou.items}</Card.Title>
			<Card.Title>{cou.address}</Card.Title>
			<Card.Title>{cou.pincode}</Card.Title>


			</Card.Body>
			</Card>
			



			);
	}
}
export default Country;