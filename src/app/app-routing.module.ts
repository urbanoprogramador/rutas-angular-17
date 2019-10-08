import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ComposeMessageComponent } from "./compose-message/compose-message.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/heroes", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
  {
    path: "compose",
    component: ComposeMessageComponent,
    outlet: "popup"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
