import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Positioning } from 'ngx-bootstrap/positioning';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}), // ToastrModule added
    BsDropdownModule.forRoot()
  ],
  exports: [
    ToastrModule,
    BsDropdownModule
  ],
})
export class SharedModule { }
