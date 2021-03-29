import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-sole-proprietorship',
  templateUrl: './sole-proprietorship.component.html',
  styleUrls: ['./sole-proprietorship.component.scss']
})
export class SoleProprietorshipComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  proceed(){
    this.router.navigateByUrl('/SoleProprietorshipRegistration')
  }
}
