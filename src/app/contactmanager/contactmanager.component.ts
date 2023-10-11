import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { myContact } from 'src/Model/myContacts';

@Component({
  selector: 'app-contactmanager',
  templateUrl: './contactmanager.component.html',
  styleUrls: ['./contactmanager.component.css']
})
export class ContactmanagerComponent implements OnInit {

  loginDate:any;
// String Interpolation
allContacts:any=[];
heading:string='Contact Details List'
searchKey:any=[];

//API dependency injection
  constructor(private api:ApiService){
    this.loginDate=new Date();

  }
  ngOnInit(): void {
    this.getAllContacts()
  }
  getAllContacts() {
    this.api.getAllContact().subscribe((data:myContact)=>{
      console.log(data); //array of contacts
      this.allContacts=data
    })
  }
  
  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }

  deleteContact(contactId:any){
    this.api.deleteContact(contactId).subscribe((result:any)=>{
      alert("Delete Successfully")
      this.getAllContacts()
    })
  }
}
