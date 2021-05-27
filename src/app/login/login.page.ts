import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  
  async login() {
    await this.modalCtrl.dismiss();

    // needs auth for homepage
    this.router.navigateByUrl('home');
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
