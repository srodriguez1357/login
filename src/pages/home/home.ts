import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
//import { UsuarioPage } from '../usuario/usuario';
import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
personas = [];
email = "";
contra = "";

  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController, public storage: Storage) {
      this.storage.keys()
      .then(keys => {
        if (keys.some(key => key == 'perfiles')) {
          this.storage.get('perfiles')
          .then (personas => {
            this.personas = JSON.parse(personas);
          })
        }
      })
  }

  iniciarSesion() {
    this.navCtrl.push(LoginPage, {personas: this.personas});
  }

  nuevoUsuario() {
    this.navCtrl.push(RegistroPage, {personas: this.personas});
  }


}
