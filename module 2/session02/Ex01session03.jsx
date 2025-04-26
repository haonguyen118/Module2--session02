import React from 'react'
import StudentList from './StudentList'
import AddStudent from './AddStudent'

export default function Ex01() {
  return (
    <div>
        <div className="row">
  <div className="col-lg-7 grid-margin stretch-card">
   <StudentList></StudentList>
  </div>
  {/* START FORM SINH VIEN */}
 <AddStudent></AddStudent>
  {/* END FORM SINH VIÊN */}
</div>

    </div>
  )
}
