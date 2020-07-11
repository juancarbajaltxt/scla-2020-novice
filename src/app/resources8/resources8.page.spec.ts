import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Resources8Page } from './resources8.page';

describe('Resources8Page', () => {
  let component: Resources8Page;
  let fixture: ComponentFixture<Resources8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resources8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Resources8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
