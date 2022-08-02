import React from "react";
import User from "./User";
import { Row, Container } from "react-bootstrap";

function AllUser(props) {
	return (
		<Container>
			<Row>
				{props.userData.map((item, index) => {
					return <User key={index} userBio={item} />
				})}
			</Row>
		</Container>
	);
}

export default AllUser;