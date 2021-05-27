import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts = [
    { 
      picture: '',
      name: 'Mej Mohd Zulhadi bin Zulkifli (3008835)',
      phone: '',
    },
    { 
      picture: '',
      name: 'Kapt Mohd Syahiran bin Mohamed Noor (3013332)',
      phone: '',
    },
    { 
      picture: '',
      name: 'Kapt Mohd Fitri bin Zamri (3013144)',
      phone: '',
    },
    { 
      picture: '',
      name: '1122004 PW2 Cassidy anak Lee',
      phone: '',
    },
    { 
      picture: '',
      name: '112851 PW2 Syahrizal bin Kamarudin',
      phone: '',
    },
    { 
      picture: '',
      name: '1136504 SSjn Mohd Razali bin Kasian',
      phone: '',
    },
    { 
      picture: '',
      name: '1145030 SSjn Saiful Rizan bin Alias',
      phone: '',
    },
    { 
      picture: '',
      name: '1146177 SSjn Franklin Bernard anak Lagi',
      phone: '',
    },
    { 
      picture: '',
      name: '1136336 SSjn Iskandar bin Ibrahim',
      phone: '',
    },
    { 
      picture: '',
      name: '1145703 Sjn Mazlan bin Mohamad',
      phone: '',
    },
    { 
      picture: '',
      name: '1146610 Sjn Mohammad Aidil bin Adan',
      phone: '',
    },
    { 
      picture: '',
      name: '1148647 Sjn Clayrence anak Ubang@Radi',
      phone: '',
    },
    { 
      picture: '',
      name: '1159694 Sjn Mohd Firdaus bin Mohd Hashim',
      phone: '',
    },
    { 
      picture: '',
      name: '1165090 Sjn Mohamad Ismail bin Musa',
      phone: '',
    },
    { 
      picture: '',
      name: '1137431 Sjn Mohd Khairil Anuar bin Abd Wahab',
      phone: '',
    },
    { 
      picture: '',
      name: '1137076 Sjn Muhamad Hamidi bin Darani',
      phone: '',
    },
    { 
      picture: '',
      name: '1159345 Sjn Herman bin Jamari',
      phone: '',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
