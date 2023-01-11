import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';

export default function MarkDownReader(props){



  return(
    <article className="prose lg:prose-xl w-5/6 overflow-x-hidden overflow-y-auto  space-y-6 p-4	 ">
    
   <ReactMarkdown>

 {props.content}
 </ReactMarkdown>
    </article>
    
  )
}