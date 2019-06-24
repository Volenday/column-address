import React from 'react';

export default props => {
	const { headerStyle = {}, id, style = {}, ...defaultProps } = props;

	return {
		...defaultProps,
		filterable: false,
		style: { ...style, display: 'flex', alignItems: 'center', justifyContent: 'center' },
		headerStyle: {
			...headerStyle,
			overflow: editable ? 'visible' : 'hidden',
			display: 'flex',
			alignItems: 'center'
		},
		Cell: ({ value }) => {
			if (value != '' && value != 'undefined' && typeof value != 'undefined') {
				value = JSON.parse(value);
				return (
					<a href={value.url} target="_blank">
						{value.address}
					</a>
				);
			}
			return null;
		}
	};
};
