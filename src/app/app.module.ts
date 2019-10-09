import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { AppRoutingModule } from "./app-routing.module";
import { HeroesModule } from "./heroes/heroes.module";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";

import { CrisisCenterModule } from "./crisis-center/crisis-center.module";
import { ComposeMessageComponent } from "./compose-message/compose-message.component";
import { AuthService } from "./auth/auth.service";
import { DialogService } from './dialog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    AuthModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthService, DialogService]
})
export class AppModule {}
