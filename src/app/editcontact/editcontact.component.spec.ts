import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcontactComponent } from './editcontact.component';

describe('EditcontactComponent', () => {
  let component: EditcontactComponent;
  let fixture: ComponentFixture<EditcontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditcontactComponent]
    });
    fixture = TestBed.createComponent(EditcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});