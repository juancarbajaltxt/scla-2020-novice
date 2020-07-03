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
    this.lab.create(`https://www.pcworld.com/article/2957260/how-to-install-an-intel-or-amd-cpu-in-your-computer.html#:~:text=Start%20with%20your%20motherboard%20outside,LGA%20socket%20in%20the%20motherboard.&text=Now`, `_blank`);
  }
  
  openBlank2() {
    this.lab.create(`https://youtu.be/POv93iBvUkI`, `_blank`);
  }
  
  openBlank3() {
    this.lab.create(`https://www.reddit.com/r/buildapc/comments/6a9daa/need_help_with_connecting_cpu_fan_to_motherboard/`, `_blank`);
  }
  

}
