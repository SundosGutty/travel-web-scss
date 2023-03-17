import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './footer/footer.component';
import { AppHeaderComponent } from './header/header.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { FormComponent } from './form/form.component';
import { PopupModalComponent } from './popup/popup.component';
import { AppNavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavigationComponent,
    AppFooterComponent,
    PopupModalComponent,
    CompanyDetailsComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
