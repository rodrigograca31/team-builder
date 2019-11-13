import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";

import Form from "./components/Form/index";

function App() {
	const [members, setMembers] = useState([]);

	useEffect(() => {
		setMembers([
			{
				name: "Rodrigo",
				email: "rr@rr.com",
				role: "frontend"
			},
			{
				name: "Fifi",
				email: "fifi@fifi.com",
				role: "backend"
			},
			{
				name: "ABCDEF",
				email: "ABCDEF@ABCDEF.com",
				role: "backend"
			},
			{
				name: "Fifi",
				email: "fifi@fifi.com",
				role: "backend"
			}
		]);
	}, []);

	return (
		<div className="App">
			<h1>Members:</h1>
			<Form setMembers={setMembers} members={members} />
			<hr />
			<div class="members">
				{members.map(member => {
					return (
						<p>
							{member.name} - {member.email} - {member.role} -
						</p>
					);
				})}
			</div>
		</div>
	);
}

export default App;
