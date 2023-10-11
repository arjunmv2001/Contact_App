import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { myContact } from 'src/Model/myContacts';
import { MyGroup } from 'src/Model/myGroup';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
  groups:MyGroup[]=[]
  contact:myContact={}
  contactid:string=''
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.contactid);
      this.contactid=data.contactid
      // Call api for getting particular contact details
      this.api.viewContactDetails(this.contactid).subscribe((result:any)=>{
        console.log(result);
        this.contact=result

         //call api for getting group information
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);
      this.groups=data
      
    })


      // this.api.updateContact(this.contactid,this.contact).subscribe((result)=>{
      //   console.log(result);
        
      })
        
      })
    }
      updateContact(){
        this.api.updateContact(this.contactid,this.contact).subscribe((result:any)=>{
          console.log(result);
          this.route.navigateByUrl('/')
      })
      
      
    }
  }


