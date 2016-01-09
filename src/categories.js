import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {activationStrategy} from 'aurelia-router';

@inject(HttpClient)
export class Welcome{
  mnemonics=[]

  constructor(http){
    this.http = http;
    this.categories=['','Bahasa', 'Biologi', 'Fisika', 'IPA-SD', 'IPS', 'IPS-SD', 'Kimia', 'Komputer', 'Matematika', 'Lainnya']
    this.obj = this.categories.reduce(function(o, v, i) {
      o[i] = v;
      return o;
    }, {});
    this.count=this.categories.length
  }

  activate(params){
    params.id = (typeof params.id === 'undefined') ? 1 : params.id;
    this.http.fetch("categories/"+params.id+".json")
      .then(response => response.json())
      .then(mnemonics => this.mnemonics=mnemonics);
  }

  //determineActivationStrategy(){
  //  return activationStrategy.replace;
  //}
}
