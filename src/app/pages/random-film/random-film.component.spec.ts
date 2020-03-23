import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomFilmComponent } from './random-film.component';

describe('RandomFilmComponent', () => {
  let component: RandomFilmComponent;
  let fixture: ComponentFixture<RandomFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
