import { Component, OnInit } from '@angular/core';
import{ InAppBrowser } from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-resources3',
  templateUrl: './resources3.page.html',
  styleUrls: ['./resources3.page.scss'],
})
export class Resources3Page implements OnInit {

  constructor(private lab: InAppBrowser,) { }


  ngOnInit() {
  }

  openBlank() {
    this.lab.create(`https://www.pcworld.com/article/2957195/how-to-install-new-memory-in-your-pc.html#:~:text=First%2C%20shut%20down%20your%20computer,you%20can%20access%20the%20motherboard.&text=The%20RAM%20slots%20are%20adjacent,memory%20slots%20next%20to%20it.`, `_blank`);
  }
  
  openBlank2() {
    this.lab.create(`https://www.youtube.com/watch?v=VA-eGIitpsw`, `_blank`);
  }
  
  openBlank3() {
    this.lab.create(`https://forums.tomshardware.com/threads/why-are-we-putting-ram-sticks-into-2nd-and-4th-slot-first.3195865/`, `_blank`);
  }
  



}
