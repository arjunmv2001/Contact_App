import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmanagerComponent } from './contactmanager/contactmanager.component';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';

const routes: Routes = [
  {//localhost:4200 -> localhost:4200/contactmanager
    path:'',redirectTo: 'contactmanager', pathMatch:'full'
  },
  { // listing all contact details
    path:'contactmanager', component:ContactmanagerComponent 
  },
  { //add new contact - localhost:4200/contactmanager/addcontact
  path:'contactmanager/addcontact', component:AddcontactsComponent
  },
  {// view a particular contact
    path:'contactmanager/view/:id', component:ViewcontactComponent
  },
  {
    path:'contactmanager/edit/:contactid', component:EditcontactComponent
  },
    {
      path:'**', component:PageNoteFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
