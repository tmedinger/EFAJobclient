
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerTableComponent } from './employer-table.component';

describe('EmployerTableComponent', () => {
  let component: EmployerTableComponent;
  let fixture: ComponentFixture<EmployerTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
