import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.page.html',
  styleUrls: ['./references.page.scss'],
})
export class ReferencesPage implements OnInit {

  references = [
    { 
      kod: 'M 1 TD',
      name: 'The Army',
      url: 'https://www.dropbox.com/s/feghrfdwyand12m/M%201%20TD%20THE%20Army%20%282004%29.pdf?dl=0',
    },
    { 
      kod: 'MM 0.3.11 TD',
      name: 'The Enemy (Lanun)',
      url: 'https://www.dropbox.com/s/l2a6p2k4au6gyjr/MM%200.3.11%20TD%20The%20Enemy%20%28Lanun%29.pdf?dl=0',
    },
    { 
      kod: 'MD 3.0 TD',
      name: 'Operations',
      url: 'https://www.dropbox.com/s/jfuidrdsfxh1ea6/MP%201.1.11A%20TD%20-%20PLATUN%20INF.pdf?dl=0',
    },
    { 
      kod: 'MP 1.1.11 TD',
      name: 'The Infantry Platoon',
      url: 'https://www.dropbox.com/s/sy8wsbvuz0rczt3/MP%201.1.11%20TD%20Infantry%20Platoon.pdf?dl=0',
    },
    { 
      kod: 'MP 1.1.9A',
      name: 'Batalion Infantri Standard',
      url: 'https://www.dropbox.com/s/x25fu39yeapfmpy/MP%201.1.9A%20TD%20Batalion%20Infantri%20Standard.pdf?dl=0',
    },
    { 
      kod: 'MM 1.1.2A',
      name: 'Panduan Ketua Seksyen',
      url: 'https://www.dropbox.com/s/dtgkm041nxxd766/MM%201.1.2A%20TD%20-%20Panduan%20Ketua%20seksyen%20Inf.pdf?dl=0',
    },
    { 
      kod: 'MP 1.2.9A TD',
      name: 'Meronda dan Mengesan',
      url: 'https://www.dropbox.com/s/2vslc2x2n2c4gi3/MP%201.2.9A%20TD%20Meronda%20dan%20Mengesan.pdf?dl=0',
    },
    { 
      kod: 'MP 0.2.3A TD',
      name: 'Operasi Hutan',
      url: 'https://www.dropbox.com/s/09fol4ehoe7rmv9/MP%200.2.3A%20TD%20-%20Operasi%20Hutan.pdf?dl=0',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  goToUrl(){
    
  }

}
