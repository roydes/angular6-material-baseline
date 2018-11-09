import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-crud-example',
  templateUrl: './crud-example.component.html',
  styleUrls: ['./crud-example.component.scss']
})
export class CrudExampleComponent implements OnInit {

  uri = 'users';

  constructor (public httpService: HttpService) {
   }

  ngOnInit() {
    this.httpService.get(this.uri).subscribe((data: any ) => { console.log(data); } );
  }

}
