import { Component, OnInit } from '@angular/core';
import{ InAppBrowser } from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-resources7',
  templateUrl: './resources7.page.html',
  styleUrls: ['./resources7.page.scss'],
})
export class Resources7Page implements OnInit {

  constructor(private lab: InAppBrowser,) { }

  ngOnInit() {
  }

  openBlank() {
    this.lab.create(`https://www.build-gaming-computers.com/motherboard-front-panel-connectors-guide.html`, `_blank`);
  }
  
  openBlank2() {
    this.lab.create(`https://www.youtube.com/watch?v=9--Nbg2qKUA`, `_blank`);
  }
  
  openBlank3() {
    this.lab.create(`https://forums.tomshardware.com/threads/how-to-connect-front-panel-wires-to-the-motherboard.1529648/`, `_blank`);
  }

}
