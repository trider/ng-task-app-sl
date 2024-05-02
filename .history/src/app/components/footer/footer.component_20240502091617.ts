import { Component } from '@angular/core';
import { GlobalVariables } from 'src/app/common/global-variables';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  currentYear!: number;
  appVersion:string = GlobalVariables.appVersion;
  constructor() {
    this.currentYear = Date.now();
  }

}
