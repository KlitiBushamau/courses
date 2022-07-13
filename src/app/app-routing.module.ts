import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from "./pages/about/about.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { CoachProfileComponent } from "./pages/coach-profile/coach-profile.component";
import { EventsComponent } from "./pages/events/events.component";
import { FAQComponent } from "./pages/faq/faq.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { PrivacyAndPolicyComponent } from "./pages/privacy-and-policy/privacy-and-policy.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { RegisterComponent } from "./pages/register/register.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { CourseCategoryComponent } from "./pages/course-category/course-category.component";
import { CourseDetailsComponent } from "./pages/course-details/course-details.component";
import { CoursesComponent } from "./pages/courses/courses.component";
import { SingleBlogComponent } from "./pages/single-blog/single-blog.component";
import { SingleCourseComponent } from "./pages/single-course/single-course.component";
import { SingleEventComponent } from "./pages/single-event/single-event.component";
import { CartComponent } from "./pages/cart/cart.component";
import { CheckoutComponent } from "./pages/checkout/checkout.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'privacy_and_policy', component: PrivacyAndPolicyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'coach_profile', component: CoachProfileComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'single_blog', component: SingleBlogComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event_details', component: SingleEventComponent },
  
  { path: 'courses', component: CoursesComponent },
  { path: 'course_details', component: CourseDetailsComponent },
  { path: 'single_course', component: SingleCourseComponent },
  
  // { path: 'categories', component: CategoriesComponent },
  // { path: 'course_category', component: CourseCategoryComponent  },

  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
