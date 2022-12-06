import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { RoomatefinderserviceProvider } from '../../providers/roomatefinderservice/roomatefinderservice';



/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: RoomatefinderserviceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  showPrompot(item?, index?) {
    const prompt = this.alertCtrl.create({
      title:item ? 'Edit Room':"Add Room To Rent or share",
      message: item ? "Edit Room...": "Please add room to share or rent...",
      inputs: [
        {
          name: 'description',
          placeholder: 'Apartment Type',
          value:item ? item.name : null
        },
        {
          name: 'location',
          placeholder: 'Address',
          value:item ? item.report: null
        },
        {
          name: 'bathroom',
          placeholder: 'Shared or private',
          value:item ? item.report: null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item); if (index !==undefined){
              this.dataService.editItem(item, index);
            }
            else{
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });
    prompt.present();
  }

}
