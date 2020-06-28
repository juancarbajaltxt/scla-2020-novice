import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Resources6Page } from './resources6.page';

describe('Resources6Page', () => {
  let component: Resources6Page;
  let fixture: ComponentFixture<Resources6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resources6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Resources6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
