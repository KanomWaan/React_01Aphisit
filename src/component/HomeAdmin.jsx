import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';
import Home from './Home';
import FormEx from "./FormEx";

function HomeAdmin() {
  const [members, setMembers] = useState([]);
  const [reload,setReload] = useState();

  // สร้าง useEffect เพื่อใช้แสดงผลในตอนเปลี่ยน page 
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };

    getData();
  }, [reload]);
 
  // function ลบข้อมูลโดยระบุ ID 
  const DeleteHandler = async (id) => {
    const response = await axios.delete(
        `https://jsd5-mock-backend.onrender.com/member/${id}`
      );

      if (response.status === 200) {
        setReload(!reload);
      }
}
  // function สร้างข้อมูลโดยรับค่า (name, lastname, position) มาสร้าง
  const createData = async (name, lastname, position) => {
    const requestData = {
      name: name,
      lastname: lastname,
      position: position,
    };

    const response = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      requestData
    );

    if (response.status === 200) {
      setReload(!reload);
    }
  };

  return (
    <div>
      <Home />
      <div className="home-admin">
        <h1>Create User Here</h1>
        <div>
          {/* ส่ง props createData เข้าไปในแบ form */}
          <FormEx createHandler={createData}/>
        </div>
        <div>
          <h2>Members List</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  <td>{member.lastname}</td>
                  <td>{member.position}</td>
                  <td>
                    {/* กดคลิกเพื่อใช้ลบ User  */}
                    <button onClick={() => DeleteHandler(member.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
