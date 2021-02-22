import { Component, OnInit } from '@angular/core';
import { SumeService } from 'src/app/services/sume.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  numbrs: any = {
    right: null,
    left: null,
  }
    constructor(private sumeService:SumeService) { }

  ngOnInit(): void {
  }
  enternumber(): void {
    this.sumeService. numbrs.push(this.numbrs);
    console.log(this.numbrs)
  }
}
