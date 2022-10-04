import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthPageComponent } from './auth-page.component';
import { By } from '@angular/platform-browser';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPageComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('Debe presentar form invalido', () => {
    //Arrange
    const mockCredentials = {
      email: 'dsfdf',
      password: '11111111111111111111111111111111'
    }
    const emailForm = component.formLogin.get('email');
    const passwordForm = component.formLogin.get('password');
    //Act
    emailForm?.setValue(mockCredentials.email)
    passwordForm?.setValue(mockCredentials.password)
    //Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  it('Debe presentar form valido', () => {
    //Arrange
    const mockCredentials = {
      email: 'tivi@gmail.com',
      password: '12345678'
    }
    const emailForm = component.formLogin.get('email');
    const passwordForm = component.formLogin.get('password');
    //Act
    emailForm?.setValue(mockCredentials.email)
    passwordForm?.setValue(mockCredentials.password)
    //Assert
    expect(component.formLogin.invalid).toEqual(false);
  });


  it('El boton debe tener la palabra INICIAR SESION', () =>{
    const elementRef = fixture.debugElement.query(By.css('.form-action button'));
    const getInnerText = elementRef.nativeElement.innerText;
    expect(getInnerText).toEqual('Iniciar sesión')
  });
});
