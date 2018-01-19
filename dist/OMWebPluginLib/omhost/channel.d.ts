declare namespace OMWebPluginLib {
    namespace Host {
        interface IChannel {
            close(): any;
            postMessage(msg: Message.IMessage): any;
            sendRequest(msg: Message.IMessage): Promise<Message.IMessage>;
        }
        abstract class WindowChannel implements IChannel {
            private readonly _target;
            private readonly _onNotify?;
            private _pending;
            constructor(target: Window, onNotify?: OMNotify.OnNotifyHandler);
            close(): void;
            /** Sends a notification message. A notification is only one way call.
             * The paramter could also be a generic IMessage in the future.
             */
            postMessage(msg: Message.IMessage): void;
            /**
             * Sends a request message. For every request message one response message is expected to be received.
             * @param msg
             */
            sendRequest(msg: Message.IMessage): Promise<Message.IMessage>;
            onMessage: (e: MessageEvent) => void;
        }
        class ParentChannel extends WindowChannel {
            constructor(onNotify?: OMNotify.OnNotifyHandler);
        }
        class OpenerChannel extends WindowChannel {
            constructor(onNotify?: OMNotify.OnNotifyHandler);
        }
    }
}
