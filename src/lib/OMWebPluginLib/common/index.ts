namespace OMWebPluginLib {
    export function throwNotImplemented(): never {
        throw new Error('not implemented')
    }

    export type StringKeyValueObject = { [index: string]: string }

    export namespace UrlParams {
        export const Channel = "channel"
        export const PluginConfig = "pluginconfig"

        export const CefChannel = "cef"                 //win client native
        export const WebPostParentChannel = "parent"    //web post message
        export const WebPostOpenerChannel = "opener"    //web post message
        /** Channel specifies how are messages transfered between client and plugin.
         * Channel must support both directions.
        */
        export type Channel = typeof CefChannel | typeof WebPostParentChannel | typeof WebPostOpenerChannel
    }

    export namespace Message {
        export const Protocol: string = "omwebplugin"; // current name
        export const Version: number = 1;              // current version
        export type XMLString = string;

        //export enum RawMessageKind {
        //    //values starts with one for better bool testing
        //    notify = 1,
        //    api = 2
        //}

        export interface IRawMessage {
            //readonly kind: RawMessageKind;
            readonly protocol: typeof Protocol;
            readonly version: typeof Version;
            readonly payload: {};
            readonly requestId?: number;        //unique for a plugin instance (managed by channel)
            readonly responseId?: number;       //unique for a plugin instance (managed by channel)
        }

        export interface IRawPayloadMessage<T extends {}> extends IRawMessage {     //TODO LL T exteds IMessage?
            readonly payload: T;    //module message or any custom message type
        }

        export interface IMessage {
            readonly module: string;
            readonly type: string;
        }

        //export enum MessageKind {
        //    NotifyMessageKind = 1,
        //    RequestMessageKind = 2,
        //    ResponseMessageKind = 3
        //}

        //export interface IMessageKind {
        //    readonly kind: MessageKind
        //}
        //type IMessageEx = IMessage & IMessageKind

        function isRawMessage(msg: any): msg is IRawMessage {
            const m = msg as IRawMessage
            return typeof m === 'object' && m.protocol === Protocol && typeof m.version === 'number' &&
                m.version >= Version
        }

        export function isRawPayloadMessage(msg: any): msg is IRawPayloadMessage<{}> {
            return isRawMessage(msg) && typeof (msg as IRawPayloadMessage<{}>).payload === 'object'
        }

        export function isRequest(msg: IRawMessage) {
            return !!msg.requestId
        }

        export function isResponse(msg: IRawMessage) {
            return !!msg.responseId
        }

        export function isMessage(payload: {}): payload is IMessage {
            const p = payload as IMessage
            return typeof p.module === 'string' && typeof p.type === 'string'
        }
    }

    /** Namespace defines common notifications
     */
    export namespace OMNotify {
        //| 'flashnotes' | 'workflows'
        export namespace Lifecycle {
            export const Module = 'lifecycle'
            export const Ready = 'ready'
        }

        export namespace Board {
            export const Module = 'board'
            export const SetWidgetConfig = 'setWidgetConfig'
            export const SetFederatedSearch = 'setFederatedSearch'
        }

        export namespace UserAction {
            export const Module = 'useraction'
            export const OK = 'ok'
            export const Cancel = 'cancel'
            export type Type = typeof OK | typeof Cancel
        }

        export type NotifyPayload = {}
        export type NotifyMessage = Message.IMessage & { readonly json?: string }

        export function parsePayload(msg: Message.IMessage): {} | null {
            const json = (msg as NotifyMessage).json
            if (!json || typeof json !== 'string')
                return null
            const p = JSON.parse(json)
            return typeof p === 'object' ? p as {} : null
        }

        export type OnNotifyHandler = (msg: Message.IMessage) => void

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
    }
}