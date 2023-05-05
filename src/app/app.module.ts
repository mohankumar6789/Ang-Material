import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialdesignModule } from '../materialdesign/materialdesign.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { BlogPageComponent } from './mat-blogs/blog-page/blog-page.component'
import { SinglePageComponent } from './mat-blogs/single-page/single-page.component';
import { PostBlogComponent } from './mat-blogs/post-blog/post-blog.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ServicesComponent } from './pages/services/services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './mat-blogs/reactive-forms/reactive-forms.component';
import { ReactiveFormPageComponent } from './mat-blogs/reactive-form-page/reactive-form-page.component';
import { EmailValidatorDirective } from '../app/mat-blogs/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogPageComponent,
    SinglePageComponent,
    PostBlogComponent,
    HomeComponent,
    ContactusComponent,
    ServicesComponent,
    ReactiveFormsComponent,
    ReactiveFormPageComponent,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialdesignModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
