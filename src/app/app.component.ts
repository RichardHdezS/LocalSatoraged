import { Component } from '@angular/core';
import { Cliente } from './bd/bd.component';
import { Producto } from './bd/bd.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'almacenamientoInterno';
  
 
  //cliente1 = new Cliente('123', 'Julio', 'Calle palomas', '4531111111', '5000');
  //cliente3 = new Cliente('345', 'Julieta', 'Calle Pajaros', '45311552111', '300');
  
  
  // constructor(){
  //   this.eliminarStoraged();
  //  }

  //  eliminarStoraged(){
  //   localStorage.removeItem("cliente2");
  //  }
   

}
