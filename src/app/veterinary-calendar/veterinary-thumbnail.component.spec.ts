import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryThumbnail } from './veterinary-thumbnail.component';

describe('VeterinaryThumbnailComponent', () => {
  let component: VeterinaryThumbnail;
  let fixture: ComponentFixture<VeterinaryThumbnail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinaryThumbnail ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinaryThumbnail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
