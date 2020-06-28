import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Resources4Page } from './resources4.page';

describe('Resources4Page', () => {
  let component: Resources4Page;
  let fixture: ComponentFixture<Resources4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resources4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Resources4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
