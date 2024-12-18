import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { NavComponent } from "../nav/nav.component";
import { AuthService } from "../../core/services/auth/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { MessageService } from "primeng/api";

describe('HomeComponent', () => {
let fixture: ComponentFixture<HomeComponent>;
let component: HomeComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                HomeComponent,  
                NavComponent,        
                HttpClientModule         
            ],

             providers: [ MessageService, AuthService ]  
                 }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
        
});
