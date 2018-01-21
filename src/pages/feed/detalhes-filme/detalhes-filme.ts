import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../../providers/moovie/moovie';

/**
 * Generated class for the DetalhesFilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-filme',
  templateUrl: 'detalhes-filme.html',
  providers:[
    MoovieProvider
  ]
})
export class DetalhesFilmePage {
  public filme;
  public filmeId;
  public loader;

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             public movieProvider:MoovieProvider,
             public loadingCtrl: LoadingController ) {
  }

  ionViewDidEnter() {
    this.abreCarregando();
    this.filmeId = this.navParams.get("id");
    this.movieProvider.getMoviesDetails(this.filmeId)
    .subscribe(data=>{
      let retorno = (data as any)._body
      this.filme = JSON.parse(retorno);
      console.log(this.filme)
      this.fechaCarregando();
    },error=>{
      console.log(error);
      this.fechaCarregando();

    })

  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
     content: "Carregando filme",
    
   });
   this.loader.present();
 }

 fechaCarregando(){
   this.loader.dismiss();
 }

}
