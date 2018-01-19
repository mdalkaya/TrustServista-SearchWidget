"use strict";
var OMWebPluginLib;
(function (OMWebPluginLib) {
    function throwNotImplemented() {
        throw new Error('not implemented');
    }
    OMWebPluginLib.throwNotImplemented = throwNotImplemented;
    var UrlParams;
    (function (UrlParams) {
        UrlParams.Channel = "channel";
        UrlParams.PluginConfig = "pluginconfig";
        UrlParams.CefChannel = "cef"; //win client native
        UrlParams.WebPostParentChannel = "parent"; //web post message
        UrlParams.WebPostOpenerChannel = "opener"; //web post message
    })(UrlParams = OMWebPluginLib.UrlParams || (OMWebPluginLib.UrlParams = {}));
    var Message;
    (function (Message) {
        Message.Protocol = "omwebplugin"; // current name
        Message.Version = 1; // current version
        //export enum MessageKind {
        //    NotifyMessageKind = 1,
        //    RequestMessageKind = 2,
        //    ResponseMessageKind = 3
        //}
        //export interface IMessageKind {
        //    readonly kind: MessageKind
        //}
        //type IMessageEx = IMessage & IMessageKind
        function isRawMessage(msg) {
            var m = msg;
            return typeof m === 'object' && m.protocol === Message.Protocol && typeof m.version === 'number' &&
                m.version >= Message.Version;
        }
        function isRawPayloadMessage(msg) {
            return isRawMessage(msg) && typeof msg.payload === 'object';
        }
        Message.isRawPayloadMessage = isRawPayloadMessage;
        function isRequest(msg) {
            return !!msg.requestId;
        }
        Message.isRequest = isRequest;
        function isResponse(msg) {
            return !!msg.responseId;
        }
        Message.isResponse = isResponse;
        function isMessage(payload) {
            var p = payload;
            return typeof p.module === 'string' && typeof p.type === 'string';
        }
        Message.isMessage = isMessage;
    })(Message = OMWebPluginLib.Message || (OMWebPluginLib.Message = {}));
    /** Namespace defines common notifications
     */
    var OMNotify;
    (function (OMNotify) {
        //| 'flashnotes' | 'workflows'
        var Lifecycle;
        (function (Lifecycle) {
            Lifecycle.Module = 'lifecycle';
            Lifecycle.Ready = 'ready';
        })(Lifecycle = OMNotify.Lifecycle || (OMNotify.Lifecycle = {}));
        var Board;
        (function (Board) {
            Board.Module = 'board';
            Board.SetWidgetConfig = 'setWidgetConfig';
            Board.SetFederatedSearch = 'setFederatedSearch';
        })(Board = OMNotify.Board || (OMNotify.Board = {}));
        var UserAction;
        (function (UserAction) {
            UserAction.Module = 'useraction';
            UserAction.OK = 'ok';
            UserAction.Cancel = 'cancel';
        })(UserAction = OMNotify.UserAction || (OMNotify.UserAction = {}));
        function parsePayload(msg) {
            var json = msg.json;
            if (!json || typeof json !== 'string')
                return null;
            var p = JSON.parse(json);
            return typeof p === 'object' ? p : null;
        }
        OMNotify.parsePayload = parsePayload;
        //export interface RawNotifyMessage extends Message.IRawPayloadMessage<NotifyMessage> {
        //    readonly kind: Message.RawMessageKind.notify;
        //}
        //export function createRawNotifyMessage(payload: NotifyMessage): RawNotifyMessage {
        //    return {
        //        kind: Message.RawMessageKind.notify,
        //        protocol: Message.Protocol,
        //        version: Message.Version,
        //        payload
        //    }
        //}
        //export function isRawNotify(arg: any): arg is RawNotifyMessage {
        //    return Message.isRawNotify(arg) &&
        //        arg.kind === Message.RawMessageKind.notify &&
        //        !!arg.payload
        //}
    })(OMNotify = OMWebPluginLib.OMNotify || (OMWebPluginLib.OMNotify = {}));
})(OMWebPluginLib || (OMWebPluginLib = {}));
//# sourceMappingURL=index.js.map