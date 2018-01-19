declare namespace OMWebPluginLib {
    namespace Host {
        class ApiModule implements OMApi.IApi {
            private readonly _channel;
            constructor(channel: IChannel);
            createDocument(templateId: number, folderLoId: number, poolId: number, systemId?: string): Promise<OMApi.DocumentId>;
            createDocumentEx(templateId: number, folder: OMApi.DocumentId, fields: ReadonlyArray<OMApi.Field>): Promise<OMApi.DocumentId>;
            setFields(docId: OMApi.DocumentId, fields: ReadonlyArray<OMApi.Field>): Promise<void>;
            call<TType extends string, TReq, TRes>(creator: OMApi.Creator<TType, TReq, TRes>, req: TReq): Promise<TRes>;
        }
    }
}
