import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
personas = [];
persona = 
  {email: '', contra: '', nombre: '', imagen : '../assets/user.png'}

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registro() {
    if (this.persona.email.length > 0 && this.persona.contra.length > 0){
      this.personas.push({email: this.persona.email, contra: this.persona.contra, nombre: this.persona.nombre});
      const alert = this.alertCtrl.create({
        title: '¡Bien!',
        subTitle: 'Tu usuario se ha creado',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.pop();
      console.log(this.personas);
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
