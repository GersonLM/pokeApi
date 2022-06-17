import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/interfaces/access';
import { UserI } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginAccess!: Login;
  user: UserI
  
  constructor(private _builder: FormBuilder,private router:Router ) { 
    this.loginForm = this._builder.group({
      CorreoElectronico: ["", Validators.compose([Validators.email, Validators.required])],
      Contraseña: ["", Validators.required],
    })

    this.user = {
      id: 1,
      nombre: "Gerson",
      apellido: "Lopez",
      correo: "gersonL@gmail.com",
      constraseña: "1234",
      telefono: 6029232
    }
  }

  ngOnInit(): void {
  }

  ingresar(){


    this.loginAccess = {
      correoElectronico: this.loginForm.value.CorreoElectronico,
      contraseña: this.loginForm.value.Contraseña
    }

    if( this.loginAccess.correoElectronico === this.user.correo &&  this.loginAccess.contraseña === this.user.constraseña){
      this.router.navigate(['dashboard']);
    }
    
    console.log(this.loginAccess)
  }

}
