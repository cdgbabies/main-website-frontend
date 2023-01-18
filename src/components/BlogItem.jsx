import React from 'react';

const BlogItem =({data})=>{
return  < >
{data.map(blog=>{
    
  return <div key={blog.sk} className="p-4 max-w-full ">
  <div className="h-full bg-gray-200 dark:bg-slate-700 bg-opacity-75 px-8 pt-8 pb-12 rounded-lg overflow-hidden text-left relative">
    
    <h1 className="title-font sm:text-2xl text-xl font-medium  mb-3">{blog.title}</h1>
    <p className="leading-relaxed mb-3">{blog.description}</p>
    <a className="text-indigo-500 dark:text-indigo-100 inline-flex items-center" href={`/posts/${blog.sk.substring(0,blog.sk.indexOf("."))}`}>Learn More
      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"  >
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </a>
  
  </div>
</div>

})}
 </>
}

export default BlogItem;