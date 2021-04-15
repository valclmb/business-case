import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component/app/app.component';
import { MenuComponent } from './component/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnonceComponent } from './component/annonce-components/annonce/annonce.component';
import {HttpClientModule} from '@angular/common/http';
import { AnnonceListComponent } from './component/annonce-components/annonce-list/annonce-list.component';
import { FooterComponent } from './component/footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import { AnnonceDetailComponent } from './component/annonce-components/annonce-detail/annonce-detail.component';
import {HeadroomModule} from '@ctrl/ngx-headroom';
import { AdminComponent } from './component/admin-interface/admin/admin.component';
import { GarageComponent } from './component/admin-interface/garage-components/garage/garage.component';
import { GarageListComponent } from './component/admin-interface/garage-components/garage-list/garage-list.component';
import { MarqueComponent } from './component/admin-interface/marque-components/marque/marque.component';
import { MarqueListComponent } from './component/admin-interface/marque-components/marque-list/marque-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { ModeleComponent } from './component/admin-interface/modele-components/modele/modele.component';
import { ModeleListComponent } from './component/admin-interface/modele-components/modele-list/modele-list.component';
import { GarageDetailComponent } from './component/admin-interface/garage-components/garage-detail/garage-detail.component';
import { MarqueDetailComponent } from './component/admin-interface/marque-components/marque-detail/marque-detail.component';
import { ModeleDetailComponent } from './component/admin-interface/modele-components/modele-detail/modele-detail.component';
import { MarqueAddComponent } from './component/admin-interface/marque-components/marque-add/marque-add.component';
import { GarageAddComponent } from './component/admin-interface/garage-components/garage-add/garage-add.component';
import { ModeleAddComponent } from './component/admin-interface/modele-components/modele-add/modele-add.component';
import { UserComponent } from './component/admin-interface/user-components/user/user.component';
import { UserListComponent } from './component/admin-interface/user-components/user-list/user-list.component';
import { UserAddComponent } from './component/admin-interface/user-components/user-add/user-add.component';
import { UserDetailComponent } from './component/admin-interface/user-components/user-detail/user-detail.component';
import { AnnonceAdminComponent } from './component/admin-interface/annonce-components/annonce-admin/annonce-admin.component';
import { AnnonceListAdminComponent } from './component/admin-interface/annonce-components/annonce-list-admin/annonce-list-admin.component';
import { AnnonceDetailAdminComponent } from './component/admin-interface/annonce-components/annonce-detail-admin/annonce-detail-admin.component';

const routes: Routes = [
  // Annonce
  {path: 'annonce', component: AnnonceListComponent},
  // {path: 'annonce/add', component: IncidentAddComponent},
  {path: 'annonce/:id', component: AnnonceDetailComponent},
  // Admin
  {path: 'admin', component: AdminComponent},
  // Annonce
  {path: 'annonce_admin', component: AnnonceListAdminComponent},
  // {path: 'marque/add', component: MarqueAddComponent},
  {path: 'annonce_admin/:id', component: AnnonceDetailAdminComponent},
  // Marque
  {path: 'marque', component: MarqueListComponent},
  {path: 'marque/add', component: MarqueAddComponent},
  {path: 'marque/:id', component: MarqueDetailComponent},
  // Garage
  {path: 'garage', component: GarageListComponent},
  {path: 'garage/add', component: GarageAddComponent},
  {path: 'garage/:id', component: GarageDetailComponent},
  // Modèle
  {path: 'modele', component: ModeleListComponent},
  {path: 'modele/add', component: ModeleAddComponent},
  {path: 'modele/:id', component: ModeleDetailComponent},
  // Utilisateur
  {path: 'user', component: UserListComponent},
  {path: 'user/add', component: UserAddComponent},
  {path: 'user/:id', component: UserDetailComponent},

  {path: '', redirectTo: '/annonce', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnnonceComponent,
    AnnonceListComponent,
    FooterComponent,
    AnnonceDetailComponent,
    AdminComponent,
    GarageComponent,
    GarageListComponent,
    MarqueComponent,
    MarqueListComponent,
    LoginComponent,
    ModeleComponent,
    ModeleListComponent,
    GarageDetailComponent,
    MarqueDetailComponent,
    ModeleDetailComponent,
    MarqueAddComponent,
    GarageAddComponent,
    ModeleAddComponent,
    UserComponent,
    UserListComponent,
    UserAddComponent,
    UserDetailComponent,
    AnnonceAdminComponent,
    AnnonceListAdminComponent,
    AnnonceDetailAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HeadroomModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
