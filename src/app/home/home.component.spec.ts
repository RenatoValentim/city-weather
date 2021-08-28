/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let routerLinks: RouterLinkDirectiveStub[];
  let linkDes: DebugElement[];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent, RouterLinkDirectiveStub],
        imports: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement.queryAll(
      By.directive(RouterLinkDirectiveStub)
    );

    // get attached link directive instances
    // using each DebugElement's injector
    routerLinks = linkDes.map((de) => de.injector.get(RouterLinkDirectiveStub));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a HTML structure', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('header');
    const section = compiled.querySelector('section');
    const image = section?.querySelector('img');
    const sectionDivs = section?.querySelectorAll('div');
    const sectionFirstLineSpans = sectionDivs?.item(1).querySelectorAll('span');
    const sectionSecondLineSpans = sectionDivs
      ?.item(2)
      .querySelectorAll('span');

    expect(compiled.querySelector('main')).toBeTruthy();
    expect(compiled.querySelector('main header')).toBeTruthy();
    expect(compiled.querySelector('main section')).toBeTruthy();
    expect(header).toBeTruthy();
    expect(section).toBeTruthy();
    expect(header?.querySelector('div h1')).toBeTruthy();
    expect(header?.querySelector('div h2')).toBeTruthy();
    expect(section?.querySelector('img')).toBeTruthy();
    expect(sectionDivs?.length).toBe(3);
    expect(sectionDivs?.item(1).querySelectorAll('span a').length).toBe(3);
    expect(sectionDivs?.item(2).querySelectorAll('span a').length).toBe(3);
    expect(sectionFirstLineSpans?.length).toBe(3);
    expect(sectionSecondLineSpans?.length).toBe(3);
    expect(image).toBeTruthy();
  });

  it('should render a correct value into the HTML tags', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('header');
    const section = compiled.querySelector('section');
    const image = section?.querySelector('img');
    const sectionDivs = section?.querySelectorAll('div');
    const firstLineLinks = sectionDivs?.item(1).querySelectorAll('span a');
    const secondLineLinks = sectionDivs?.item(2).querySelectorAll('span a');

    expect(header?.querySelector('div h1')?.textContent).toContain('WEATHER');
    expect(header?.querySelector('div h2')?.textContent).toContain(
      'Select a City'
    );
    expect(image?.src.includes('world_white.png')).toBeTruthy();
    expect(image?.getAttribute('alt')).toContain('World icon');
    expect(firstLineLinks?.item(0).textContent).toContain('Dallol');
    expect(firstLineLinks?.item(1).textContent).toContain('Fairbanks');
    expect(firstLineLinks?.item(2).textContent).toContain('London');
    expect(secondLineLinks?.item(0).textContent).toContain('Recife');
    expect(secondLineLinks?.item(1).textContent).toContain('Vancouver');
    expect(secondLineLinks?.item(2).textContent).toContain('Yakutsk');
  });

  it('can get RouterLinks from template', () => {
    expect(routerLinks.length).toBe(6);
    expect(routerLinks[0].linkParams).toEqual([ '/city', Object({ cityName: 'Dallol' }) ]);
    expect(routerLinks[1].linkParams).toEqual([ '/city', Object({ cityName: 'Fairbanks' }) ]);
    expect(routerLinks[2].linkParams).toEqual([ '/city', Object({ cityName: 'London' }) ]);
    expect(routerLinks[3].linkParams).toEqual([ '/city', Object({ cityName: 'Recife' }) ]);
    expect(routerLinks[4].linkParams).toEqual([ '/city', Object({ cityName: 'Vancouver' }) ]);
    expect(routerLinks[5].linkParams).toEqual([ '/city', Object({ cityName: 'Yakutsk' }) ]);
  });
});
