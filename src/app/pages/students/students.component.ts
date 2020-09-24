import { Component, OnInit, ViewChild } from '@angular/core';
import {StudentService} from '../../student.service';
// import {MatTableDataSource} from '@angular/material/table';

export interface Student {
  firstName: string;
  lastName: string;
  grade: string;
  license: string;
  age: string;
  sex: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

// const ELEMENT_DATA: Student[] = []



export class StudentsComponent implements OnInit {

  // displayedColumns: string[] = ['firstName', 'lastName', 'grade', 'license', 'age', 'sex'];
  // dataSource: MatTableDataSource<Student>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  getAllStudents(){
    this.studentService.getAllStudents().subscribe(res=>{
      const students = res.body;
      console.log("STUDENTS", students)
    })
  }


  
  // students.forEach(student => {
  //   this.dataSource.push(
  //     firstName: student.firstName,
  //     lastName: student.lastName,
  //     grade: student.grade,
  //     license: student.license,
  //     age: student.age,
  //     sex: student.sex
  //   )
  // });
}
