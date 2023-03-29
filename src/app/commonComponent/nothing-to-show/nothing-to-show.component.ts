import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nothing-to-show',
  templateUrl: './nothing-to-show.component.html',
  styleUrls: ['./nothing-to-show.component.sass']
})
export class NothingToShowComponent {
  @Input() text!: string;
}
