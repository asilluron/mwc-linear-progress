var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { BaseElement, html, property, observer, query, customElement, addHasRemoveClass } from '@material/mwc-base/base-element.js';
import { style } from './mwc-linear-progress-css.js';
import MDCLinearProgressFoundation from '@material/linear-progress/foundation.js';
let LinearProgress = class LinearProgress extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCLinearProgressFoundation;
        this.determinate = false;
        this.progress = 0;
        this.buffer = 0;
        this.reverse = false;
        this.closed = false;
    }
    render() {
        return html `
      <div role="progressbar" class="mdc-linear-progress">
        <div class="mdc-linear-progress__buffering-dots"></div>
        <div class="mdc-linear-progress__buffer"></div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`;
    }
    createAdapter() {
        return Object.assign({}, addHasRemoveClass(this.mdcRoot), { getPrimaryBar: () => this.primaryBar, getBuffer: () => this.bufferElement, setStyle: (el, property, value) => el.style[property] = value });
    }
    open() {
        this.closed = false;
    }
    close() {
        this.closed = true;
    }
};
LinearProgress.styles = style;
__decorate([
    query('.mdc-linear-progress')
], LinearProgress.prototype, "mdcRoot", void 0);
__decorate([
    query('.mdc-linear-progress__primary-bar')
], LinearProgress.prototype, "primaryBar", void 0);
__decorate([
    query('.mdc-linear-progress__buffer')
], LinearProgress.prototype, "bufferElement", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    observer(function (value) {
        this.mdcFoundation.setDeterminate(value);
    })
], LinearProgress.prototype, "determinate", void 0);
__decorate([
    property({ type: Number }),
    observer(function (value) {
        this.mdcFoundation.setProgress(value);
    })
], LinearProgress.prototype, "progress", void 0);
__decorate([
    property({ type: Number }),
    observer(function (value) {
        this.mdcFoundation.setBuffer(value);
    })
], LinearProgress.prototype, "buffer", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    observer(function (value) {
        this.mdcFoundation.setReverse(value);
    })
], LinearProgress.prototype, "reverse", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    observer(function (value) {
        if (value) {
            this.mdcFoundation.close();
        }
        else {
            this.mdcFoundation.open();
        }
    })
], LinearProgress.prototype, "closed", void 0);
LinearProgress = __decorate([
    customElement('mwc-linear-progress')
], LinearProgress);
export { LinearProgress };
//# sourceMappingURL=mwc-linear-progress.js.map