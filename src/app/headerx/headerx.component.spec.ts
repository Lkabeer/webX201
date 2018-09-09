import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderxComponent } from './headerx.component';

describe('HeaderxComponent', () => {
  let component: HeaderxComponent;
  let fixture: ComponentFixture<HeaderxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
