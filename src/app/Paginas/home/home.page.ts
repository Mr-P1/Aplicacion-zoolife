import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonCard, IonCardHeader,
   IonCardTitle, IonCardSubtitle, IonCardContent, IonButton,IonThumbnail, IonRow, IonCol, IonIcon } from '@ionic/angular/standalone';
import { FirestoreService ,Animal} from '../../servicio/firestore.service';
import {BaseLayoutComponent} from './../../base-layout/base-layout.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCol, IonRow, IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle,
     IonContent, IonThumbnail,BaseLayoutComponent],
})


export class HomePage implements OnInit {
  animales: Animal[] = [];


  constructor(private animalesService: FirestoreService) { }

  ngOnInit(): void {

    this.animalesService.getAnimales().subscribe((data: Animal[]) => {
      this.animales = data;
    })
  }


}
