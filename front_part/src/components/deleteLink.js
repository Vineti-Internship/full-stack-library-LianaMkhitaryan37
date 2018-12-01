import React from "react"
import { AuthorContext } from "../context/authors_context";
export const Delete = (props) =>{
    const rem = ()=> {
        // console.log("Trying delete ffile ")
        try {
            // window.removeEventListener('click', rem());
            (async () => {
                // console.log(props.id)
            await fetch(`http://localhost:3000/api/v1/authors/${props.id}`, {
                method: 'DELETE'
            });
            // console.log("Petqa vor Delete Arac lini"+props.id)
        //    console.log(props);
            // console.log(context.splice(props.index,1))
            // console.log(context)
            // .splice(props.index)
        })();
        } catch(ex) {
            console.error('ex:', ex);
        }
    }
    return (
        <AuthorContext.Consumer>
         {(context) => (
         <span  onClick={() => {
            //  console.log(props.id)
             context.deleteAction(props.id);
             rem();
            }  }  className="card-link">Delete</span>   
        )}
        </AuthorContext.Consumer> 
    )
}