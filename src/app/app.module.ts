import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CarouselModule } from 'ngx-owl-carousel-o'
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FAQComponent } from './pages/faq/faq.component';
import { PrivacyAndPolicyComponent } from './pages/privacy-and-policy/privacy-and-policy.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CoachProfileComponent } from './pages/coach-profile/coach-profile.component';
import { BlogComponent } from './pages/blog/blog.component';
import { EventsComponent } from './pages/events/events.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrefooterComponent } from './components/prefooter/prefooter.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';
import { SingleEventComponent } from './pages/single-event/single-event.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { SingleCourseComponent } from './pages/single-course/single-course.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CourseCategoryComponent } from './pages/course-category/course-category.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HeroheaderComponent } from './components/home/heroheader/heroheader.component';
import { InstructorsComponent } from './components/home/instructors/instructors.component';
import { AllcoursesComponent } from './components/home/allcourses/allcourses.component';
import { BodyComponent } from './components/course/body/body.component';
import { CourseheadComponent } from './components/course/coursehead/coursehead.component';
import { FormComponent } from './components/login/form/form.component';
import { SignupformComponent } from './components/signup/signupform/signupform.component';
import { CoursedetailsheroComponent } from './components/course_details/coursedetailshero/coursedetailshero.component';
import { CoursedetailscontentlistComponent } from './components/course_details/coursedetailscontentlist/coursedetailscontentlist.component';
import { CoursedetailsdescriptionComponent } from './components/course_details/coursedetailsdescription/coursedetailsdescription.component';
import { SinglecourselistComponent } from './components/single_course/singlecourselist/singlecourselist.component';
import { SinglecourseplayerComponent } from './components/single_course/singlecourseplayer/singlecourseplayer.component';
import { CoachprofileheroComponent } from './components/coach_profile/coachprofilehero/coachprofilehero.component';
import { CoachprofiledetailsComponent } from './components/coach_profile/coachprofiledetails/coachprofiledetails.component';
import { CoachprofileaboutComponent } from './components/coach_profile/coachprofileabout/coachprofileabout.component';
import { CoachprofilecoursesComponent } from './components/coach_profile/coachprofilecourses/coachprofilecourses.component';
import { ServicesComponent } from './components/home/services/services.component';
import { ProfileheroComponent } from './components/profile/profilehero/profilehero.component';
import { ProfilebodyComponent } from './components/profile/profilebody/profilebody.component';
import { CategoriessectionComponent } from './components/home/categoriessection/categoriessection.component';
import { AboutheroComponent } from './components/about/abouthero/abouthero.component';
import { AboutbodyComponent } from './components/about/aboutbody/aboutbody.component';
import { AboutteamComponent } from './components/about/aboutteam/aboutteam.component';
import { BlogcontentsComponent } from './components/blog/blogcontents/blogcontents.component';
import { BlogheroComponent } from './components/blog/bloghero/bloghero.component';
import { FaqheroComponent } from './components/faq/faqhero/faqhero.component';
import { FaqbodyComponent } from './components/faq/faqbody/faqbody.component';
import { PandpheroComponent } from './components/privacyandpolicy/pandphero/pandphero.component';
import { PandpbodyComponent } from './components/privacyandpolicy/pandpbody/pandpbody.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FAQComponent,
    PrivacyAndPolicyComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CoachProfileComponent,
    BlogComponent,
    EventsComponent,
    HeaderComponent,
    FooterComponent,
    PrefooterComponent,
    SingleBlogComponent,
    SingleEventComponent,
    CoursesComponent,
    SingleCourseComponent,
    CourseDetailsComponent,
    CategoriesComponent,
    CourseCategoryComponent,
    CartComponent,
    CheckoutComponent,
    HeroheaderComponent,
    InstructorsComponent,
    AllcoursesComponent,
    BodyComponent,
    CourseheadComponent,
    FormComponent,
    SignupformComponent,
    CoursedetailsheroComponent,
    CoursedetailscontentlistComponent,
    CoursedetailsdescriptionComponent,
    SinglecourselistComponent,
    SinglecourseplayerComponent,
    CoachprofileheroComponent,
    CoachprofiledetailsComponent,
    CoachprofileaboutComponent,
    CoachprofilecoursesComponent,
    ServicesComponent,
    ProfileheroComponent,
    ProfilebodyComponent,
    CategoriessectionComponent,
    AboutheroComponent,
    AboutbodyComponent,
    AboutteamComponent,
    BlogcontentsComponent,
    BlogheroComponent,
    FaqheroComponent,
    FaqbodyComponent,
    PandpheroComponent,
    PandpbodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
