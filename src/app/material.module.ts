import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
} from "@angular/material";

const modules = [
  MatButtonModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
