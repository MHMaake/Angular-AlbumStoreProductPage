import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescriptionngComponent } from './product-descriptionng.component';

describe('ProductDescriptionngComponent', () => {
  let component: ProductDescriptionngComponent;
  let fixture: ComponentFixture<ProductDescriptionngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDescriptionngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDescriptionngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
