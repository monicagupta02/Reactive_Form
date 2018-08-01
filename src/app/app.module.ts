import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { DataComponent } from './data/data.component';
import { EditComponent } from './edit/edit.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    DataComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
