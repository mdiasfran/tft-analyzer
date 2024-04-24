import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCompsComponent } from './explore-comps.component';

describe('ExploreCompsComponent', () => {
  let component: ExploreCompsComponent;
  let fixture: ComponentFixture<ExploreCompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreCompsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
