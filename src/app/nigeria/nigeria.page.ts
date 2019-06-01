import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nigeria',
  templateUrl: './nigeria.page.html',
  styleUrls: ['./nigeria.page.scss'],
})
export class NigeriaPage implements OnInit {
  city;

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }
 
  print(){
    console.log(this.city);
   // this.showToast();
    this.showToast(this.city);
  }
  async showToast(city) {
    const toast = await this.toastController.create({
      message: 'I have been toasted.',
      duration: 2000,
      //position: "top"
      position: "bottom"
    });
    toast.present();
  }
 }



  //   constructor() { }

//   ngOnInit() {
//   }
//   print(){
//     console.log(this.city);
//   }
  
// }
