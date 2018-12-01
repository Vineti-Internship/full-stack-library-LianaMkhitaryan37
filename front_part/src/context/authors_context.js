import React from "react";
const authors = {
    fetched : false,
    data :null
};
export const AuthorContext =  React.createContext({
    authors,
    deleteFromContext : (i) =>{
        // authors.data.splice(i);
    },
    updateData: (i,n) =>{}
});