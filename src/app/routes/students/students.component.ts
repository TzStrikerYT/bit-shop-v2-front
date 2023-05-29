import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  edad?: number 

  calcularEdad(){

    if(this.edad){
      if(this.edad > 17) return alert("Es mayor de edad")
      return alert("es menor de edad")
    }

    alert("Debes ingresar los valores")
    return
  }


}
