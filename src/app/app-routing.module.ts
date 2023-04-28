import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlogPageComponent } from './mat-blogs/blog-page/blog-page.component';
import { PostBlogComponent } from './mat-blogs/post-blog/post-blog.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ServicesComponent } from './pages/services/services.component';
import { AuthGuard } from './auth.guard';
import { ReactiveFormPageComponent } from './mat-blogs/reactive-form-page/reactive-form-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'blog-page', canActivate: [AuthGuard], component: BlogPageComponent},
  {path: 'blog-page/post-blog', component: PostBlogComponent},
  {path: 'blog-page/reactive-form-page', component: ReactiveFormPageComponent},
  {path: 'pages/home', component: HomeComponent},
  {path: 'pages/contactus', component: ContactusComponent},
  {path: 'pages/services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
