import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/pages/home/home.component';
import {StudentsComponent} from '../app/pages/students/students.component';

const app_routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'students', component: StudentsComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}