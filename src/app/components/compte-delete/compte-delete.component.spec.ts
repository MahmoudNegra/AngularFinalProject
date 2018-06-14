import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteDeleteComponent } from './compte-delete.component';

describe('CompteDeleteComponent', () => {
  let component: CompteDeleteComponent;
  let fixture: ComponentFixture<CompteDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
