import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-norway',
  templateUrl: './norway.page.html',
  styleUrls: ['./norway.page.scss'],
})
export class NorwayPage implements OnInit {

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      //buttons: ['OK', 'Toast Me']
      buttons: [{
        text:'ok',
        handler:function(){
          console.log("Am doing okay");
        }
      },
      {
        text: 'Toast Me',
        handler:function(){
          console.log("am have been toasted");
        }
      }
      ]
    });

    await alert.present();
  }

}
