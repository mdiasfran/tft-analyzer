import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompsComponent } from './card-comps.component';

describe('CardCompsComponent', () => {
  let component: CardCompsComponent;
  let fixture: ComponentFixture<CardCompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCompsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
