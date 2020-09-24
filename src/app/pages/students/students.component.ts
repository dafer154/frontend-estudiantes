import { Component, OnInit, ViewChild } from '@angular/core';
import {StudentService} from '../../student.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

let ELEMENT_DATA: Student[] = [];

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

  animal: string;
  name: string;

  constructor(public studentService: StudentService, public dialog: MatDialog) { }

  displayedColumns: string[] = ['firstname', 'lastname', 'grade', 'license', 'age', 'sex', 'actions'];
  dataSource : any

  openDialog(): void {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    console.log("ABRIIII")

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

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
      ELEMENT_DATA = [];
      students.forEach(student => {
        ELEMENT_DATA.push({ id: student._id,
                            firstName: student.firstName, 
                            lastName: student.lastName, 
                            grade:student.grade, 
                            license:student.license, 
                            age:student.age,
                            sex: student.sex})
      });

      console.log("OEE", ELEMENT_DATA);

      this.dataSource = ELEMENT_DATA;
    })
  }

  deleteStudent(id: string){
    this.studentService.deleteStudent(id).subscribe(res=>{
      console.log("TEST", res);
      this.getAllStudents();
    })
  }

  editStudent(id:string){
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '250px',
      data: {"id": id}
    });

    console.log("ABRIIII")

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
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
