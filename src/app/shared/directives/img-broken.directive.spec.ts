import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';


@Component({
  template: '<img class="testing-directive" appImgBroken [src] = "srcMock">'
})

class TestComponent {
  public srcMock: any = null
}


describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixure: ComponentFixture<TestComponent>

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixure = TestBed.createComponent(TestComponent)
    component = fixure.componentInstance
    fixure.detectChanges()

  })

  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });


  it('TestComponent debe instanciarse correctamente', ()=>{
    expect(component).toBeTruthy()
  });


  it('Directiva debe cambiar la img', (done: DoneFn)=>{
    //Arrange
    const beforeImgElement = fixure.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src
    component.srcMock = undefined

    setTimeout(() => {
      const afterImgElement = fixure.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = afterImgElement.src
      expect(afterImgSrc).toMatch('http://localhost:9876/assets/images/imgbroke.png')
      done()
    }, 3000);
  });


});
