import { Component, OnInit, Input } from '@angular/core';
import { ClimaService } from '@shared/services/clima.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTint } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

  faTint = faTint;
  form : FormGroup
  location = { cityName: '', countryCode: '' };
  clima = undefined

  constructor(
    private _builder : FormBuilder,
    private climaService : ClimaService
  ){
    this.form = this._builder.group({
      cityName: ['', Validators.required],
      countryCode: ['', Validators.required]
    })
  }

  ngOnInit() : void{
  }

  enviar(values){
    this.climaService.getClima(this.location.cityName, this.location.countryCode)
    .subscribe(
      res => {
        console.log(res),
        this.clima = res
      },
      err => console.log(err)
    )
    this.clima = true
    this.location.cityName = '',
    this.location.countryCode = ''
  }


}
