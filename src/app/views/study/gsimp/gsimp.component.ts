import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gsimp',
  templateUrl: './gsimp.component.html',
  styleUrls: ['./gsimp.component.css']
})
export class GsimpComponent implements OnInit {

  constructor() {
    const about = document.getElementById('homeLayout');
    about?.classList.add('displayopt');
  }

  ngOnInit(): void {
  }

}
