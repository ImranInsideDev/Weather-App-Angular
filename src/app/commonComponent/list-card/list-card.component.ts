import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.sass']
})
export class ListCardComponent {
 @Input() crd:any;

 ngOnChanges(){
  console.log(this.crd)
  this.crd = this.crd
 }
}
