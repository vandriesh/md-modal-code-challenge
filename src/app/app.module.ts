import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdModule} from './md.module';
import { DetailsModalComponent } from './detailsModal/details-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule
  ],
  declarations: [
    AppComponent,
    DetailsModalComponent
  ],
  entryComponents: [
    DetailsModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
