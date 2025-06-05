import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaClientesComponent } from './tela-clientes.component';

describe('TelaClientesComponent', () => {
  let component: TelaClientesComponent;
  let fixture: ComponentFixture<TelaClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
