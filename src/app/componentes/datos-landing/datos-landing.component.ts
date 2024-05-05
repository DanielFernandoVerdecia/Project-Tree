import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-landing',
  templateUrl: './datos-landing.component.html',
  styleUrls: ['./datos-landing.component.css']
})
export class DatosLandingComponent {

   //Animación tarjetas
   animacion_card_morado = false;
   
   
   activar_giro_card(card: string) {

     switch (card){
       
        case "Tarjeta 1":
          this.animacion_card_morado = true;
          break;
      
     } 

   }

   desactivar_giro_card(card: string) {

      switch (card){
        
        case "Tarjeta 1":
          this.animacion_card_morado = false;
          break;
      
      } 

   }
   
   //Fin animación tarjetas

  

}
