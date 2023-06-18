import React from "react";
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { LabelForm } from "components/Contact/Contact.styled";
import { FilterDescr, Input} from './Filter.styled';

const Filter = ({ value, onChange }) => (
	<FilterDescr>
		<LabelForm>
			<BsSearch size="16" />
			Find contacts by name
		</LabelForm>
		<Input type="text" value={value} onChange={onChange} placeholder="search..." />
	</FilterDescr>
);

export default Filter;

Filter.propType = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};