import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-lat1',
  templateUrl: './lat1.page.html',
  styleUrls: ['./lat1.page.scss'],
})
export class Lat1Page implements OnInit {

  constructor(private http : HttpClient, private loadCtrl : LoadingController,private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
  }

  loading: any;

  post : any = {};

  data = [];

  ionViewDidEnter()
  {
    this.getData();
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

  async getData()
  {
    this.loading = await this.loaderPresent();

    this.http.get("https://reqres.in/api/users?page=2").subscribe((res : any)=>{
      console.log(res);
      this.data = res;

      if(this.loading)
      {
        this.loading.dismiss();
      }
    });
  }

  page2()
  {
    this.router.navigate(["/lat2"]);
  }

}
