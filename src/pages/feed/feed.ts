import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";


/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
      MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
      titulo:"Charles Franca",
      data: "November 5, 1955",
      descricao:"Estou criando um app incrivel...",
      qntd_likes: 12,
      qntd_comments: 4,
      time_comment: "11h ago teste"
  }

  public lista_filmes = new Array<any>();
  public page = 1;

  public nome_usuario:string = "Charles Franca do Codigo";
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private movieProvider: MoovieProvider,
      public loadingCtrl: LoadingController
      ) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes..."
    });
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }

  public somaDoisNumeros(num1:number, num2:number): void{
      //alert(num1 + num2);
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarFilmes();
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  


  carregarFilmes(){
    this.abreCarregando();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data=>{
        
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);

            this.lista_filmes = objeto_retorno.results;
          

          this.fechaCarregando();
          if(this.isRefreshing){
              this.refresher.complete();
              this.isRefreshing = false;
          }
      }, error => {
          console.log(error);
          this.fechaCarregando();
          if(this.isRefreshing){
              this.refresher.complete();
              this.isRefreshing = false;
          }
      }
    )
  }

  nextPage(){
    this.page++;  
    this.lista_filmes = null  
    this.carregarFilmes();
    
    
    console.log(this.page)

  }

  previusPage(){
    if(this.page===1){
    
    alert('Você já está primeira página');
    this.page++;
    }

    this.page--;
    
    this.lista_filmes = null  
    this.carregarFilmes();
    
    console.log(this.page)

  }

  firstPage(){
    this.page=1;
    this.lista_filmes = null  
    
    this.carregarFilmes();
    
    console.log(this.page)

  }




}