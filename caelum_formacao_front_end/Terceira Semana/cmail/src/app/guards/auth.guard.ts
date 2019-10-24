import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private roteador: Router) {}

    canActivate(){
        if(!localStorage.getItem('cmail-token')){
            console.log('passou no guard');
            this.roteador.navigate(['login']);
            return false
        }
        
        return true
    }

}