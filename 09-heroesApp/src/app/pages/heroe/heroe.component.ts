import { HeroeService } from './../../services/heroe.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();



constructor( private heroeService: HeroeService){}

ngOnInit() {

}

guardar(form: NgForm){

  if(form.invalid){
console.log('Formulario no valido');
return;

  }

  Swal.fire({
    title:'Espere',
    text: 'Guardando',
    icon: 'info',
    allowOutsideClick: false
  });
  Swal.showLoading();

  let peticion: Observable<any>;




if(this.heroe.id){
 peticion= this.heroeService.actualizarheroe(this.heroe)
}

else{
 peticion= this.heroeService.crearHeroe(this.heroe)

}

peticion.subscribe(resp=>{

Swal.fire({
  title: this.heroe.nombre,
  text: 'se actualizo correctamente',
  icon: 'success'
});

});



}

}








