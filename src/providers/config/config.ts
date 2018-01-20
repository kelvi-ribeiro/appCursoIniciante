
import { Injectable} from '@angular/core';



/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let CONFIG_KEY_NAME = "config"
@Injectable()



export class ConfigProvider {
 
    private config = {
      showSlide:false,
      name :"",
      username: ""

    }
  constructor() {
 
  }
//Recupera dados do localstorage
  getConfigData():any{

    return localStorage.getItem(CONFIG_KEY_NAME);

  }
  //Grava os dados do localstorage
  setConfigData(showSlide?:boolean,name?:string,username?:string){

    let config = {

      showSlide:false,
      name :"",
      username: ""

    };
    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;

    }

    if(username){
      config.username = username;
    }

    localStorage.setItem(CONFIG_KEY_NAME,JSON.stringify(config));

  }

  

}
