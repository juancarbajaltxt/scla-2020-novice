import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Resources2Page } from './resources2.page';

describe('Resources2Page', () => {
  let component: Resources2Page;
  let fixture: ComponentFixture<Resources2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resources2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Resources2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
