import React from 'react'
import ReactMarkdown from 'react-markdown';

export default function MarkDownReader(props){



  return(
    <article className="max-w-none w-5/6 prose lg:prose-base overflow-x-hidden overflow-y-auto   dark:prose-invert prose-ul:list-inside prose-ol:list-inside  ">
    
   <ReactMarkdown>

 {props.content}
 </ReactMarkdown>
    </article>
    
  )
}