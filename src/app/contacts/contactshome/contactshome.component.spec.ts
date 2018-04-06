import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactshomeComponent } from './contactshome.component';

describe('ContactshomeComponent', () => {
  let component: ContactshomeComponent;
  let fixture: ComponentFixture<ContactshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
