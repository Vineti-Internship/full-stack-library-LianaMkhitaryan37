import React from "react";
const authors = {
    fetched : false,
    data :null
};
export const AuthorContext =  React.createContext({
    authors
});
export const BookContext =  React.createContext({
    books : authors 
});