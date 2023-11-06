import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Positioning } from 'ngx-bootstrap/positioning';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}), // ToastrModule added
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    NgxSpinnerModule.forRoot({type: 'line-scale-party'}),
    BrowserAnimationsModule 

  ],
  exports: [
    ToastrModule,
    BsDropdownModule,
    TabsModule,
    NgxSpinnerModule
  ],
})
export class SharedModule { }
