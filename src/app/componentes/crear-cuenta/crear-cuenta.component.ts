import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {

  rol_select = {
    rol: "",
    error_message:  {
      view: false,
      text: "",
    },
    view_gmail: false,
    view_leaf: true,
    now_animation: false,

  }
 
  delay_delete_leafs(seconds: number){

    setTimeout(() => {
      
      this.rol_select.view_leaf = false;
      this.rol_select.now_animation = false;
      
    }, seconds * 1000);

  }
  
  
  seleccionar(data: any): void{

    const response = data.target.value;
    const size = response.length;
  
    const error_text = "Seleccione un cargo";
    
  
    if (size > 0) {

      this.rol_select.rol = response;
      this.rol_select.error_message.view = false;
      this.rol_select.view_gmail = true;

      //Hide the leafs
      this.rol_select.now_animation = true;
      this.delay_delete_leafs(1.2);

    }

    else {

      this.rol_select.error_message.view = true;
      this.rol_select.error_message.text = error_text;
      this.rol_select.view_gmail = false;

      this.rol_select.view_leaf = true;

    }
    
  }

}
