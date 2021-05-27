import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedPath = "";

  constructor(
    private menu: MenuController,
    private router: Router,
  ) {
      this.router.events.subscribe((event: RouterEvent) => {
        this.selectedPath = event.url;
      });
  }

  goToPage() {
    console.log("gotoschedule called");
    // this.router.navigateByUrl('contacts');
  }

  logOut() {
    console.log("Logging out..");
    this.router.navigateByUrl('welcome');
  }

}
