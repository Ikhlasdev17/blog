import React from 'react';
import Link from 'next/link'
import moment from "moment";

function PostCard(props) {
	return (
		<div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 mb-3 :pb-12">
			<h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-indigo-700 text-3xl font-semibold">
				<Link href={`/post/${props.slug}`}>{props.title}</Link>
			</h1>
			<div className="block lg:flex text-center items-center mb-8 lg:justify-center">
				<div className=" flex items-center justify-center mb-4 lg:mb-0  lg:w-auto mr-8">
					{/* eslint-disable-next-line */}
					<img src={props.author.photo.url} alt={props.author.name} className="rounded-full align-middle" width="30px" height="30px"/>
					<p className="align-middle text-gray-700 ml-2 text-lg">{props.author.name}</p>
				</div>
				<div className="  flex items-center justify-center mb-4 lg:mb-0  lg:w-50 mr-8">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					<p>{moment(props.createdAt).format('MMM, DD, YYYY')}</p>
				</div>
			</div>
			<div className="relative overflow-hidden shadow-md pb-80 mb-6">
				{/* eslint-disable-next-line */}
				<img src={props.featuredImage.url} alt={props.title} className="object-center absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg "/>
			</div>
			<p className={'text-center my-3 text-gray-700 font-normal px-4 lg:px-20 mb-8'}>{props.excerpt}</p>
			<div className='text-center'>
					{/* eslint-disable-next-line */}
				<Link href={`/post/${props.slug}`}>
					<span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-indigo-800 text-lg font-medium rounded-full py-4 px-8 text-white text-lg cursor-pointer">Continue Reading</span>
				</Link>
			</div>
		</div>
	);
}

export default PostCard;