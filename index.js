import React, { memo, Suspense } from 'react';
import { Skeleton } from 'antd';

const browser = typeof process.browser !== 'undefined' ? process.browser : true;

export default ({ id, ...defaultProps }) => {
	return {
		...defaultProps,
		disableFilters: true,
		Cell: props =>
			browser ? (
				<Suspense fallback={<Skeleton active={true} paragraph={null} />}>
					<Cell {...props} />
				</Suspense>
			) : null
	};
};

const Cell = memo(({ value }) => {
	if (value !== '' || value !== 'undefined' || typeof value === 'undefined') return null;

	try {
		value = JSON.parse(value);
		return (
			<a href={value.url} target="_blank">
				{value.address}
			</a>
		);
	} catch (error) {
		return null;
	}
});
