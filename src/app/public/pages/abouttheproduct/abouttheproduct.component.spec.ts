import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouttheproductComponent } from './abouttheproduct.component';

describe('AbouttheproductComponent', () => {
  let component: AbouttheproductComponent;
  let fixture: ComponentFixture<AbouttheproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbouttheproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouttheproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
