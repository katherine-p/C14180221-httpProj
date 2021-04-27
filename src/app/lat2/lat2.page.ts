import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lat2',
  templateUrl: './lat2.page.html',
  styleUrls: ['./lat2.page.scss'],
})
export class Lat2Page implements OnInit {

  constructor(private http : HttpClient, private loadCtrl : LoadingController,private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  post : any = {};
  editId;

  add()
  {
    this.http.post("https://reqres.in/api/users", this.post).subscribe((res:any)=>{
      console.log(res);

      this.editId = res.id;

      this.toastCtrl.create({
        duration : 3000,
        message : "ID for new Item is "+res.id
      }).then(l => l.present());
    });
  }

  edit()
  {
    this.http.put("https://reqres.in/api/users/"+this.editId, this.post).subscribe((res:any)=>{
      console.log(res);

      this.toastCtrl.create({
        duration : 3000,
        message : "ID for edited Item is "+this.editId+"\nName: "+res.name+"\nJob: "+res.job
      }).then(l => l.present());
    });
  }

  del()
  {
    this.alertCtrl.create({
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Item deleted');
            this.http.delete("https://reqres.in/api/users/"+this.editId).subscribe((res:any) =>{
              console.log(res);
              this.toastCtrl.create({
                duration : 3000,
                message : "Item deleted"
              }).then(l => l.present());                            
            });
            
          }
        }
      ]
    }).then(l => l.present());    
  }

}
