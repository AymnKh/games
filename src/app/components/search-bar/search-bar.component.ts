import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  constructor(private router: Router) {
    
  }

  search(form: NgForm) {
    this.router.navigate(['search', form.value.search]); // navigate to search
  }
}
