import styled from "styled-components";

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 8px 16px;
	width: 300px;
`;

export const ContactItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	color: #063a36;
	text-shadow: 2px 2px 5px white;
	font-size: 14px;
`;

export const Item = styled.p`
	color: #063a36;
	font-style: italic;
	font-size: 16px;
`;

export const ContactDelete = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	padding: 4px 8px;
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