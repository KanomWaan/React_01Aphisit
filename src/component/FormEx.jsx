import { useState } from "react";
import'../App.css'

const FormEx = ({ createHandler }) => {
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [position, setposition] = useState("");
  
    return (
      <div className="input">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={position}
          onChange={(e) => setposition(e.target.value)}
        />
        <button onClick={() => createHandler(name, lastname, position )}>
        Add Employee
        </button>
    
      </div>
    );
  };
  
  export default FormEx;