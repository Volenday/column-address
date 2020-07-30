import React from 'react';

export default ({ id, ...defaultProps }) => {
	return {
		...defaultProps,
		disableFilters: true,
		Cell: ({ value }) => {
			if (typeof value === 'undefined') return null;

			if (value !== '' && value !== 'undefined' && typeof value !== 'undefined') {
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
