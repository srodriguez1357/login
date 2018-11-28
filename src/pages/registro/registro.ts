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
email: string;
contra: string;
nombre: string;
imagen = '../assets/user.png';


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registro() {
    if (this.email.length > 0 && this.contra.length >= 8){
      this.personas.push({email: this.email, contra: this.contra, nombre: this.nombre});
      const alert = this.alertCtrl.create({
        title: '¡Bien!',
        subTitle: 'Tu usuario se ha creado',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.pop();
      console.log(this.email, this.contra, this.nombre, this.personas);

      this.storage.set('perfiles', JSON.stringify(this.personas));
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
