import { Component, OnInit } from '@angular/core';
import{ InAppBrowser } from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-resources2',
  templateUrl: './resources2.page.html',
  styleUrls: ['./resources2.page.scss'],
})
export class Resources2Page implements OnInit {

  constructor(private lab: InAppBrowser,) { }

  ngOnInit() {
  }


  openBlank() {
    this.lab.create(`https://smallbusiness.chron.com/install-processor-fans-70561.html#:~:text=Position%20your%20CPU%20fan%20over,place%20or%20secure%20with%20screws).`, `_blank`);
  }
  
  openBlank2() {
    this.lab.create(`https://www.youtube.com/watch?v=ob4CpdTApuY`, `_blank`);
  }
  
  openBlank3() {
    this.lab.create(`https://forums.tomshardware.com/threads/how-can-i-mount-an-aftermarket-fan-onto-my-cpu-cooler.3347948/`, `_blank`);
  }
  

}
