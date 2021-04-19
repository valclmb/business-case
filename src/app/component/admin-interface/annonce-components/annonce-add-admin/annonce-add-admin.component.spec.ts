import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceAddAdminComponent } from './annonce-add-admin.component';

describe('AnnonceAddAdminComponent', () => {
  let component: AnnonceAddAdminComponent;
  let fixture: ComponentFixture<AnnonceAddAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceAddAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceAddAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
