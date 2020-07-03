import { Component, OnInit } from '@angular/core';
import{ InAppBrowser } from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-resources4',
  templateUrl: './resources4.page.html',
  styleUrls: ['./resources4.page.scss'],
})
export class Resources4Page implements OnInit {

  constructor(private lab: InAppBrowser,) { }


  ngOnInit() {
  }
  openBlank() {
    this.lab.create(`https://www.windowscentral.com/how-install-gpu-your-pc`, `_blank`);
  }
  
  openBlank2() {
    this.lab.create(`https://www.youtube.com/watch?time_continue=273&v=SkrPxUXRbV0&feature=emb_title`, `_blank`);
  }
  
  openBlank3() {
    this.lab.create(`https://forums.tomshardware.com/threads/how-to-install-graphic-card-on-motherboard.3417964/`, `_blank`);
  }

}
