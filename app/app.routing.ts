import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SetupComponent } from "./pages/setup/setup.component";
import { TimerComponent } from "./pages/timer/timer.component";

const routes: Routes = [
    { path: "", redirectTo: "/setup", pathMatch: "full" },
    { path: "setup", component: SetupComponent },
    { path: "timer", component: TimerComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }