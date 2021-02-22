import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenstype',
  templateUrl: './lenstype.component.html',
  styleUrls: ['./lenstype.component.css']
})
export class LenstypeComponent implements OnInit {
Lenstypes=[
  {name:"dis"},
  {name:"closer"},
  {name:"multyfokal"}

]
  constructor() { }

  ngOnInit(): void {
  }

}
