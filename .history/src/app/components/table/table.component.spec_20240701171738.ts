import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ServicesModule } from '@app/services/services.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TableComponent } from './table.component';


describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ServicesModule],
      imports:[TableComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
