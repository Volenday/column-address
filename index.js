import React, { memo, Suspense } from 'react';
import { Skeleton } from 'antd';

export default ({ id, ...defaultProps }) => {
	return {
		...defaultProps,
		disableFilters: true,
		Cell: props => (
			<Suspense fallback={<Skeleton active={true} paragraph={null} />}>
				<Cell {...props} />
			</Suspense>
		)
	};
};

const Cell = memo(({ value }) => {
	if (typeof value === 'undefined') return null;

	if (value !== '' && value !== 'undefined' && typeof value !== 'undefined') {
		try {
			value = JSON.parse(value);
			return (
				<a href={value.url} target="_blank">
					{value.address}
				</a>
			);
		} catch (error) {}
	}
	return null;
});
