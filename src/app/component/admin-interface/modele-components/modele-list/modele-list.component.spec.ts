import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleListComponent } from './modele-list.component';

describe('ModeleListComponent', () => {
  let component: ModeleListComponent;
  let fixture: ComponentFixture<ModeleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
