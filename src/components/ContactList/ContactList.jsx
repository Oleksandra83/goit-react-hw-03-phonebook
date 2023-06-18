import React from "react";
import PropTypes from 'prop-types';
import { IoPersonRemove } from 'react-icons/io5'
import { List, ContactItem, ContactDelete, Item } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
	return (
		<List>
			{contacts.map(({ name, number, id }) => {
				return (
					<ContactItem key={id}>
						<Item>{name}:</Item>
						<Item>{number}</Item>

						<ContactDelete type="button" onClick={() => onDelete(id)}>
							< IoPersonRemove size="16" />
							Delete
						</ContactDelete>
					</ContactItem>
				);
			})}
		</List>
	);
};

ContactList.propType = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		}).isRequired
	),
	onDelete:PropTypes.func.isRequired,
};