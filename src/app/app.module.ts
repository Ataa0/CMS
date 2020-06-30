import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent, LoginErrorModal } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProductService } from './product.service';
import {LoginService} from './login.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule } from '@angular/material';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {CommonModule} from '@angular/common'
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginErrorModal
    //LoginErrorModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    MatTabsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule
  ],
  entryComponents:[LoginErrorModal],
  providers: [ProductService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
