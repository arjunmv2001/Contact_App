import { Component, OnInit } from '@angular/core';
import { myContact } from 'src/Model/myContacts';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcontacts',
  templateUrl: './addcontacts.component.html',
  styleUrls: ['./addcontacts.component.css']
})
export class AddcontactsComponent implements OnInit {
    allGroups:any=[] // To hold group informtaion
    // contactName: string='';
    contact:myContact={} //all contacts details as in the form object

    constructor(private api:ApiService, private router:Router){
      this.contact.GroupId='Select a group'
    }
  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);
      this.allGroups=data
      
    })
  }

    addContact(){
      this.api.addcontact(this.contact).subscribe((result:any)=>{
        this.router.navigateByUrl('')
      })
    }
}
