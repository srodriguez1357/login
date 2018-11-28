import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
email: "";
contra: "";
nombre: "";
imagen = '../assets/user.png';


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage) {
  this.personas = this.navParams.get('personas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registro() {
    if (this.email.length > 0 && this.contra.length > 0){
      this.personas.push({email: this.email, contra: this.contra, nombre: this.nombre});
      const alert = this.alertCtrl.create({
        title: '¡Bien!',
        subTitle: 'Tu usuario se ha creado',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.pop();
      
      this.storage.set('perfiles', JSON.stringify(this.personas));
      if (this.personas.length > 0) {
        console.log(this.email, this.contra, this.nombre, this.personas);
      }
    } else {
     const alert = this.alertCtrl.create({
       title: 'Error',
       subTitle: 'A tu perfil le hacen falta datos',
       buttons: ['OK']
     });
     alert.present();
    }
   }

}
