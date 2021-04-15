import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceDetailAdminComponent } from './annonce-detail-admin.component';

describe('AnnonceDetailAdminComponent', () => {
  let component: AnnonceDetailAdminComponent;
  let fixture: ComponentFixture<AnnonceDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceDetailAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
