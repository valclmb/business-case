import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceListAdminComponent } from './annonce-list-admin.component';

describe('AnnonceListAdminComponent', () => {
  let component: AnnonceListAdminComponent;
  let fixture: ComponentFixture<AnnonceListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceListAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
