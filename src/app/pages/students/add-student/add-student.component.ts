import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StudentService} from '../../../student.service';
import { DataSource } from '@angular/cdk/table';

export interface DialogData {
  firstName: string;
  lastName: string;
  grade: string;
  license: string;
  age: string;
  sex: string;
  id: string;
}



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public registerForm: FormGroup;

  id: any;

  constructor(public dialogRef: MatDialogRef<AddStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder, public studentService: StudentService) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      grade: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      license: [null, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      age: [null, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      sex: [null, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
    });

    console.log("DATA", this.data)

    if(this.data.id){
      this.getStudentById();
    }
  }

  createStudent(){
    // this.studentService.addStudent().subscribe(res=>{

    // })
  }

  editStudent(){
    this.studentService.editStudent(this.data.id, this.registerForm.value).subscribe(res=>{
      console.log("SUCCES");
    })
  }

  getStudentById(){
    if(this.data.id){
      this.studentService.getStudentById(this.data.id).subscribe(res=>{
        const student = res.body;
        this.registerForm.setValue({
          firstName: student.firstName, 
          lastName: student.lastName,
          grade: student.grade,
          license: student.license,
          age: student.age,
          sex: student.sex
        });
      })
    }
    setTimeout(() => {
      console.log("FORM", this.registerForm.value)
    }, 100);
    
  }

}
