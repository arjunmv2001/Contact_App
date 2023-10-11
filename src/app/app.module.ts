import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactmanagerComponent } from './contactmanager/contactmanager.component';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactmanagerComponent,
    AddcontactsComponent,
    ViewcontactComponent,
    EditcontactComponent,
    PageNoteFoundComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
