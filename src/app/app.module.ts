import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from'@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FramlistComponent } from './components/framlist/framlist.component';
import { LenstypeComponent } from './components/lenstype/lenstype.component';
import { LensComponent } from './components/lens/lens.component';
import { FramComponent } from './components/fram/fram.component';
import { HomComponent } from './components/hom/hom.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { InvitationComponent } from './components/invitation/invitation.component';

const routes: Routes = [
  { path: '', component: HomComponent },
  { path: 'framlist', component: FramlistComponent },
  { path: 'Lenstype', component: LenstypeComponent },
  { path: 'Numbers', component: NumbersComponent },
  { path: 'Invitation', component: InvitationComponent },


];


@NgModule({
  declarations: [
    AppComponent,
    FramlistComponent,
    LenstypeComponent,
    LensComponent,
    FramComponent,
    HomComponent,
    NumbersComponent,
    InvitationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
