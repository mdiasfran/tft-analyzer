import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-champs',
  templateUrl: './card-champs.component.html',
  styleUrls: ['./card-champs.component.scss']
})
export class CardChampsComponent implements OnInit {

  championClasses: Array<any> = [
    { id: 1, name: "Altruist" },
    { id: 2, name: "Arcanist" },
    { id: 3, name: "Artist" },
    { id: 4, name: "Behemoth" },
    { id: 5, name: "Bruiser" },
    { id: 6, name: "Duelist" },
    { id: 7, name: "Exalted" },
    { id: 8, name: "Great" },
    { id: 9, name: "Invoker" },
    { id: 10, name: "Reaper" },
    { id: 11, name: "Sage" },
    { id: 12, name: "Sniper" },
    { id: 13, name: "Spirit Walker" },
    { id: 14, name: "Trickshot" },
    { id: 15, name: "Warden" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
