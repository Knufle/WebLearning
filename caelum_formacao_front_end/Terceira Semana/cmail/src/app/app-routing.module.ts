import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  {
    path: "inbox",
    loadChildren: () =>
      import("./modules/caixa-de-entrada/caixa-de-entrada.module").then(
        m => m.CaixaDeEntradaModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    loadChildren: () =>
      import("./modules/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "cadastro",
    loadChildren: () =>
      import("./modules/cadastro/cadastro.module").then(m => m.CadastroModule)
  },
  { path: "", redirectTo: "inbox", pathMatch: "full" },
  { path: "**", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
