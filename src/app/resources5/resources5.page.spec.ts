import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Resources5Page } from './resources5.page';

describe('Resources5Page', () => {
  let component: Resources5Page;
  let fixture: ComponentFixture<Resources5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resources5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Resources5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
