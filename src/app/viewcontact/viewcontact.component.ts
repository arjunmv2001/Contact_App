import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {

  contactId:string='' // To hold id of the contact
  contact:any=[] // To hold the contact information
  groupId:string='' // To hold the groiup id of the contact
  groupName:string='' // To hold the groupname of the contact
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}
   ngOnInit(): void {
    //get id from the url
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data); //Id : "1" object
      console.log(data.id); //1
      this.contactId=data.id;
      //get details of particular contact
      this.api.viewContactDetails(this.contactId).subscribe((result:any)=>{
        console.log(result); //Contact details - object
        this.contact=result
              // Getting groupname
        this.groupId=result.GroupId;
        console.log(this.groupId);

        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          console.log(data); //{id: '2', name: 'family'}

        this.groupName=data.name
        console.log(this.groupName); 
        
          
        })
        
      })

      
       })
      }
}

