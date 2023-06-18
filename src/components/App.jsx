import React, { Component } from "react";
import Notiflix from "notiflix";
import { Section } from "./Section/Section";
import { Header } from './Header/Header'
import { ContactForm } from "./Contact/Contact";
import { ContactList } from "./ContactList/ContactList";
import Filter from './Filter/Filter';
import { Container } from './App.styled';

export default class App extends Component {
	state = {
		contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
		filter: '',
	}

	componentDidMount() {
		const contactsFormLocalStorage = localStorage.getItem('contacts');
		const contactsParsed = JSON.parse(contactsFormLocalStorage);
		if (!contactsParsed) return;
		this.setState({ contacts: contactsParsed });
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.contacts !== prevState.contacts) {
			localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
		}
	}

	addContact = newContact => {
		const { contacts } = this.state;
		contacts.some(
			contact =>
				contact.name.toLowerCase().trim() ===
				newContact.name.toLowerCase().trim() ||
				contact.number.trim() === newContact.number.trim()
		)
			? Notiflix.Report.warning('warning', `${newContact.name} is already in contacts.`)
			: this.setState(prevState => ({
					contacts: [newContact, ...prevState.contacts],
			}));
	};

	deleteContact = contactId => {
		this.setState(prevState => {
			return {
				contacts: prevState.contacts.filter(
					contact => contact.id !== contactId
				),
			};
		});
	};

	getVisibleContacts = () => {
		const { contacts, filter } = this.state;
		const normalizeFilter = filter.toLowerCase();
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normalizeFilter));
	};

	changeFilter = e => {
		this.setState({ filter: e.currentTarget.value.toLowerCase() });
	};

	render() {
		const { filter } = this.state;
		const visibleContacts = this.getVisibleContacts();
		return (
		<Container>
			<Section title="Phonebook">
				<ContactForm onAddContact={this.addContact} />
					<Header title="Contacts" />
					<Filter value={filter} onChange={this.changeFilter} />
					<ContactList
						contacts={visibleContacts}
						onDelete={this.deleteContact}
					/>
			</Section>
		</Container>
		);
	}
}

