import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public network: Network) {

  }

  ionViewDidEnter(){
    this.network.onDisconnect().subscribe(data => {
      console.log(data.type);
    }, error => console.log(error));
  }

}
