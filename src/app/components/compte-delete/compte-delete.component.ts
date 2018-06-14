import { Component, OnInit } from '@angular/core';
import { Compte } from '../../domain/compte';
import { ActivatedRoute, Router } from '@angular/router';
import { ComptesService } from '../../services/comptes.service';

@Component({
  selector: 'app-compte-delete',
  templateUrl: './compte-delete.component.html',
  styleUrls: ['./compte-delete.component.css']
})
export class CompteDeleteComponent implements OnInit {

  constructor(private  _router: ActivatedRoute, private _service: ComptesService, private  _routerNavig: Router) { }

  numCompte: string;
  compte: Compte ;

  ngOnInit() {
    this._router.params.subscribe(
      parameters => {
        this.numCompte = parameters['id'];
        this.getCompteById(this.numCompte);
      },
      error => console.log(`Attention :Il y a une erreur de navigation vers Delete  ${error}`)
    );

    this.compte = {
      numero: '',
      propriotaire: '',
    solde: 0,
    operations: []
    };


  }

  getCompteById(id) {
    // Initialiser le compte
    this._service.getCompteById(id).subscribe(
      resp => this.compte = resp
    );
  }

  confirmDelete() {
      this._service.deleteCompte(this.numCompte).subscribe(
        resp => {
          this.numCompte = resp;
          this._routerNavig.navigate(['/list']);
          console.log('delete confirmé ');
        }
      );
  }

  // on aurait pu juste rajouter au tag : routerLink='/list'
  annulerDelete() {
    this._routerNavig.navigate(['/list']);
    console.log('delete annulé');
  }


}
