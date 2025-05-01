
import { useState } from "react";
function App() {
  const [newItem, setNewItem]= useState("")
  
  return (
    <>
      
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e=> setNewItem(e.target.value)} type="text" id="item" />
          <button className="btn">Add Item</button>
        </div>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
       <li>
              <label>
                     <input type="checkbox"/>
                     Item1
              </label>
              <button className="btn btn-danger">Delete</button>
       </li>
       <li>
              <label>
                     <input type="checkbox"/>
                     Item1
              </label>
              <button className="btn btn-danger">Delete</button>
       </li>
       <li>
              <label>
                     <input type="checkbox"/>
                     Item1
              </label>
              <button className="btn btn-danger">Delete</button>
       </li>
      </ul>
    </>
  );
}

export default App;
