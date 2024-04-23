import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChampsComponent } from './card-champs.component';

describe('CardChampsComponent', () => {
  let component: CardChampsComponent;
  let fixture: ComponentFixture<CardChampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardChampsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardChampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
