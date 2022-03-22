import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'

export default function Comments({ slug }) {
  const [comments, setComments] = useState([])
  console.log(comments);
  useEffect(() => {
    getComments(slug)
    .then(res => setComments(res))

    // eslint-disable-next-line
  }, [slug])

  return (
    <>
      {comments && comments.length > 0 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {comments.length}
            {"  "}
            Comments
          </h3>

          {comments.map((item, index) => {
            return(
              <div className='border-b border-gray-100 mb-4 pb-4' key={index}>
              <p className='mb-4'>
                <span className='font-semibold'>{item.name}</span>
                {"  "}
                on
                {"  "}
                <b>{moment(item.createdAt).format("MMM DD, YYYY")}</b>
              </p>

              <p className='whitespace-pre-line text-gray-600 w-full'>
                {parse(item.comment)}
              </p>
            </div>
            )

          })}
        </div>
      )}
    </>
  )
} 