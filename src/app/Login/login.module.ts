import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MaterialAnimationModule } from '../app.material.module';

import { routes } from './login.routs'

import { LoginComponent } from './login.component'

@NgModule({
    imports : [ 
        RouterModule.forRoot(routes),
        MaterialAnimationModule
    ],
    declarations : [
        LoginComponent
    ],
    exports : [ 
        RouterModule, LoginComponent
     ]
})
export class LoginModule {

}