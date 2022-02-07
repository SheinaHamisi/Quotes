import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DetailsComponent,
    FormComponent,
    HeaderComponent,
    LeftSectionComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
