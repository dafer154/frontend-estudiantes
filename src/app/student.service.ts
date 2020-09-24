import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { }

BASE_URL = "http://localhost:4000"


addStudent(student: any):Observable<any>{
  return this._http.post(`${this.BASE_URL}/students/`, student)
  .pipe(
    map(
      res =>{
        return res;
      }, err=>{
        return err
      }
    )
  )
}

getAllStudents(): Observable<any>{
  return this._http.get(`${this.BASE_URL}/students/`)
    .pipe(
      map(res =>{
        return res
      }, err=>{
        return err
      })
    )
}

getStudentById(id:string):Observable<any>{
  return this._http.get(`${this.BASE_URL}/students/${id}`)
    .pipe(
      map(res=>{
        return res
      }, err =>{
        return err
      })
    )
}

editStudent(id:string, student: any): Observable<any>{
  return this._http.put(`${this.BASE_URL}/students/edit/${id}`, student)
    .pipe(
      map(res=>{
        return res
      }, err=>{
        return err
      })
    )
}

deleteStudent(id:string): Observable<any>{
  return this._http.delete(`${this.BASE_URL}/students/${id}`)
    .pipe(
      map(
        res=>{
          return res
        }, err=>{
          return err
        }
      )
    )
}



}
