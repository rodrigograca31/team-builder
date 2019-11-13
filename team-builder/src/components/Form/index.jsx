import React, { useState } from "react";

interface Props {}

const Form = (props: Props) => {
	const [member, setMember] = useState({
		name: "",
		email: "",
		role: "frontend"
	});

	const addNewMember = e => {
		console.log("submited");
		e.preventDefault();
		e.persist();

		if (/[^@]+@[^\.]+\..+/.test(member.email)) {
			props.setMembers([...props.members, member]);
		}
	};

	const memberFormChange = e => {
		setMember({
			...member,
			[e.target.name]: e.target.value
		});
		e.persist();
		console.log(e);
		console.log(e.target);
		console.log(e.target.value);
	};

	return (
		<form onSubmit={addNewMember}>
			<label htmlFor="name">Name: </label>
			<input
				type="text"
				name="name"
				onChange={memberFormChange}
				value={member.name}
			/>
			<br />
			<label htmlFor="email">Email: </label>
			<input
				type="email"
				name="email"
				onChange={memberFormChange}
				value={member.email}
			/>
			<br />
			<label htmlFor="role">Role: </label>

			<select name="role" onChange={memberFormChange} value={member.role}>
				<option value="backend">backend engineer</option>
				<option value="frontend">frontend engineer</option>
				<option value="designer">designer</option>
			</select>
			<br />
			<br />
			<input type="submit" value="Add" />
		</form>
	);
};

export default Form;
