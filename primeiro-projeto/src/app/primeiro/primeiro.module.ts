import { PrimeiroComponent } from './primeiro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { SelectButtonModule } from "primeng/selectbutton";


@NgModule({
  declarations: [
    PrimeiroComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
    DropdownModule,
    FormsModule,
    SelectButtonModule,
    MessageModule,
    MessagesModule
  ],
  exports : [
    PrimeiroComponent
  ],
  providers: [

  ]
})
export class PrimeiroModule { }
