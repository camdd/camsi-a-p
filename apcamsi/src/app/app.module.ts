import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormsModule } from '@angular/forms';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducacionComponent,
    AboutComponent,
    ExperienciaComponent,
    FooterComponent,
    NavbarComponent,
    SkillsComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#00D5B8",
      "outerStrokeGradientStopColor": "#00D5B8",
      "innerStrokeColor": "#40E3CD",
      "innerStrokeWidth": 10,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true,
      "subtitleFontSize": '20',
      "titleFontSize": '25'
    }),
    HttpClientModule,
    FormsModule,

  ],
  providers: [SkillsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
