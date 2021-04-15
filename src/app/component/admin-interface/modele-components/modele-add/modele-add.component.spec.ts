import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleAddComponent } from './modele-add.component';

describe('ModeleAddComponent', () => {
  let component: ModeleAddComponent;
  let fixture: ComponentFixture<ModeleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
