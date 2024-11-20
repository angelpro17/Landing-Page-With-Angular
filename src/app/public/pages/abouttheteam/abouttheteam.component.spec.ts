import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouttheteamComponent } from './abouttheteam.component';

describe('AbouttheteamComponent', () => {
  let component: AbouttheteamComponent;
  let fixture: ComponentFixture<AbouttheteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbouttheteamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouttheteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
