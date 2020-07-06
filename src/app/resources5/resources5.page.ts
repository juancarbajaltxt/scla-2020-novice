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

  openBlank() {
    this.lab.create(`https://www.alphr.com/features/378925/how-to-install-an-ssd/`, `_blank`);
  }
  
  openBlank2() {
    this.lab.create(`https://www.youtube.com/watch?v=8JOxKSkkdMM`, `_blank`);
  }
  
  openBlank3() {
    this.lab.create(`https://forums.tomshardware.com/threads/connecting-ssd-hard-drive-to-the-motherboard.3041380/`, `_blank`);
  }



}
