import React from 'react'
import moment from 'moment'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'

const FeaturedPostCard = ({post}) => {
  return (
        <Link href={`/post/${post.slug}`}>
            <div className='relative h-72 cursor-pointer'>
                <div 
                className='cursor-pointer absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-lg inline-block w-full h-72 -z-50' 
                style={{backgroundImage: `url(${post.featuredImage.url})`}}>
                    <div className='absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-300 via-gray-600 to-black w-full h-72 -z-10'></div>
                    <div className='flex flex-col rounded-lg p-4 items-center justify-center absolute w-full'></div>
                    <p className='text-white mb-4 text-shadow font-semibold text-xs text-center mt-4 z-100'>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
                    <p className='text-white mb-4 text-shadow font-semibold text-2xl text-center'>{post.title}</p>
                    <div className='flex items-center rounded-full absolute bottom-5 w-full justify-center'>
                        <Image unoptimized alt={post.author.name} height={30} width={30} className="align-middle drop-shadow-lg rounded-full" src={post.author.photo.url} />
                        <p className='inline align-middle text-white text-shadow ml-2 font-medium'>{post.author.name}</p>
                    </div>
                </div>
            </div>
        </Link>
  )
}

export default FeaturedPostCard
