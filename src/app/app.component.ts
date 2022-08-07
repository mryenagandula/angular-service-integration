import { Component, OnInit } from '@angular/core';
import { PokemanService } from './apis/pokeman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-service-integration';
  pokemans=[];

  constructor(private api: PokemanService){}

  ngOnInit(): void {
      this.api.getAllPokemans().subscribe((res:any)=>{
        console.log(res.results)
        this.pokemans =res.results;
      },error=>{
        console.log(error)
      })
  }
}
