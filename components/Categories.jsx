import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
import Link from 'next/link'



function Categories(props) {
	const [categories, setCategories] = useState()

	useEffect(() => {
		getCategories()
		.then(res => setCategories(res))
	}, [])

	return (
		<div className='bg-white shadow-lg p-8 mb-8 rounded-lg'>
			<h3 className='text-xl mb-8 font-semibold border-b pb-4'>
				Categories
			</h3>
			<div className='my-2'>
				{categories && categories.map(item => {
					return(
						// eslint-disable-next-line
						<Link key={item.slug} href={`/categories/${item.slug}`}>
							<span className='text-xl text-indigo-700 hover:text-indigo-500 cursor-pointer block mb-4'>
								{item.name}
							</span>
						</Link>
					)
				})}
			</div>
		</div>
	);
}

export default Categories;

