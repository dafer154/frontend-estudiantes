import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../student.service';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from './add-student/add-student.component';


export interface Student {
  firstName: string;
  lastName: string;
  grade: string;
  license: string;
  age: string;
  sex: string;
  id: string;
}

let ELEMENT_DATA: Student[] = [];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {


  constructor(public studentService: StudentService, public dialog: MatDialog) { }

  displayedColumns: string[] = ['firstname', 'lastname', 'grade', 'license', 'age', 'sex', 'actions'];
  dataSource: any
  id: any

  openDialog(): void {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '250px',
      data: { id: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllStudents();
    });
  }

  ngOnInit(): void {
    this.getAllStudents();
  }


  getAllStudents() {
    this.studentService.getAllStudents().subscribe(res => {
      const students = res.body;
      ELEMENT_DATA = [];
      students.forEach(student => {
        ELEMENT_DATA.push({
          id: student._id,
          firstName: student.firstName,
          lastName: student.lastName,
          grade: student.grade,
          license: student.license,
          age: student.age,
          sex: student.sex
        })
      });
      this.dataSource = ELEMENT_DATA;
    })
  }

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe(res => {
      this.getAllStudents();
    })
  }

  editStudent(id: string) {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '250px',
      data: { "id": id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllStudents();
    });
  }

}
