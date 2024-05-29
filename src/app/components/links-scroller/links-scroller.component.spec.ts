import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksScrollerComponent } from './links-scroller.component';

describe('LinksScrollerComponent', () => {
  let component: LinksScrollerComponent;
  let fixture: ComponentFixture<LinksScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksScrollerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinksScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
