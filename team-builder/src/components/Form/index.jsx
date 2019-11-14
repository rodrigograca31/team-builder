import React, { useState, useEffect } from "react";
import { element } from "prop-types";
import { Button, FormGroup, Label, Input } from "reactstrap";
import memberObject from "../../memberObject";

interface Props {}

const Form = (props: Props) => {
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
			if (/^[a-zA-Z]+$/.test(member.name)) {
				if (/[^@]+@[^\.]+\..+/.test(member.email)) {
					props.setMembers([...props.members, member]);
					setMember(new memberObject());
					console.log(e);
					// e.target.name.value = "";
					// e.target.email.value = "";
					// e.target.name.value = "";

					// console.log(e.target[0]);
					// console.log(e.target[1]);
				} else {
					alert("Invalid email");
				}
			} else {
				alert("Invalid name. No numbers!");
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
			<FormGroup>
				{/* {JSON.stringify(props.editThisOne)} */}
				<Label htmlFor="name">Name: </Label>
				<Input
					type="text"
					name="name"
					onChange={memberFormChange}
					value={member.name}
					required
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="email">Email: </Label>
				<Input
					type="email"
					name="email"
					onChange={memberFormChange}
					value={member.email}
					required
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor="role">Role: </Label>

				<Input
					type="select"
					name="role"
					onChange={memberFormChange}
					value={member.role}
				>
					<option value="backend">backend engineer</option>
					<option value="frontend">frontend engineer</option>
					<option value="designer">designer</option>
				</Input>
			</FormGroup>
			{JSON.stringify(props.editThisOne) === "{}" && (
				<Button type="submit" value="Add" color="success">
					Add Member
				</Button>
			)}
			{JSON.stringify(props.editThisOne) !== "{}" && (
				<Button type="submit" value="Save" color="success">
					Save Member
				</Button>
			)}
		</form>
	);
};

export default Form;
