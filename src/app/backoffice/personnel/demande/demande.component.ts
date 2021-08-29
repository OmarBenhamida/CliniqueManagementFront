import { Component, OnInit } from '@angular/core';
declare const myFan : any;
import * as $ from 'jquery';
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  callfun(){
  myFan();
}

  constructor() { }


  ngOnInit(): void {


    var fichetype : any = document.getElementById("fichetype");
    var fichemois : any  = document.getElementById("fichemois");
    var fichecongedebut : any  =
      document.getElementById("fichecongedebut");
    var fichecongefin : any  = document.getElementById("fichecongefin");

    fichetype.addEventListener("change", (event : any ) => {
      var value = fichetype.value;
      if (value == "attestation") {
        fichemois.style.display = "none";
        fichecongedebut.style.display = "none";
        fichecongefin.style.display = "none";
      } else if (value == "fiche") {
        fichemois.style.display = "block";
        fichecongedebut.style.display = "none";
        fichecongefin.style.display = "none";
      } else if (value == "conge") {
        fichemois.style.display = "none";
        fichecongedebut.style.display = "block";
        fichecongefin.style.display = "block";
      }
    });


  }

}
