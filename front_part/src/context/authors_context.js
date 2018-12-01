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
<<<<<<< HEAD
    updateData: (i,n) =>{}
=======
    updateData: () =>{}
>>>>>>> 33a4d6c88e14d5b2db39c6023eaa96ab270b78a1
});