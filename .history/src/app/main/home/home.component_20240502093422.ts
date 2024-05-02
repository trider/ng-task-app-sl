import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { Tasks } from '@app/common/data/tasks';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgbNavModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  tasks:any = Tasks;
  showNav: boolean = false;
  tableCols: any = [
    'name',
    'description',
    'added',
    'updated',
    'status',
  ];
  currentYear!: number;
  user:any = JSON.parse(sessionStorage.getItem('user') as string);

  constructor() { }
  ngOnInit(): void {
      
  }


}
