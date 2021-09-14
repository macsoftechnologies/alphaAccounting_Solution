import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GstRegistrationComponent } from "./gst-registration/gst-registration.component";

const routes: Routes = [
  { path: "GstRegistration", component: GstRegistrationComponent },
];

@NgModule({
  declarations: [GstRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class GstModule {}
