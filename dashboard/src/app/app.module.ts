import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule} from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { AddbooksComponent } from './pages/addbooks/addbooks.component';
import { MatListModule} from '@angular/material/list';
import { ManagebooksComponent } from './pages/managebooks/managebooks.component';
import { IssueboksComponent } from './pages/issueboks/issueboks.component';
import { IssuedboksComponent } from './pages/issuedboks/issuedboks.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "home", component: HomeComponent,
    children: [
      {path: "addbooks", component: AddbooksComponent},
      {path: "managebooks", component: ManagebooksComponent},
      {path: "issuebooks", component: IssueboksComponent},
      {path: "issuedbooks", component: IssuedboksComponent},  
    ]
  },
  {path: "**", redirectTo:"home"}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddbooksComponent,
    ManagebooksComponent,
    IssueboksComponent,
    IssuedboksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
