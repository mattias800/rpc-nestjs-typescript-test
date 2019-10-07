import * as $protobuf from "protobufjs";
/** Namespace Timetable. */
export namespace Timetable {

    /** Represents a TimetableDraftService */
    class TimetableDraftService extends $protobuf.rpc.Service {

        /**
         * Constructs a new TimetableDraftService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new TimetableDraftService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TimetableDraftService;

        /**
         * Calls CreateDraft.
         * @param request CreateDraftInput message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateDraftResponse
         */
        public createDraft(request: Timetable.ICreateDraftInput, callback: Timetable.TimetableDraftService.CreateDraftCallback): void;

        /**
         * Calls CreateDraft.
         * @param request CreateDraftInput message or plain object
         * @returns Promise
         */
        public createDraft(request: Timetable.ICreateDraftInput): Promise<Timetable.CreateDraftResponse>;

        /**
         * Calls FindOneById.
         * @param request IdInput message or plain object
         * @param callback Node-style callback called with the error, if any, and TimetableDraft
         */
        public findOneById(request: IIdInput, callback: Timetable.TimetableDraftService.FindOneByIdCallback): void;

        /**
         * Calls FindOneById.
         * @param request IdInput message or plain object
         * @returns Promise
         */
        public findOneById(request: IIdInput): Promise<Timetable.TimetableDraft>;
    }

    namespace TimetableDraftService {

        /**
         * Callback as used by {@link Timetable.TimetableDraftService#createDraft}.
         * @param error Error, if any
         * @param [response] CreateDraftResponse
         */
        type CreateDraftCallback = (error: (Error|null), response?: Timetable.CreateDraftResponse) => void;

        /**
         * Callback as used by {@link Timetable.TimetableDraftService#findOneById}.
         * @param error Error, if any
         * @param [response] TimetableDraft
         */
        type FindOneByIdCallback = (error: (Error|null), response?: Timetable.TimetableDraft) => void;
    }

    /** Properties of a TimetableDraft. */
    interface ITimetableDraft {

        /** TimetableDraft id */
        id?: (string|null);

        /** TimetableDraft name */
        name?: (string|null);

        /** TimetableDraft createdBy */
        createdBy?: (string|null);

        /** TimetableDraft createdAt */
        createdAt?: (string|null);
    }

    /** Represents a TimetableDraft. */
    class TimetableDraft implements ITimetableDraft {

        /**
         * Constructs a new TimetableDraft.
         * @param [properties] Properties to set
         */
        constructor(properties?: Timetable.ITimetableDraft);

        /** TimetableDraft id. */
        public id: string;

        /** TimetableDraft name. */
        public name: string;

        /** TimetableDraft createdBy. */
        public createdBy: string;

        /** TimetableDraft createdAt. */
        public createdAt: string;

        /**
         * Creates a new TimetableDraft instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimetableDraft instance
         */
        public static create(properties?: Timetable.ITimetableDraft): Timetable.TimetableDraft;

        /**
         * Encodes the specified TimetableDraft message. Does not implicitly {@link Timetable.TimetableDraft.verify|verify} messages.
         * @param message TimetableDraft message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Timetable.ITimetableDraft, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimetableDraft message, length delimited. Does not implicitly {@link Timetable.TimetableDraft.verify|verify} messages.
         * @param message TimetableDraft message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Timetable.ITimetableDraft, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimetableDraft message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimetableDraft
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Timetable.TimetableDraft;

        /**
         * Decodes a TimetableDraft message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimetableDraft
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Timetable.TimetableDraft;

        /**
         * Verifies a TimetableDraft message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimetableDraft message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimetableDraft
         */
        public static fromObject(object: { [k: string]: any }): Timetable.TimetableDraft;

        /**
         * Creates a plain object from a TimetableDraft message. Also converts values to other types if specified.
         * @param message TimetableDraft
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Timetable.TimetableDraft, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimetableDraft to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateDraftInput. */
    interface ICreateDraftInput {

        /** CreateDraftInput name */
        name?: (string|null);
    }

    /** Represents a CreateDraftInput. */
    class CreateDraftInput implements ICreateDraftInput {

        /**
         * Constructs a new CreateDraftInput.
         * @param [properties] Properties to set
         */
        constructor(properties?: Timetable.ICreateDraftInput);

        /** CreateDraftInput name. */
        public name: string;

        /**
         * Creates a new CreateDraftInput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateDraftInput instance
         */
        public static create(properties?: Timetable.ICreateDraftInput): Timetable.CreateDraftInput;

        /**
         * Encodes the specified CreateDraftInput message. Does not implicitly {@link Timetable.CreateDraftInput.verify|verify} messages.
         * @param message CreateDraftInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Timetable.ICreateDraftInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateDraftInput message, length delimited. Does not implicitly {@link Timetable.CreateDraftInput.verify|verify} messages.
         * @param message CreateDraftInput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Timetable.ICreateDraftInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateDraftInput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateDraftInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Timetable.CreateDraftInput;

        /**
         * Decodes a CreateDraftInput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateDraftInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Timetable.CreateDraftInput;

        /**
         * Verifies a CreateDraftInput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateDraftInput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateDraftInput
         */
        public static fromObject(object: { [k: string]: any }): Timetable.CreateDraftInput;

        /**
         * Creates a plain object from a CreateDraftInput message. Also converts values to other types if specified.
         * @param message CreateDraftInput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Timetable.CreateDraftInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateDraftInput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateDraftResponse. */
    interface ICreateDraftResponse {

        /** CreateDraftResponse timetableDraft */
        timetableDraft?: (Timetable.ITimetableDraft|null);
    }

    /** Represents a CreateDraftResponse. */
    class CreateDraftResponse implements ICreateDraftResponse {

        /**
         * Constructs a new CreateDraftResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: Timetable.ICreateDraftResponse);

        /** CreateDraftResponse timetableDraft. */
        public timetableDraft?: (Timetable.ITimetableDraft|null);

        /**
         * Creates a new CreateDraftResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateDraftResponse instance
         */
        public static create(properties?: Timetable.ICreateDraftResponse): Timetable.CreateDraftResponse;

        /**
         * Encodes the specified CreateDraftResponse message. Does not implicitly {@link Timetable.CreateDraftResponse.verify|verify} messages.
         * @param message CreateDraftResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Timetable.ICreateDraftResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateDraftResponse message, length delimited. Does not implicitly {@link Timetable.CreateDraftResponse.verify|verify} messages.
         * @param message CreateDraftResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Timetable.ICreateDraftResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateDraftResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateDraftResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Timetable.CreateDraftResponse;

        /**
         * Decodes a CreateDraftResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateDraftResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Timetable.CreateDraftResponse;

        /**
         * Verifies a CreateDraftResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateDraftResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateDraftResponse
         */
        public static fromObject(object: { [k: string]: any }): Timetable.CreateDraftResponse;

        /**
         * Creates a plain object from a CreateDraftResponse message. Also converts values to other types if specified.
         * @param message CreateDraftResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Timetable.CreateDraftResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateDraftResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of an IdInput. */
export interface IIdInput {

    /** IdInput id */
    id?: (string|null);
}

/** Represents an IdInput. */
export class IdInput implements IIdInput {

    /**
     * Constructs a new IdInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IIdInput);

    /** IdInput id. */
    public id: string;

    /**
     * Creates a new IdInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IdInput instance
     */
    public static create(properties?: IIdInput): IdInput;

    /**
     * Encodes the specified IdInput message. Does not implicitly {@link IdInput.verify|verify} messages.
     * @param message IdInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IIdInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified IdInput message, length delimited. Does not implicitly {@link IdInput.verify|verify} messages.
     * @param message IdInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IIdInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IdInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IdInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IdInput;

    /**
     * Decodes an IdInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns IdInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IdInput;

    /**
     * Verifies an IdInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an IdInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns IdInput
     */
    public static fromObject(object: { [k: string]: any }): IdInput;

    /**
     * Creates a plain object from an IdInput message. Also converts values to other types if specified.
     * @param message IdInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: IdInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this IdInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
