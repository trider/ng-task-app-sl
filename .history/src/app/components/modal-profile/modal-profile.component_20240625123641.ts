import { Component, inject, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-profile',
  standalone: true,
  imports: [],
  templateUrl: './modal-profile.component.html',
  styleUrl: './modal-profile.component.scss',
  template: `
		<div class="modal-header">
			<h4 class="modal-title">Hi there!</h4>
			<button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
		</div>
		<div class="modal-body">
			<p>Hello, {{ name }}!</p>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-outline-secondary" (click)="activeModal.close('Close click')">Close</button>
		</div>
	`
})
export class ModalProfileComponent implements OnInit{
  @Input() userAny: any;


  private modalService = inject(NgbModal);
  

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  
	viewProfile() {
		const modalRef = this.modalService.open(ModalProfileComponent);
		modalRef.componentInstance.name = 'World';
	}

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
