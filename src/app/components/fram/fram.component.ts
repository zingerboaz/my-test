import { Component, Input, OnInit } from '@angular/core';
import { FramModel } from 'src/app/modols/fram.modol';
import { SumeService } from 'src/app/services/sume.service';

@Component({
  selector: 'app-fram',
  templateUrl: './fram.component.html',
  styleUrls: ['./fram.component.css']
})
export class FramComponent implements OnInit {
  @Input() fram: FramModel;
  constructor(private sumeService:SumeService) { 
    this.fram = {
      name:'',
      siz:'',
      color:'',
      img: '',
    }
  }

  ngOnInit(): void {
  }
  addSame():void{
  this.sumeService.frams.push(this.fram)  
  console.log(this.sumeService.frams);
  }
}
