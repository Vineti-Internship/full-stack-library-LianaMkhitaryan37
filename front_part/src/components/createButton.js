import React from 'react'
import EditLink from './editLink';
import {AuthorInfo} from './editAuthor';
const CreateButton = ()=>{
  return(
    <EditLink type="Add new Author" >
    <AuthorInfo 
      FullName= "" 
      email=""
      imageUrl=""
      bio=""
      id={null}
      index ={null}
      type="Add new Author"
    />
</EditLink> 
  )
}
export default CreateButton