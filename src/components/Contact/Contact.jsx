import React from "react";
import PropTypes from 'prop-types';
import * as yup from 'yup'
import { Formik } from "formik";
import { nanoid } from "nanoid";
import { BsPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import {IoMdPersonAdd} from 'react-icons/io'
import {Form, FormField, FieldFormik, ErrorMessage, FormButton, LabelForm } from './Contact.styled'

const schema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.matches(
			/^[A-Za-z\u0080-\uFFFF ']+$/,
			'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan')
		.required(),
	number: yup
		.string()
		.trim()
		.matches(
			/^(\+?[0-9.\(\)\-\s]*)$/,
			'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
		)
		.required(),
});

export const ContactForm = ({ onAddContact }) => {
	return (
		<Formik
			initialValues={{
				name: '',
				number: '',
			}}
			onSubmit={(values, { resetForm }) => {
				onAddContact({ id: nanoid(), ...values });
				resetForm();
			}}
			validationSchema={schema}
		>
			<Form autoComplete="off">
				<FormField htmlFor="name">
					<LabelForm>
						< BsPersonFill />
						Name
					</LabelForm>
					<FieldFormik
						type="text"
						name="name"
						pattern= "^[A-Za-z\u0080-\uFFFF ']+$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
					<ErrorMessage name="name" component="span" />
				</FormField>
				<FormField htmlFor="number">
					<LabelForm>
						< BsFillTelephoneFill />
						Number
					</LabelForm>
					<FieldFormik
						type="tel"
						name="number"
						pattern= "^(\+?[0-9.\(\)\-\s]*)$"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
					<ErrorMessage name="number" component="span" />
				</FormField>
				<FormButton type="sumbmit">
					<IoMdPersonAdd size="16" />
					Add contact
				</FormButton>
			</Form>
		</Formik>
	);
};

ContactForm.propType = {
	onSubmit: PropTypes.func.isRequired,
};