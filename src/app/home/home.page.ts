import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading: any;

  post : any = {};

  constructor(private http : HttpClient, private loadCtrl : LoadingController,private toastCtrl: ToastController) {}

  dataPOST = [];

  ionViewDidEnter()
  {
    this.getDataPost();
  }

  public async loaderPresent(): Promise<any>
  {
    const loading = await this.loadCtrl.create({
      message: "LOADING...",
      backdropDismiss: true
    });
    await loading.present();

    return loading;
  }

  async getDataPost()
  {
    this.loading = await this.loaderPresent();

    this.http.get("http://jsonplaceholder.typicode.com/posts").subscribe((res : any)=>{
      console.log(res);
      this.dataPOST = res;

      if(this.loading)
      {
        this.loading.dismiss();
      }
    });
  }

  submit()
  {
    this.http.post("http://jsonplaceholder.typicode.com/posts", this.post).subscribe((res:any)=>{
      console.log(res);

      this.toastCtrl.create({
        duration : 3000,
        message : "ID for new Item is "+res.id
      }).then(l => l.present())
    })
  }

  

}
