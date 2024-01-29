import React from "react";
import { Button } from "../ul/button/Button";
import scss from './Card.module.scss';
const url = `https://crudcrud.com/api/f3ff88e4d1154d92ba5a8b36cb03205d/users`;
export const Card = ({ fetchz, setFetchz, onFunk }) => {
	const deleteUsers = async (id) => {
		try {
			await fetch(`${url}/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});
			onFunk();
		} catch (e) {
			console.error(e);
		}
	};
	const putUsers = async (id, value1) => {
		try {
			await fetch(`${url}/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					value1: value1,
				}),
			});
			onFunk();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className={scss.cards}>
			{fetchz.map((el) => (
				<div className={scss.card} key={el.id}>
					<p>{el.value1}</p>
					<Button onClick={() => deleteUsers(el._id)}>DELETE</Button>
					<Button onClick={() => putUsers(el._id, el.value1)}>PUT</Button>
				</div>
			))}
		</div>
	);
};
