import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantOptionListComponent } from './variant-option-list.component';

describe('VariantOptionListComponent', () => {
  let component: VariantOptionListComponent;
  let fixture: ComponentFixture<VariantOptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariantOptionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariantOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
