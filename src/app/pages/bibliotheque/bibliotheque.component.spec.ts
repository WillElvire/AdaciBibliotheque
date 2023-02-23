import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliothequeComponent } from './bibliotheque.component';

describe('BibliothequeComponent', () => {
  let component: BibliothequeComponent;
  let fixture: ComponentFixture<BibliothequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliothequeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
