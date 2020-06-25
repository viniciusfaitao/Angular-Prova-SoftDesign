import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RentedBookComponent } from './rented-book.component';

describe('LivroDescriptionComponent', () => {
  let component: RentedBookComponent;
  let fixture: ComponentFixture<RentedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RentedBookComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
