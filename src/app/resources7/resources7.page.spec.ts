import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Resources7Page } from './resources7.page';

describe('Resources7Page', () => {
  let component: Resources7Page;
  let fixture: ComponentFixture<Resources7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resources7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Resources7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
