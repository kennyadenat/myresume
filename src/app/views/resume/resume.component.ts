import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() {
    const about = document.getElementById('homeLayout');
    about?.classList.add('displayopt');
  }

  ngOnInit(): void {
  }

}
