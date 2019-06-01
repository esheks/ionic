import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl:NavController) {}
  gotoNorwayPage(){
    this.navCtrl.navigateForward('norway');
  }
  gotoNigeriaPage(){
    this.navCtrl.navigateForward('nigeria');

  }

}
