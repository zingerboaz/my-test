import { Component, OnInit } from '@angular/core';
import { SumeService } from 'src/app/services/sume.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
  frams:any=[]; 
  Lenstypes:any=[];
  numbrs:any=[];
  constructor(private sumeService:SumeService) { }

  ngOnInit(): void {
    this.frams=this.sumeService.frams;
    this.Lenstypes=this.sumeService.Lenstypes;
    this.numbrs=this.sumeService.numbrs;
    console.log(this.frams,this.Lenstypes,this.numbrs);
  
  }

}
