import React from 'react' 
import { useRouter } from 'next/router';

import { Categories, Loader, PostCard, PostWidget } from '../../components';
import { getCategories, getCategoryPosts } from '../../services'

const Category = ( { posts } ) => { 
  const router = useRouter()

  if(router.isFallback){
    return <Loader />
  }


  console.log(posts);
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        
        <div className='lg:col-span-4 col-span-1 '>
          <div className='lg:sticky relative top-8'>
          <Categories />
          <PostWidget />  
          </div>
        </div> 

        <div className='lg:col-span-8 col-span-1 '>
            {posts.map((item, index) => {
              return(
                <PostCard key={index} {...item.node}  />
              )
            })}  
        </div> 

      </div> 
    </div>
  )
}

export default Category


export async function getStaticProps({ params }) {
  const posts = await getCategoryPosts(params.slug)

  return {
    props: { posts }
  }
}


export async function getStaticPaths(){
  const categories = await getCategories()
  return{
    paths: categories.map(({slug}) => ({params: { slug }})),
    fallback: true
  }
}