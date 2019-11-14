import React from 'react';

export default ({ id, style = {}, ...defaultProps }) => {
	return {
		...defaultProps,
		filterable: false,
		style: { ...style, display: 'flex', alignItems: 'center', justifyContent: 'center' },
		Cell: ({ value }) => {
			if (typeof value == 'undefined') return null;

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
