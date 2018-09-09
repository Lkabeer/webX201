import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterxComponent } from './footerx.component';

describe('FooterxComponent', () => {
  let component: FooterxComponent;
  let fixture: ComponentFixture<FooterxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
