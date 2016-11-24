/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../app/from-component.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../node_modules/ag-grid-ng2/lib/agGridNg2.ngfactory';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '@angular/core/src/linker/element_ref';
import * as import13 from 'ag-grid-ng2/lib/ng2FrameworkFactory';
import * as import14 from 'ag-grid-ng2/lib/agGridNg2';
export class Wrapper_FromComponentComponent {
  context:import0.FromComponentComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.FromComponentComponent();
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_FromComponentComponent_Host:import2.RenderComponentType = (null as any);
class _View_FromComponentComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _FromComponentComponent_0_4:Wrapper_FromComponentComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_FromComponentComponent_Host0,renderType_FromComponentComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'ag-from-component',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_FromComponentComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._FromComponentComponent_0_4 = new Wrapper_FromComponentComponent();
    this._appEl_0.initComponent(this._FromComponentComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._FromComponentComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.FromComponentComponent) && (0 === requestNodeIndex))) { return this._FromComponentComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._FromComponentComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._FromComponentComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_FromComponentComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_FromComponentComponent_Host === (null as any))) { (renderType_FromComponentComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_FromComponentComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const FromComponentComponentNgFactory:import9.ComponentFactory<import0.FromComponentComponent> = new import9.ComponentFactory<import0.FromComponentComponent>('ag-from-component',viewFactory_FromComponentComponent_Host0,import0.FromComponentComponent);
const styles_FromComponentComponent:any[] = ([] as any[]);
var renderType_FromComponentComponent:import2.RenderComponentType = (null as any);
class _View_FromComponentComponent0 extends import1.AppView<import0.FromComponentComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  /*private*/ _appEl_5:import3.AppElement;
  _AgGridNg2_5_5:import10.Wrapper_AgGridNg2;
  _query_AgGridColumn_5_0:import11.QueryList<any>;
  _text_6:any;
  _text_7:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_FromComponentComponent0,renderType_FromComponentComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'style','width: 800px;'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,this._el_0,'h1',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'Using Dynamic Components',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = import4.createRenderElement(this.renderer,this._el_0,'ag-grid-ng2',new import4.InlineArray4(4,'class','ag-fresh','style','width: 100%; height: 350px;'),(null as any));
    this._appEl_5 = new import3.AppElement(5,0,this,this._el_5);
    var compView_5:any = import10.viewFactory_AgGridNg20(this.viewUtils,this.injector(5),this._appEl_5);
    this._AgGridNg2_5_5 = new import10.Wrapper_AgGridNg2(new import12.ElementRef(this._el_5),this._appEl_5.vcRef,this.parentInjector.get(import13.Ng2FrameworkFactory));
    this._query_AgGridColumn_5_0 = new import11.QueryList<any>();
    this._appEl_5.initComponent(this._AgGridNg2_5_5.context,([] as any[]),compView_5);
    this._text_6 = this.renderer.createText((null as any),'\n    ',(null as any));
    compView_5.create(this._AgGridNg2_5_5.context,([] as any[]),(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.AgGridNg2) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._AgGridNg2_5_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5_0_0:any = this.context.gridOptions;
    this._AgGridNg2_5_5.check_gridOptions(currVal_5_0_0,throwOnChange,false);
    this._AgGridNg2_5_5.detectChangesInInputProps(this,this._el_5,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) { if (this._query_AgGridColumn_5_0.dirty) {
      this._query_AgGridColumn_5_0.reset(([] as any[]));
      this._AgGridNg2_5_5.context.columns = this._query_AgGridColumn_5_0;
      this._query_AgGridColumn_5_0.notifyOnChanges();
    } }
    this._AgGridNg2_5_5.detectChangesInHostProps(this,this._el_5,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._AgGridNg2_5_5.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._AgGridNg2_5_5.context.ngOnDestroy();
  }
}
export function viewFactory_FromComponentComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.FromComponentComponent> {
  if ((renderType_FromComponentComponent === (null as any))) { (renderType_FromComponentComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_FromComponentComponent,{})); }
  return new _View_FromComponentComponent0(viewUtils,parentInjector,declarationEl);
}