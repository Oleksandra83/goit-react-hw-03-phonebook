import React from "react";
import PropTypes from 'prop-types';
import {Header} from 'components/Header/Header'
import { SectionWrap} from "./Section.styled";

export const Section = ({ title, children }) => {
	return (
		<SectionWrap>
			<Header title={title} />
			{children}
		</SectionWrap>
	);
};

Section.propType = {
	title: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
};