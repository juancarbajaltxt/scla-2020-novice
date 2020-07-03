import { Component, OnInit } from '@angular/core';
import{ InAppBrowser } from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-resources5',
  templateUrl: './resources5.page.html',
  styleUrls: ['./resources5.page.scss'],
})
export class Resources5Page implements OnInit {

  constructor(private lab: InAppBrowser,) { }


  ngOnInit() {
  }

}
