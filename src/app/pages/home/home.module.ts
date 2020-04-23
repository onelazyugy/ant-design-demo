import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    NzButtonModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
