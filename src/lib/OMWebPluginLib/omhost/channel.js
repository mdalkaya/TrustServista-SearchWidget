"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OMWebPluginLib;
(function (OMWebPluginLib) {
    var Host;
    (function (Host) {
        var newRequestId = (function () {
            var _seqRequestId = 0;
            return function () { return ++_seqRequestId; };
        })();
        var WindowChannel = /** @class */ (function () {
            function WindowChannel(target, onNotify) {
                var _this = this;
                this._pending = null;
                this.onMessage = function (e) {
                    //filter by source iframe
                    var msg = e.data;
                    if (!OMWebPluginLib.Message.isRawPayloadMessage(msg))
                        return;
                    if (OMWebPluginLib.Message.isRequest(msg)) {
                        OMWebPluginLib.throwNotImplemented();
                    }
                    else if (OMWebPluginLib.Message.isResponse(msg)) {
                        if (!!_this._pending && msg.responseId === _this._pending.requestId) {
                            var rawPayload = msg.payload;
                            if (OMWebPluginLib.Message.isMessage(rawPayload)) {
                                _this._pending.resolve(rawPayload);
                            }
                            _this._pending = null;
                        }
                    }
                    else {
                        var rawPayload = msg.payload;
                        if (OMWebPluginLib.Message.isMessage(rawPayload)) {
                            _this._onNotify && _this._onNotify(rawPayload);
                        }
                    }
                };
                this._target = target;
                this._onNotify = onNotify;
                window.addEventListener('message', this.onMessage);
            }
            WindowChannel.prototype.close = function () {
                window.removeEventListener('message', this.onMessage);
            };
            /** Sends a notification message. A notification is only one way call.
             * The paramter could also be a generic IMessage in the future.
             */
            WindowChannel.prototype.postMessage = function (msg) {
                var raw = {
                    protocol: OMWebPluginLib.Message.Protocol,
                    version: OMWebPluginLib.Message.Version,
                    payload: msg
                };
                this._target.postMessage(raw, '*'); //TODO DEBUG proper target origin
            };
            /**
             * Sends a request message. For every request message one response message is expected to be received.
             * @param msg
             */
            WindowChannel.prototype.sendRequest = function (msg) {
                var _this = this;
                var requestId = newRequestId();
                var raw = {
                    protocol: OMWebPluginLib.Message.Protocol,
                    version: OMWebPluginLib.Message.Version,
                    requestId: requestId,
                    payload: msg
                };
                var p = new Promise(function (resolve, reject) {
                    _this._pending = {
                        requestId: requestId,
                        resolve: resolve,
                        reject: reject
                    };
                });
                this._target.postMessage(raw, '*'); //TODO DEBUG proper target origin
                return p;
            };
            return WindowChannel;
        }());
        Host.WindowChannel = WindowChannel;
        var ParentChannel = /** @class */ (function (_super) {
            __extends(ParentChannel, _super);
            function ParentChannel(onNotify) {
                return _super.call(this, window.parent, onNotify) || this;
            }
            return ParentChannel;
        }(WindowChannel));
        Host.ParentChannel = ParentChannel;
        var OpenerChannel = /** @class */ (function (_super) {
            __extends(OpenerChannel, _super);
            function OpenerChannel(onNotify) {
                return _super.call(this, window.opener, onNotify) || this;
            }
            return OpenerChannel;
        }(WindowChannel));
        Host.OpenerChannel = OpenerChannel;
    })(Host = OMWebPluginLib.Host || (OMWebPluginLib.Host = {}));
    //export namespace Messaging {
    //}
    //export namespace HostApi {
    //}
})(OMWebPluginLib || (OMWebPluginLib = {}));
//# sourceMappingURL=channel.js.map