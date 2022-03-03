import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  paises! : Country[];

  constructor( private activatedRoute: ActivatedRoute, private paisService : PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( (param) => this.paisService.verPais(param.id) ),
        tap (console.log)
      )
      .subscribe( paises => this.paises = paises);

    
    /* this.activatedRoute.params
      .subscribe( ({id}) => {
        console.log( id );

        this.paisService.verPais( id )
          .subscribe( pais => {
            console.log(pais);
          })
      }) */
  }

}
