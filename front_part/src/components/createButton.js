import React from 'react'
import EditLink from './editLink';
import {AuthorInfo} from './editAuthor';
import { BookInfo } from './book_info';
const CreateButton = ()=>{
  return(
    <EditLink type="Add new Author" >
    <AuthorInfo 
    />
</EditLink> 
  )
}
export const CreateBook  = (props)=>{
  return(
    <EditLink type="+ Book" >
      <BookInfo 
        id={props.id}
      />
    </EditLink> 
  )
}
export default CreateButton