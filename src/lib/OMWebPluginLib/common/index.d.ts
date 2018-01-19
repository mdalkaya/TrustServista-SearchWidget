declare namespace OMWebPluginLib {
    function throwNotImplemented(): never;
    type StringKeyValueObject = {
        [index: string]: string;
    };
    namespace UrlParams {
        const Channel = "channel";
        const PluginConfig = "pluginconfig";
        const CefChannel = "cef";
        const WebPostParentChannel = "parent";
        const WebPostOpenerChannel = "opener";
        /** Channel specifies how are messages transfered between client and plugin.
         * Channel must support both directions.
        */
        type Channel = typeof CefChannel | typeof WebPostParentChannel | typeof WebPostOpenerChannel;
    }
    namespace Message {
        const Protocol: string;
        const Version: number;
        type XMLString = string;
        interface IRawMessage {
            readonly protocol: typeof Protocol;
            readonly version: typeof Version;
            readonly payload: {};
            readonly requestId?: number;
            readonly responseId?: number;
        }
        interface IRawPayloadMessage<T extends {}> extends IRawMessage {
            readonly payload: T;
        }
        interface IMessage {
            readonly module: string;
            readonly type: string;
        }
        function isRawPayloadMessage(msg: any): msg is IRawPayloadMessage<{}>;
        function isRequest(msg: IRawMessage): boolean;
        function isResponse(msg: IRawMessage): boolean;
        function isMessage(payload: {}): payload is IMessage;
    }
    /** Namespace defines common notifications
     */
    namespace OMNotify {
        namespace Lifecycle {
            const Module = "lifecycle";
            const Ready = "ready";
        }
        namespace Board {
            const Module = "board";
            const SetWidgetConfig = "setWidgetConfig";
            const SetFederatedSearch = "setFederatedSearch";
        }
        namespace UserAction {
            const Module = "useraction";
            const OK = "ok";
            const Cancel = "cancel";
            type Type = typeof OK | typeof Cancel;
        }
        type NotifyPayload = {};
        type NotifyMessage = Message.IMessage & {
            readonly json?: string;
        };
        function parsePayload(msg: Message.IMessage): {} | null;
        type OnNotifyHandler = (msg: Message.IMessage) => void;
    }
}
