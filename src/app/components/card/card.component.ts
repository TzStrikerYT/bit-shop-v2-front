import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() title: string = ""
 @Input() description: string = ""
 @Input() button: any = {name: "button", color: "success"}
 @Input() image: string = ""

 buyItem(): void {
  this.button.color = "danger"
  alert("Elemnto comprado")
  return 
 }

}
