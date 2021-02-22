import { Component, OnInit } from '@angular/core';
import { FramModel } from 'src/app/modols/fram.modol';

@Component({
  selector: 'app-framlist',
  templateUrl: './framlist.component.html',
  styleUrls: ['./framlist.component.css']
})
export class FramlistComponent implements OnInit {
  frams: FramModel[];


  constructor() {
    this.frams = [
      {
        name: 'gold',
        siz: '2',
        color: 'red',
        img: "https://publicdomainvectors.org/tn_img/eyewear.jpg"
      },
      {
        name: 'silver',
        siz: '4',
        color: 'grin',
        img: "https://publicdomainvectors.org/tn_img/eyewear.jpg"
      },
      {
        name: 'copper',
        siz: '6',
        color: 'yellow',
        img: "https://publicdomainvectors.org/tn_img/eyewear.jpg"
      }
    ];
    console.log(this.frams);
  }

  ngOnInit(): void {
  }

}
