import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBodyComponent } from './gallery-body.component';

describe('GalleryBodyComponent', () => {
  let component: GalleryBodyComponent;
  let fixture: ComponentFixture<GalleryBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryBodyComponent]
    });
    fixture = TestBed.createComponent(GalleryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
