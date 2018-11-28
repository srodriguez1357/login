import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { UsuarioPage } from '../usuario/usuario';
import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController) {

  }

  iniciarSesion() {
    this.navCtrl.push(LoginPage);
  }

  nuevoUsuario() {
    this.navCtrl.push(RegistroPage);
  }

  

  //  iniciarSesion() {
  //   let index = this.personas.findIndex(persona => persona.presona == )
  //  }

}
