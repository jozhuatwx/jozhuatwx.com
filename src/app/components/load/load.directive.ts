import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { LoadComponent } from './load.component';

@Directive({
  selector: '[loading]'
})
export class LoadDirective implements OnChanges {

  @Input() loading = true;

  loadComponentRef: ComponentRef<LoadComponent>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LoadComponent);
    this.loadComponentRef = this.viewContainerRef.createComponent(componentFactory);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadComponentRef.instance.loading = changes['loading'].currentValue;
  }
}
