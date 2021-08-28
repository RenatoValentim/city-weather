/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent],
        imports: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a HTML structure', () => {
    const fixture = TestBed.createComponent(HomeComponent);
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
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('header');
    const section = compiled.querySelector('section');
    const image = section?.querySelector('img');
    const sectionDivs = section?.querySelectorAll('div');
    const firstLineLinks = sectionDivs?.item(1).querySelectorAll('span a');
    const secondLineLinks = sectionDivs?.item(2).querySelectorAll('span a');

    console.log(firstLineLinks);

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
});
