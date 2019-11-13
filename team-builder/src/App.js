import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Button } from "reactstrap";

import Form from "./components/Form/index";
import memberObject from "./memberObject";

function App() {
	const [members, setMembers] = useState([]);
	const [memberToEdit, setMemberToEdit] = useState({});

	useEffect(() => {
		setMembers([
			new memberObject({
				id: 1,
				name: "Rodrigo",
				email: "rr@rr.com",
				role: "frontend"
			}),
			new memberObject({
				id: 2,
				name: "Fifi",
				email: "fifi@fifi.com",
				role: "backend"
			}),
			new memberObject({
				id: 3,
				name: "ABCDEF",
				email: "ABCDEF@ABCDEF.com",
				role: "backend"
			}),
			new memberObject({
				id: 4,
				name: "Fifi",
				email: "fifi@fifi.com",
				role: "backend"
			})
		]);
	}, []);

	const editMember = mem => {
		console.log("edit");
		console.log(mem);
		setMemberToEdit(mem);
	};

	return (
		<div className="App">
			<div className="row">
				<div className="offset-4 col-4">
					<Form
						setMembers={setMembers}
						members={members}
						editThisOne={memberToEdit}
						setMemberToEdit={setMemberToEdit}
					/>
					<hr />
					<h1>Members:</h1>
					<hr />
					<div class="members">
						{members.map(member => {
							return (
								<p className="member">
									<span>
										{member.name} - {member.email} -{" "}
										{member.role}
									</span>
									<Button
										className="edit"
										onClick={e => editMember(member)}
									>
										✏️
									</Button>
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
