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
  @Input() name: any;
  @Input() email: any;
  @Input() phone: any;
  @Input() address: any;
  @Input() city: any;
  @Input() state: any;
  @Input() zip: any;
  @Input() country: any;
  @Input() role: any;
  @Input() status: any;
  private modalService = inject(NgbModal);
  

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
