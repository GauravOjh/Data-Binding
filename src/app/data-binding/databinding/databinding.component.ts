import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  stringInterpolation:string ="StringInterpolation";
  Submitted:string="";
  isDisabledBtn:boolean=false;

  CheckValue(){
    debugger;
    if(this.Submitted==="Submitted"){
      this.isDisabledBtn=true;
      if(this.isDisabledBtn==true){
         this.Submitted="";
      }
    }
  }

  onAdd(){
    debugger;
    if(this.Submitted.length>0){
      this.isDisabledBtn=false;
    }
  }
}
