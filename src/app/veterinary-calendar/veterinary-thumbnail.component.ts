import { Component, OnInit, Input } from '@angular/core';
import { Appointments } from 'app/models';

@Component({
  selector: 'veterinary-thumbnail',
  templateUrl: './veterinary-thumbnail.component.html',
  styleUrls: ['./veterinary-thumbnail.component.css']
})
export class VeterinaryThumbnail implements OnInit {
  @Input() appointment:Appointments
  constructor() { }

  ngOnInit() {
  }

}
