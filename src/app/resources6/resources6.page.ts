import { Component, OnInit } from '@angular/core';
import{ InAppBrowser } from '@ionic-native/in-app-browser/ngx'


@Component({
  selector: 'app-resources6',
  templateUrl: './resources6.page.html',
  styleUrls: ['./resources6.page.scss'],
})
export class Resources6Page implements OnInit {

  constructor(private lab: InAppBrowser,) { }

  ngOnInit() {
  }
  openBlank() {
    this.lab.create(`https://blog.nzxt.com/which-way-should-a-psu-fan-point/#:~:text=If%20your%20PC%20case%20has,unit%20from%20outside%20the%20case.`, `_blank`);
  }
  
  openBlank2() {
    this.lab.create(`https://www.youtube.com/watch?v=RuFeHzqfOuA`, `_blank`);
  }
  
  openBlank3() {
    this.lab.create(`https://forums.tomshardware.com/threads/top-or-bottom-mounted-psu.1443984/`, `_blank`);
  }

}
