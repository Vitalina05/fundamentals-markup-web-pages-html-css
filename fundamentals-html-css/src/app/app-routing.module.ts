import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent} from "./view/about/about.component";
import { ContactComponent} from "./view/contact/contact.component";
import { ReportsComponent} from "./view/reports/reports.component";

@NgModule({
  declarations: [
    AboutComponent, ContactComponent, ReportsComponent
  ],
  imports: [RouterModule.forRoot([
    { path : 'about', component: AboutComponent },
    { path : 'contact', component: ContactComponent },
    { path : 'reports', component: ReportsComponent }
  ]),
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule { }
