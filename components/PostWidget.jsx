import React, { useState, useEffect } from 'react';
import { getRecentPosts, getSimilarPosts } from '../services';
import moment from 'moment';
import Link from 'next/link'

function PostWidget({categories	, slug}) {
	console.log(categories);
	const [relatedPosts, setRelatedPosts] = useState([]) 
	useEffect(() => {
		if(slug) {
			getSimilarPosts(categories, slug)
			.then(res => setRelatedPosts(res))
		} else {
			getRecentPosts()
			.then((res) => {setRelatedPosts(res)})
		}
		//eslint-disable-next-line
	}, [slug])

	console.log(relatedPosts);


	return (
		<div className='bg-white shadow-lg p-8 mb-8 rounded-lg'>
			<h3 className='text-xl mb-8 font-semibold border-b pb-4'>
				{slug ? 'Related Posts' : 'Recent Posts'}
			</h3>
			{relatedPosts.map(item => {
				return(
					<div key={item.title} className='flex items-center w-full mb-4 '>
						<div className='w-16 flex-none'>
							<img src={item.featuredImage.url} alt={item.title} className="rounded-full object-cover h-10" />
						</div>
						<div className='flex-grow ml-4 border-b text-indigo-800 hover:text-indigo-500 cursor-pointer'>
						 	<p className='text-gray-500 font-xs'>
								 {moment(item.createdAt).format('MMM, DD, YYYY')}
							 </p>
							 <Link href={`/post/${item.slug}`}>
									<span className='text-lg'>{item.title}</span>
							 </Link>
						</div>
					</div>
				)
			})}
		</div>
	);
}

export default PostWidget;