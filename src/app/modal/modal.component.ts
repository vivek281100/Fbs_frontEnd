import { Component } from '@angular/core';
// import {NgbActiveModal} from ''
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
      
displaysignin = true;

  modalVisible:boolean = true;
  closeModal():void{
  }

  displaySignin()
  {
    this.displaysignin = !this.displaysignin;
  }
}
