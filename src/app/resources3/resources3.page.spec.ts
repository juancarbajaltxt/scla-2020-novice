import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Resources3Page } from './resources3.page';

describe('Resources3Page', () => {
  let component: Resources3Page;
  let fixture: ComponentFixture<Resources3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resources3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Resources3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
