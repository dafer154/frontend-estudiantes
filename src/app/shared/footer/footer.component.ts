import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  personalLinks = {
    linkedin: 'https://linkedin.com/in/davidfza25',
    github: 'https://github.com/dafer154',
    twitter: 'https://twitter.com/@david_fza'
  };

  anio: number = new Date().getFullYear();

  ngOnInit(): void {
  }

}
