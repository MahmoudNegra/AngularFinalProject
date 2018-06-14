import { Component, OnInit } from '@angular/core';
import { Compte } from '../../domain/compte';
import { ComptesService } from '../../services/comptes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte-add',
  templateUrl: './compte-add.component.html',
  styleUrls: ['./compte-add.component.css']
})
export class CompteAddComponent implements OnInit {

  c_cpt: Compte = {
        numero: '',
        propriotaire: '',
      solde: 0,
      operations: []
      };
  constructor( private _service: ComptesService, private _router: Router) { }

  c_ouvrirCompte() {
      this._service.addCompte(this.c_cpt).subscribe(
        // Naviguer vers la vue list
       resp => this._router.navigate(['list']),
       error => console.log(`ATTENTION: Il ya eu l'erreur ${error} lors`)
      );
  }

  ngOnInit() {
  }

}
