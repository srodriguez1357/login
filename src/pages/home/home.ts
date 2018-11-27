import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UsuarioPage } from '../usuario/usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
personas = [];
persona = 
  {email: '', contra: '', nombre: '', imagen : '../assets/user.png'};
usuario = UsuarioPage;

  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController) {

  }

  registro() {
   if (this.persona.email.length > 0 && this.persona.contra.length > 0){
    this.personas.push(this.usuario, {personas: this.personas});
   } else {
    const alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'A tu usuario le hacen falta datos',
      buttons: ['OK']
    });
    alert.present();
   }

  }

}
