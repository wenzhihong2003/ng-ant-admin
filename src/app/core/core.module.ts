import {NgModule, Optional, SkipSelf} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import zh from "@angular/common/locales/zh";
import {NZ_I18N, zh_CN} from "ng-zorro-antd/i18n";
import {SimpleReuseStrategy} from "./services/common/reuse-strategy";
import {RouteReuseStrategy} from "@angular/router";

registerLocaleData(zh);

@NgModule({
  providers: [{provide: RouteReuseStrategy, useClass: SimpleReuseStrategy}, {provide: NZ_I18N, useValue: zh_CN}],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
