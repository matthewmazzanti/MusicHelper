import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarNoteComponent } from './guitar-note.component';

describe('GuitarNoteComponent', () => {
  let component: GuitarNoteComponent;
  let fixture: ComponentFixture<GuitarNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
