import { Component, Input, OnInit } from '@angular/core';
import { SumeService } from 'src/app/services/sume.service';

@Component({
  selector: 'app-lens',
  templateUrl: './lens.component.html',
  styleUrls: ['./lens.component.css']
})
export class LensComponent implements OnInit {
@Input()Lenstyp: any;
  constructor(private sumeService:SumeService) { }

  ngOnInit(): void {
  }
  addSame():void{
    this.sumeService.Lenstypes.push(this.Lenstyp.name)  
    }
}
