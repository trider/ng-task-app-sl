import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from '../../../common/global-variables';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appVersion: string = GlobalVariables.appVersion
  currentYear!: number;
  constructor () { }

  ngOnInit(): void {
    
    this.currentYear = Date.now();
  }

}
