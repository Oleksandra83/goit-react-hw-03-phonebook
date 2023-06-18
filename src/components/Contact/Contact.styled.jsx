import styled from "styled-components";
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	margin-bottom: 16px;
	padding: 8px;
	width: 360px;
`;

export const FormField = styled.label`
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 360px;
	text-shadow: 2px 2px 5px white;
	color: #063a36;
`;

export const LabelForm = styled.div`
	display: flex;
	gap: 8px;
	margin-left: 8px;
`;

export const FieldFormik = styled(Field)`
	padding: 8px 16px;
	border: 0;
	outline: 0;
	border-radius: 8px;
	color: #063a36;
	background-color: #effaf3;
	text-shadow: 2px 2px 5px white;
	font-size: 14px;
	box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;
`;

export const ErrorMessage = styled(FormikError)`
	max-width: 360px;
	font-style: italic;
	color: #e30303;
`;

export const FormButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	padding: 8px 16px;
	border: none;
	outline: none;
	border-radius: 8px;
	box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
	transition: all 0.2s ease-in-out;
	background-color: #77ab8a;
	color: #fff;
	cursor: pointer;

	:hover,
	:focus {
		background-color: #b1dfc1;
		color: #063a36;

		svg {
			fill: #063a36;
			stroke: #063a36; 
		}
		:active {
			color: #063a36;
			box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
			svg {
				fill: #063a36;
				stroke: #063a36; 
			}
		}
	}
`;