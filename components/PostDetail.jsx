import React from 'react'
import moment from 'moment'
import parse from 'html-react-parser';

const PostDetail = ({ post }) => {
  console.log(post.content.raw)
  return (
    <div className='bg-white shadow-lg p-8 rounded-lg mb-8  lg:p-8 pb-12 mb-12'>
      {/*  eslint-disable  */}
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img src={post.featuredImage.url} alt={post.title} className="object-center h-full w-full rounded-t-lg" />
      </div>
      <div className='px-4 lg:px-0'>
        <div className="flex items-center w-full mb-8">
        <div className=" flex items-center mb-4 lg:mb-0  lg:w-auto mr-8">
					{/* eslint-disable-next-line */}
					<img src={post.author.photo.url} alt={post.author.name} className="rounded-full align-middle" width="30px" height="30px"/>
					<p className="align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
				</div>
				<div className="  flex items-center justify-center mb-4 lg:mb-0  lg:w-50 mr-8">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					<p>{moment(post.createdAt).format('MMM, DD, YYYY')}</p>
				</div>
        </div>

        <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>

        <div className="content-box">
        {parse(post.content.html)}
        </div>

      </div>
    </div>
  )
}


export default PostDetail   