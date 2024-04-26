import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appVersion: string = '0.0.1'
  currentYear!: number;
  constructor () { }

  ngOnInit(): void {
    
    this.currentYear = Date.now();
  }

}
