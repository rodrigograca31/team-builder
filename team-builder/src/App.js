import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";

import Form from "./components/Form/index";

function App() {
	const [members, setMembers] = useState([]);
	const [memberToEdit, setMemberToEdit] = useState({});

	useEffect(() => {
		setMembers([
			{
				id: 1,
				name: "Rodrigo",
				email: "rr@rr.com",
				role: "frontend"
			},
			{
				id: 2,
				name: "Fifi",
				email: "fifi@fifi.com",
				role: "backend"
			},
			{
				id: 3,
				name: "ABCDEF",
				email: "ABCDEF@ABCDEF.com",
				role: "backend"
			},
			{
				id: 4,
				name: "Fifi",
				email: "fifi@fifi.com",
				role: "backend"
			}
		]);
	}, []);

	const editMember = mem => {
		console.log("edit");
		console.log(mem);
		setMemberToEdit(mem);
	};

	return (
		<div className="App">
			<h1>Members:</h1>
			<Form
				setMembers={setMembers}
				members={members}
				editThisOne={memberToEdit}
				setMemberToEdit={setMemberToEdit}
			/>
			<hr />
			<div class="members">
				{members.map(member => {
					return (
						<p>
							{member.name} - {member.email} - {member.role} -{" "}
							<span
								className="edit"
								onClick={e => editMember(member)}
							>
								✏️
							</span>
						</p>
					);
				})}
			</div>
		</div>
	);
}

export default App;
