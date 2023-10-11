import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myContact } from 'src/Model/myContacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//dependency injection
  constructor(private http:HttpClient) { }

  //get function for getting all contact details
  getAllContact():Observable<myContact>{
return this.http.get('http://localhost:3000/contacts')

  }
  // View particular contact details
  viewContactDetails(contactId:string){
    return this.http.get(`http://localhost:3000/contacts/${contactId}`)

  }

  //API call for getting group name
    getGroupName(GroupId:string){
      return this.http.get(`http://localhost:3000/groups/${GroupId}`)
    } 

    // API call for add contact information
    addcontact(contactBody:any){
      return this.http.post(`http://localhost:3000/contacts`,contactBody)
    }

    //api call for get group details
    getAllGroups(){
      return this.http.get('http://localhost:3000/groups')
    }

    //api call for delete a particular contact
      deleteContact(contactId:any){
        return this.http.delete(`http://localhost:3000/contacts/${contactId}`)
      }

   //Update a particular contact details (Submit button).
   updateContact(contactId:any,contactBody:any){
    return this.http.put(`http://localhost:3000/contacts/${contactId}`,contactBody)
   } 
}

