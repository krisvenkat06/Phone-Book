import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'phonebook',
        pathMatch: 'full'
    },
    {
        path: 'phonebook',
        loadChildren: './contacts/contacts.module#ContactsModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {   }
