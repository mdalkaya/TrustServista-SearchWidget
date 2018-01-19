namespace OMWebPluginLib {

    export namespace Host {
        const newRequestId = (function() {
            let _seqRequestId: number = 0;
            return () => ++_seqRequestId
        })()

        export interface IChannel {
            close();
            postMessage(msg: Message.IMessage);
            sendRequest(msg: Message.IMessage): Promise<Message.IMessage>;
        }

        type Pending = {
            requestId: number;
            resolve: (msg: Message.IMessage) => void;
            reject: (reason: any) => void;
        }

        export abstract class WindowChannel implements IChannel {
            private readonly _target: Window
            private readonly _onNotify?: OMNotify.OnNotifyHandler
            private _pending: Pending | null = null

            constructor(target: Window, onNotify?: OMNotify.OnNotifyHandler) {
                this._target = target
                this._onNotify = onNotify

                window.addEventListener('message', this.onMessage)
            }

            close() {
                window.removeEventListener('message', this.onMessage)
            }
            /** Sends a notification message. A notification is only one way call.
             * The paramter could also be a generic IMessage in the future.
             */
            postMessage(msg: Message.IMessage) {
                const raw: Message.IRawPayloadMessage<Message.IMessage> = {
                    protocol: Message.Protocol,
                    version: Message.Version,
                    payload: msg
                }
                this._target.postMessage(raw, '*');       //TODO DEBUG proper target origin
            }

            /**
             * Sends a request message. For every request message one response message is expected to be received.
             * @param msg
             */
            sendRequest(msg: Message.IMessage): Promise<Message.IMessage> { //TODO DEBUG review and improve
                const requestId = newRequestId();
                const raw: Message.IRawPayloadMessage<Message.IMessage> = {
                    protocol: Message.Protocol,
                    version: Message.Version,
                    requestId,
                    payload: msg
                }

                const p = new Promise<Message.IMessage>((resolve, reject) => {
                    this._pending = {
                        requestId,
                        resolve,
                        reject
                    }
                })

                this._target.postMessage(raw, '*');       //TODO DEBUG proper target origin
                return p
            }

            onMessage = (e: MessageEvent) => {
                //filter by source iframe
                const msg = e.data
                if (!Message.isRawPayloadMessage(msg))
                    return;

                if (Message.isRequest(msg)) {
                    throwNotImplemented();
                }
                else if (Message.isResponse(msg)) {
                    if (!!this._pending && msg.responseId === this._pending.requestId) {
                        const rawPayload = msg.payload
                        if (Message.isMessage(rawPayload)) {
                            this._pending.resolve(rawPayload)
                        }
                        this._pending = null
                    }
                }
                else {
                    const rawPayload = msg.payload
                    if (Message.isMessage(rawPayload)) {
                        this._onNotify && this._onNotify(rawPayload)
                    }
                }
            }
        }

        export class ParentChannel extends WindowChannel {
            constructor(onNotify?: OMNotify.OnNotifyHandler) {
                super(window.parent, onNotify)
            }
        }

        export class OpenerChannel extends WindowChannel {
            constructor(onNotify?: OMNotify.OnNotifyHandler) {
                super(window.opener, onNotify)
            }
        }

    }

    //export namespace Messaging {
    //}

    //export namespace HostApi {
    //}
}