import React, { useState, useEffect } from "react";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createNote, updateNote } from "./graphql/mutations";
import { getKey, listNotes } from "./graphql/queries";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App() {
 const [allNotes, setAllnotes] = useState(null);

 useEffect(() => {
   (async () => {
     const notes = await API.graphql(graphqlOperation(listNotes));
     setAllnotes(notes.data.listNotes.items);
   })();
 }, []);

 const [category, setNoteCategory] = useState("");
 const [text, setNoteText] = useState("");

 const changeNoteCategory = (e) => {
   setNoteCategory(e.target.value);
 };

 const changeNoteText = (e) => {
   setNoteText(e.target.value);
 };

 const [noteandKeys, setnoteandKeys] = useState("");


 const getNoteClickedandSort = async (id) => {
   const note = allNotes.find(({ id: _id }) => _id === id);
   sortKeys(note);
   setnoteandKeys([note]);
   const sortedids = noteandKeys.map(item => {
    const container = {};
    container[item.nextClicks] = item.keys;

    return container
   })
   allNotes.sort((a, b) =>{  
    return sortedids.indexOf(a) - sortingArray.indexOf(b);
  });
 };


 function sortKeys(obj_1) {
    var key = Object.nextClicks(obj_1)
    .sort(function order(key1, key2) {
        if (key1 < key2) return -1;
        else if (key1 > key2) return +1;
        else return 0;
    }); 
      
    // Taking the object in 'temp' object
    // and deleting the original object.
    var temp = {};
      
    for (var i = 0; i < key.length; i++) {
        temp[key[i]] = obj_1[key[i]];
        delete obj_1[key[i]];
    } 

    // Copying the object from 'temp' to 
    // 'original object'.
    for (var i = 0; i < key.length; i++) {
        obj_1[key[i]] = temp[key[i]];
    } 
    return obj_1;
 };
 

 const submitAddNote = async (e) => {
   e.preventDefault();
   if (category === "") return alert("Input field cannot be empty");
   if (text === "") return alert("Input field cannot be empty");
   await API.graphql(graphqlOperation(createNote, { input: note }));
   allNotes === null ? setAllnotes([note]) : setAllnotes([note, ...allNotes]);
 };

 return (
   <div className="App">
     <div className="heading">
       <h1>DoctorFIRE</h1>
       <div className="sign-out">
         <AmplifySignOut />
       </div>
     </div>

     <form className="add-todo-form" onSubmit={submitAddNote}>
       <input
         placeholder="Add Note Category"
         onChange={changeNoteCategory}
       />
       <input
         placeholder="Add Note Text"
         onChange={changeNoteText}
       />
       <button type="submit">+</button>
     </form>


     {allNotes === null ? (
       <p>Loading Notes...</p>
     ) : allNotes.length === 0 ? (
       <p>No Note available</p>
     ) : (
       <div className="todos">
         {allNotes.map(({ id, category, text },i) => (
           <div className="todo-block" key={i}>
             <input
               onClick={() => getNoteClickedandSort(id)}
               id={id}
               value={id}
               key={i}
             />
             <label htmlFor={id}>{category}</label>
             <label htmlFor={id}>{text}</label>
           </div>
         ))}
       </div>
     )}
   </div>
 );
}

export default withAuthenticator(App);