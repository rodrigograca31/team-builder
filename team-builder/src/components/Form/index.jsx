import React, { useState, useEffect } from "react";
import { element } from "prop-types";

interface Props {}

const Form = (props: Props) => {
	class memberObject {
		constructor() {
			this.id = Math.floor(Math.random() * 1000);
			this.name = "";
			this.email = "";
			this.role = "frontend";
		}
	}

	const [member, setMember] = useState(new memberObject());

	useEffect(() => {
		setMember(props.editThisOne);
	}, [props.editThisOne]);

	const addNewMember = e => {
		console.log("submited");
		e.preventDefault();
		e.persist();

		if (JSON.stringify(props.editThisOne) === "{}") {
			// Adding a new one
			if (/[^@]+@[^\.]+\..+/.test(member.email)) {
				props.setMembers([...props.members, member]);
				setMember(new memberObject());
				console.log(e);
				// e.target.name.value = "";
				// e.target.email.value = "";
				// e.target.name.value = "";

				// console.log(e.target[0]);
				// console.log(e.target[1]);
			}
		} else {
			// Editing an existing one
			console.log(props.editThisOne.id);

			// props.members.forEach((el, index) => {
			// 	if (el.id == props.editThisOne.id) {
			// 		props.members[index] = member;
			// 	}
			// });

			props.setMembers([
				...props.members.map((el, index) => {
					if (el.id == props.editThisOne.id) {
						el = member;
					}
					return el;
				})
			]);
			props.setMemberToEdit({});
			setMember(new memberObject());
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
			{/* {JSON.stringify(props.editThisOne)} */}
			<label htmlFor="name">Name: </label>
			<input
				type="text"
				name="name"
				onChange={memberFormChange}
				value={member.name}
				required
			/>
			<br />
			<label htmlFor="email">Email: </label>
			<input
				type="email"
				name="email"
				onChange={memberFormChange}
				value={member.email}
				required
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
			{JSON.stringify(props.editThisOne) === "{}" && (
				<input type="submit" value="Add" />
			)}
			{JSON.stringify(props.editThisOne) !== "{}" && (
				<input type="submit" value="Save" />
			)}
		</form>
	);
};

export default Form;
