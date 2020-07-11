import { Component, OnInit } from '@angular/core';
import{ InAppBrowser } from '@ionic-native/in-app-browser/ngx'


@Component({
  selector: 'app-resources8',
  templateUrl: './resources8.page.html',
  styleUrls: ['./resources8.page.scss'],
})
export class Resources8Page implements OnInit {

  constructor(private lab: InAppBrowser,) { }

  ngOnInit() {
  }

  openBlank() {
    this.lab.create(`https://www.techradar.com/how-to/how-to-install-windows-10`, `_blank`);
  }
  
  openBlank2() {
    this.lab.create(`https://www.youtube.com/watch?v=vHS_3qi0kXg`, `_blank`);
  }
  
  openBlank3() {
    this.lab.create(`https://www.tenforums.com/installation-upgrade/119652-before-installing-windows-10-please-read-special-post-mine.html?s=c830b961c6e7aa907a856d57b134898f`, `_blank`);
  }

}
