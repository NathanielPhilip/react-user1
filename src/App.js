import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import AllUser from "./components/AllUser";
import AddUserForm from "./components/AddUserForm";

function App() {
  const [users, setUsers] = useState([
		{ name: "Nat", gen: 15, email: "nat@example.com" },
		{ name: "Nora", gen: 41, email: "norae@gmail .com" },
	]);
	const addNewUser = (user) => {
		setUsers([...users, user]);
	};
	return (
		<Container style={{ marginTop: "30px" }}>
			<Row>
				<Col>
					<AddUserForm newUser={addNewUser} />
				</Col>
				<Col>
					<AllUser userData={users} />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
