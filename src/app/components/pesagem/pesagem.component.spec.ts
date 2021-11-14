import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesagemComponent } from './pesagem.component';

describe('PesagemComponent', () => {
  let component: PesagemComponent;
  let fixture: ComponentFixture<PesagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
