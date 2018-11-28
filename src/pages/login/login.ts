import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuarioPage } from '../usuario/usuario';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
personas = [];
contra_received = "";
email_received = "";
imagen = '../assets/user.png'

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(p) {
     let index = this.personas.findIndex(persona => persona.persona == this.email_received && persona.contra == this.contra_received);
     if (index > 0) {
      this.navCtrl.push(UsuarioPage);
      const alert = this.alert.create({
        title: 'Bienvenido de nuevo',
        subTitle: 'Ya te habías registrado antes'
      });
      alert.present();
    }
  }

}
