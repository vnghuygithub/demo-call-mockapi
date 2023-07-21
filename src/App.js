import React, {useEffect, useState} from "react";
import studentApi from "./api/studentApi";

function App() {
const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchStudents = async () => {
      
      const studentsList = await studentApi.getAll();

      // Giới hạn số lượng sinh viên hiển thị bằng phương thức slice
      const limitedStudents = studentsList.slice(0, 5);
      setStudents(limitedStudents);
    }

    fetchStudents();
  }, [])


  return (
    <div className="App">
      <ul>
      {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
