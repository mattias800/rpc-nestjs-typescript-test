import * as $protobuf from "protobufjs";
/** Namespace Timetable. */
export namespace Timetable {

    /** Represents a TimetableChangeSetService */
    class TimetableChangeSetService extends $protobuf.rpc.Service {

        /**
         * Constructs a new TimetableChangeSetService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new TimetableChangeSetService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TimetableChangeSetService;

        /**
         * Calls CreateChangeSet.
         * @param request CreateChangeSetInput message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateChangeSetResponse
         */
        public createChangeSet(request: ICreateChangeSetInput, callback: Timetable.TimetableChangeSetService.CreateChangeSetCallback): void;

        /**
         * Calls CreateChangeSet.
         * @param request CreateChangeSetInput message or plain object
         * @returns Promise
         */
        public createChangeSet(request: ICreateChangeSetInput): Promise<CreateChangeSetResponse>;

        /**
         * Calls GetChangeSetById.
         * @param request IdInput message or plain object
         * @param callback Node-style callback called with the error, if any, and TimetableChangeSet
         */
        public getChangeSetById(request: IIdInput, callback: Timetable.TimetableChangeSetService.GetChangeSetByIdCallback): void;

        /**
         * Calls GetChangeSetById.
         * @param request IdInput message or plain object
         * @returns Promise
         */
        public getChangeSetById(request: IIdInput): Promise<TimetableChangeSet>;
    }

    namespace TimetableChangeSetService {

        /**
         * Callback as used by {@link Timetable.TimetableChangeSetService#createChangeSet}.
         * @param error Error, if any
         * @param [response] CreateChangeSetResponse
         */
        type CreateChangeSetCallback = (error: (Error|null), response?: CreateChangeSetResponse) => void;

        /**
         * Callback as used by {@link Timetable.TimetableChangeSetService#getChangeSetById}.
         * @param error Error, if any
         * @param [response] TimetableChangeSet
         */
        type GetChangeSetByIdCallback = (error: (Error|null), response?: TimetableChangeSet) => void;
    }

    /** Represents a PortService */
    class PortService extends $protobuf.rpc.Service {

        /**
         * Constructs a new PortService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new PortService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PortService;

        /**
         * Calls GetPortByCode.
         * @param request CodeInput message or plain object
         * @param callback Node-style callback called with the error, if any, and Port
         */
        public getPortByCode(request: ICodeInput, callback: Timetable.PortService.GetPortByCodeCallback): void;

        /**
         * Calls GetPortByCode.
         * @param request CodeInput message or plain object
         * @returns Promise
         */
        public getPortByCode(request: ICodeInput): Promise<Port>;

        /**
         * Calls GetTerminalByCode.
         * @param request CodeInput message or plain object
         * @param callback Node-style callback called with the error, if any, and Terminal
         */
        public getTerminalByCode(request: ICodeInput, callback: Timetable.PortService.GetTerminalByCodeCallback): void;

        /**
         * Calls GetTerminalByCode.
         * @param request CodeInput message or plain object
         * @returns Promise
         */
        public getTerminalByCode(request: ICodeInput): Promise<Terminal>;

        /**
         * Calls GetCityByCode.
         * @param request CodeInput message or plain object
         * @param callback Node-style callback called with the error, if any, and City
         */
        public getCityByCode(request: ICodeInput, callback: Timetable.PortService.GetCityByCodeCallback): void;

        /**
         * Calls GetCityByCode.
         * @param request CodeInput message or plain object
         * @returns Promise
         */
        public getCityByCode(request: ICodeInput): Promise<City>;

        /**
         * Calls GetCountryByCode.
         * @param request CodeInput message or plain object
         * @param callback Node-style callback called with the error, if any, and Country
         */
        public getCountryByCode(request: ICodeInput, callback: Timetable.PortService.GetCountryByCodeCallback): void;

        /**
         * Calls GetCountryByCode.
         * @param request CodeInput message or plain object
         * @returns Promise
         */
        public getCountryByCode(request: ICodeInput): Promise<Country>;
    }

    namespace PortService {

        /**
         * Callback as used by {@link Timetable.PortService#getPortByCode}.
         * @param error Error, if any
         * @param [response] Port
         */
        type GetPortByCodeCallback = (error: (Error|null), response?: Port) => void;

        /**
         * Callback as used by {@link Timetable.PortService#getTerminalByCode}.
         * @param error Error, if any
         * @param [response] Terminal
         */
        type GetTerminalByCodeCallback = (error: (Error|null), response?: Terminal) => void;

        /**
         * Callback as used by {@link Timetable.PortService#getCityByCode}.
         * @param error Error, if any
         * @param [response] City
         */
        type GetCityByCodeCallback = (error: (Error|null), response?: City) => void;

        /**
         * Callback as used by {@link Timetable.PortService#getCountryByCode}.
         * @param error Error, if any
         * @param [response] Country
         */
        type GetCountryByCodeCallback = (error: (Error|null), response?: Country) => void;
    }

    /** Represents a TimetableService */
    class TimetableService extends $protobuf.rpc.Service {

        /**
         * Constructs a new TimetableService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new TimetableService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TimetableService;

        /**
         * Calls SearchTimeTable.
         * @param request SearchTimeTableInput message or plain object
         * @param callback Node-style callback called with the error, if any, and SearchTimeTableResponse
         */
        public searchTimeTable(request: ISearchTimeTableInput, callback: Timetable.TimetableService.SearchTimeTableCallback): void;

        /**
         * Calls SearchTimeTable.
         * @param request SearchTimeTableInput message or plain object
         * @returns Promise
         */
        public searchTimeTable(request: ISearchTimeTableInput): Promise<SearchTimeTableResponse>;
    }

    namespace TimetableService {

        /**
         * Callback as used by {@link Timetable.TimetableService#searchTimeTable}.
         * @param error Error, if any
         * @param [response] SearchTimeTableResponse
         */
        type SearchTimeTableCallback = (error: (Error|null), response?: SearchTimeTableResponse) => void;
    }

    /** Represents a ShipService */
    class ShipService extends $protobuf.rpc.Service {

        /**
         * Constructs a new ShipService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new ShipService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ShipService;

        /**
         * Calls GetShipByCode.
         * @param request CodeInput message or plain object
         * @param callback Node-style callback called with the error, if any, and Ship
         */
        public getShipByCode(request: ICodeInput, callback: Timetable.ShipService.GetShipByCodeCallback): void;

        /**
         * Calls GetShipByCode.
         * @param request CodeInput message or plain object
         * @returns Promise
         */
        public getShipByCode(request: ICodeInput): Promise<Ship>;

        /**
         * Calls GetAllShips.
         * @param request EmptyInput message or plain object
         * @param callback Node-style callback called with the error, if any, and GetAllShipsResponse
         */
        public getAllShips(request: IEmptyInput, callback: Timetable.ShipService.GetAllShipsCallback): void;

        /**
         * Calls GetAllShips.
         * @param request EmptyInput message or plain object
         * @returns Promise
         */
        public getAllShips(request: IEmptyInput): Promise<GetAllShipsResponse>;
    }

    namespace ShipService {

        /**
         * Callback as used by {@link Timetable.ShipService#getShipByCode}.
         * @param error Error, if any
         * @param [response] Ship
         */
        type GetShipByCodeCallback = (error: (Error|null), response?: Ship) => void;

        /**
         * Callback as used by {@link Timetable.ShipService#getAllShips}.
         * @param error Error, if any
         * @param [response] GetAllShipsResponse
         */
        type GetAllShipsCallback = (error: (Error|null), response?: GetAllShipsResponse) => void;
    }
}

/** Properties of a CreateChangeSetInput. */
export interface ICreateChangeSetInput {

    /** CreateChangeSetInput name */
    name?: (string|null);
}

/** Represents a CreateChangeSetInput. */
export class CreateChangeSetInput implements ICreateChangeSetInput {

    /**
     * Constructs a new CreateChangeSetInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateChangeSetInput);

    /** CreateChangeSetInput name. */
    public name: string;

    /**
     * Creates a new CreateChangeSetInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateChangeSetInput instance
     */
    public static create(properties?: ICreateChangeSetInput): CreateChangeSetInput;

    /**
     * Encodes the specified CreateChangeSetInput message. Does not implicitly {@link CreateChangeSetInput.verify|verify} messages.
     * @param message CreateChangeSetInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateChangeSetInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateChangeSetInput message, length delimited. Does not implicitly {@link CreateChangeSetInput.verify|verify} messages.
     * @param message CreateChangeSetInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateChangeSetInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateChangeSetInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateChangeSetInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateChangeSetInput;

    /**
     * Decodes a CreateChangeSetInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateChangeSetInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateChangeSetInput;

    /**
     * Verifies a CreateChangeSetInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateChangeSetInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateChangeSetInput
     */
    public static fromObject(object: { [k: string]: any }): CreateChangeSetInput;

    /**
     * Creates a plain object from a CreateChangeSetInput message. Also converts values to other types if specified.
     * @param message CreateChangeSetInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateChangeSetInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateChangeSetInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CreateChangeSetResponse. */
export interface ICreateChangeSetResponse {

    /** CreateChangeSetResponse timetableChangeSet */
    timetableChangeSet?: (ITimetableChangeSet|null);
}

/** Represents a CreateChangeSetResponse. */
export class CreateChangeSetResponse implements ICreateChangeSetResponse {

    /**
     * Constructs a new CreateChangeSetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateChangeSetResponse);

    /** CreateChangeSetResponse timetableChangeSet. */
    public timetableChangeSet?: (ITimetableChangeSet|null);

    /**
     * Creates a new CreateChangeSetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateChangeSetResponse instance
     */
    public static create(properties?: ICreateChangeSetResponse): CreateChangeSetResponse;

    /**
     * Encodes the specified CreateChangeSetResponse message. Does not implicitly {@link CreateChangeSetResponse.verify|verify} messages.
     * @param message CreateChangeSetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateChangeSetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateChangeSetResponse message, length delimited. Does not implicitly {@link CreateChangeSetResponse.verify|verify} messages.
     * @param message CreateChangeSetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateChangeSetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateChangeSetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateChangeSetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateChangeSetResponse;

    /**
     * Decodes a CreateChangeSetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateChangeSetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateChangeSetResponse;

    /**
     * Verifies a CreateChangeSetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateChangeSetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateChangeSetResponse
     */
    public static fromObject(object: { [k: string]: any }): CreateChangeSetResponse;

    /**
     * Creates a plain object from a CreateChangeSetResponse message. Also converts values to other types if specified.
     * @param message CreateChangeSetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateChangeSetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateChangeSetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TimetableChangeSet. */
export interface ITimetableChangeSet {

    /** TimetableChangeSet id */
    id?: (string|null);

    /** TimetableChangeSet name */
    name?: (string|null);

    /** TimetableChangeSet createdBy */
    createdBy?: (string|null);

    /** TimetableChangeSet createdAt */
    createdAt?: (string|null);

    /** TimetableChangeSet additions */
    additions?: (IDepartureAddition[]|null);

    /** TimetableChangeSet modifications */
    modifications?: (IDepartureModification[]|null);

    /** TimetableChangeSet deletions */
    deletions?: (IDepartureDeletion[]|null);
}

/** Represents a TimetableChangeSet. */
export class TimetableChangeSet implements ITimetableChangeSet {

    /**
     * Constructs a new TimetableChangeSet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITimetableChangeSet);

    /** TimetableChangeSet id. */
    public id: string;

    /** TimetableChangeSet name. */
    public name: string;

    /** TimetableChangeSet createdBy. */
    public createdBy: string;

    /** TimetableChangeSet createdAt. */
    public createdAt: string;

    /** TimetableChangeSet additions. */
    public additions: IDepartureAddition[];

    /** TimetableChangeSet modifications. */
    public modifications: IDepartureModification[];

    /** TimetableChangeSet deletions. */
    public deletions: IDepartureDeletion[];

    /**
     * Creates a new TimetableChangeSet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TimetableChangeSet instance
     */
    public static create(properties?: ITimetableChangeSet): TimetableChangeSet;

    /**
     * Encodes the specified TimetableChangeSet message. Does not implicitly {@link TimetableChangeSet.verify|verify} messages.
     * @param message TimetableChangeSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITimetableChangeSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TimetableChangeSet message, length delimited. Does not implicitly {@link TimetableChangeSet.verify|verify} messages.
     * @param message TimetableChangeSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITimetableChangeSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TimetableChangeSet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TimetableChangeSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TimetableChangeSet;

    /**
     * Decodes a TimetableChangeSet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TimetableChangeSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TimetableChangeSet;

    /**
     * Verifies a TimetableChangeSet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TimetableChangeSet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TimetableChangeSet
     */
    public static fromObject(object: { [k: string]: any }): TimetableChangeSet;

    /**
     * Creates a plain object from a TimetableChangeSet message. Also converts values to other types if specified.
     * @param message TimetableChangeSet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TimetableChangeSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TimetableChangeSet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DepartureAddition. */
export interface IDepartureAddition {

    /** DepartureAddition id */
    id?: (string|null);

    /** DepartureAddition createdBy */
    createdBy?: (string|null);

    /** DepartureAddition createdAt */
    createdAt?: (string|null);

    /** DepartureAddition shipCode */
    shipCode?: (string|null);

    /** DepartureAddition plannedDeparture */
    plannedDeparture?: (string|null);

    /** DepartureAddition plannedArrival */
    plannedArrival?: (string|null);

    /** DepartureAddition departureTerminalCode */
    departureTerminalCode?: (string|null);

    /** DepartureAddition arrivalTerminalCode */
    arrivalTerminalCode?: (string|null);
}

/** Represents a DepartureAddition. */
export class DepartureAddition implements IDepartureAddition {

    /**
     * Constructs a new DepartureAddition.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDepartureAddition);

    /** DepartureAddition id. */
    public id: string;

    /** DepartureAddition createdBy. */
    public createdBy: string;

    /** DepartureAddition createdAt. */
    public createdAt: string;

    /** DepartureAddition shipCode. */
    public shipCode: string;

    /** DepartureAddition plannedDeparture. */
    public plannedDeparture: string;

    /** DepartureAddition plannedArrival. */
    public plannedArrival: string;

    /** DepartureAddition departureTerminalCode. */
    public departureTerminalCode: string;

    /** DepartureAddition arrivalTerminalCode. */
    public arrivalTerminalCode: string;

    /**
     * Creates a new DepartureAddition instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DepartureAddition instance
     */
    public static create(properties?: IDepartureAddition): DepartureAddition;

    /**
     * Encodes the specified DepartureAddition message. Does not implicitly {@link DepartureAddition.verify|verify} messages.
     * @param message DepartureAddition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDepartureAddition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DepartureAddition message, length delimited. Does not implicitly {@link DepartureAddition.verify|verify} messages.
     * @param message DepartureAddition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDepartureAddition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DepartureAddition message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DepartureAddition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DepartureAddition;

    /**
     * Decodes a DepartureAddition message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DepartureAddition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DepartureAddition;

    /**
     * Verifies a DepartureAddition message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DepartureAddition message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DepartureAddition
     */
    public static fromObject(object: { [k: string]: any }): DepartureAddition;

    /**
     * Creates a plain object from a DepartureAddition message. Also converts values to other types if specified.
     * @param message DepartureAddition
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DepartureAddition, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DepartureAddition to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DepartureModification. */
export interface IDepartureModification {

    /** DepartureModification id */
    id?: (string|null);

    /** DepartureModification createdBy */
    createdBy?: (string|null);

    /** DepartureModification createdAt */
    createdAt?: (string|null);

    /** DepartureModification departureId */
    departureId?: (string|null);

    /** DepartureModification shipCode */
    shipCode?: (IModifiedString|null);

    /** DepartureModification plannedDeparture */
    plannedDeparture?: (IModifiedString|null);

    /** DepartureModification plannedArrival */
    plannedArrival?: (IModifiedString|null);

    /** DepartureModification departureTerminalCode */
    departureTerminalCode?: (IModifiedString|null);

    /** DepartureModification arrivalTerminalCode */
    arrivalTerminalCode?: (IModifiedString|null);
}

/** Represents a DepartureModification. */
export class DepartureModification implements IDepartureModification {

    /**
     * Constructs a new DepartureModification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDepartureModification);

    /** DepartureModification id. */
    public id: string;

    /** DepartureModification createdBy. */
    public createdBy: string;

    /** DepartureModification createdAt. */
    public createdAt: string;

    /** DepartureModification departureId. */
    public departureId: string;

    /** DepartureModification shipCode. */
    public shipCode?: (IModifiedString|null);

    /** DepartureModification plannedDeparture. */
    public plannedDeparture?: (IModifiedString|null);

    /** DepartureModification plannedArrival. */
    public plannedArrival?: (IModifiedString|null);

    /** DepartureModification departureTerminalCode. */
    public departureTerminalCode?: (IModifiedString|null);

    /** DepartureModification arrivalTerminalCode. */
    public arrivalTerminalCode?: (IModifiedString|null);

    /**
     * Creates a new DepartureModification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DepartureModification instance
     */
    public static create(properties?: IDepartureModification): DepartureModification;

    /**
     * Encodes the specified DepartureModification message. Does not implicitly {@link DepartureModification.verify|verify} messages.
     * @param message DepartureModification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDepartureModification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DepartureModification message, length delimited. Does not implicitly {@link DepartureModification.verify|verify} messages.
     * @param message DepartureModification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDepartureModification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DepartureModification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DepartureModification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DepartureModification;

    /**
     * Decodes a DepartureModification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DepartureModification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DepartureModification;

    /**
     * Verifies a DepartureModification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DepartureModification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DepartureModification
     */
    public static fromObject(object: { [k: string]: any }): DepartureModification;

    /**
     * Creates a plain object from a DepartureModification message. Also converts values to other types if specified.
     * @param message DepartureModification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DepartureModification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DepartureModification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DepartureDeletion. */
export interface IDepartureDeletion {

    /** DepartureDeletion id */
    id?: (string|null);

    /** DepartureDeletion createdBy */
    createdBy?: (string|null);

    /** DepartureDeletion createdAt */
    createdAt?: (string|null);

    /** DepartureDeletion departureId */
    departureId?: (string|null);
}

/** Represents a DepartureDeletion. */
export class DepartureDeletion implements IDepartureDeletion {

    /**
     * Constructs a new DepartureDeletion.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDepartureDeletion);

    /** DepartureDeletion id. */
    public id: string;

    /** DepartureDeletion createdBy. */
    public createdBy: string;

    /** DepartureDeletion createdAt. */
    public createdAt: string;

    /** DepartureDeletion departureId. */
    public departureId: string;

    /**
     * Creates a new DepartureDeletion instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DepartureDeletion instance
     */
    public static create(properties?: IDepartureDeletion): DepartureDeletion;

    /**
     * Encodes the specified DepartureDeletion message. Does not implicitly {@link DepartureDeletion.verify|verify} messages.
     * @param message DepartureDeletion message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDepartureDeletion, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DepartureDeletion message, length delimited. Does not implicitly {@link DepartureDeletion.verify|verify} messages.
     * @param message DepartureDeletion message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDepartureDeletion, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DepartureDeletion message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DepartureDeletion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DepartureDeletion;

    /**
     * Decodes a DepartureDeletion message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DepartureDeletion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DepartureDeletion;

    /**
     * Verifies a DepartureDeletion message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DepartureDeletion message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DepartureDeletion
     */
    public static fromObject(object: { [k: string]: any }): DepartureDeletion;

    /**
     * Creates a plain object from a DepartureDeletion message. Also converts values to other types if specified.
     * @param message DepartureDeletion
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DepartureDeletion, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DepartureDeletion to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
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

/** Properties of a CodeInput. */
export interface ICodeInput {

    /** CodeInput code */
    code?: (string|null);
}

/** Represents a CodeInput. */
export class CodeInput implements ICodeInput {

    /**
     * Constructs a new CodeInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICodeInput);

    /** CodeInput code. */
    public code: string;

    /**
     * Creates a new CodeInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CodeInput instance
     */
    public static create(properties?: ICodeInput): CodeInput;

    /**
     * Encodes the specified CodeInput message. Does not implicitly {@link CodeInput.verify|verify} messages.
     * @param message CodeInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICodeInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CodeInput message, length delimited. Does not implicitly {@link CodeInput.verify|verify} messages.
     * @param message CodeInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICodeInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CodeInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CodeInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CodeInput;

    /**
     * Decodes a CodeInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CodeInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CodeInput;

    /**
     * Verifies a CodeInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CodeInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CodeInput
     */
    public static fromObject(object: { [k: string]: any }): CodeInput;

    /**
     * Creates a plain object from a CodeInput message. Also converts values to other types if specified.
     * @param message CodeInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CodeInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CodeInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EmptyInput. */
export interface IEmptyInput {
}

/** Represents an EmptyInput. */
export class EmptyInput implements IEmptyInput {

    /**
     * Constructs a new EmptyInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEmptyInput);

    /**
     * Creates a new EmptyInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EmptyInput instance
     */
    public static create(properties?: IEmptyInput): EmptyInput;

    /**
     * Encodes the specified EmptyInput message. Does not implicitly {@link EmptyInput.verify|verify} messages.
     * @param message EmptyInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEmptyInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EmptyInput message, length delimited. Does not implicitly {@link EmptyInput.verify|verify} messages.
     * @param message EmptyInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEmptyInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EmptyInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EmptyInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmptyInput;

    /**
     * Decodes an EmptyInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EmptyInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmptyInput;

    /**
     * Verifies an EmptyInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EmptyInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EmptyInput
     */
    public static fromObject(object: { [k: string]: any }): EmptyInput;

    /**
     * Creates a plain object from an EmptyInput message. Also converts values to other types if specified.
     * @param message EmptyInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EmptyInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EmptyInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ModifiedString. */
export interface IModifiedString {

    /** ModifiedString isModified */
    isModified?: (boolean|null);

    /** ModifiedString value */
    value?: (string|null);
}

/** Represents a ModifiedString. */
export class ModifiedString implements IModifiedString {

    /**
     * Constructs a new ModifiedString.
     * @param [properties] Properties to set
     */
    constructor(properties?: IModifiedString);

    /** ModifiedString isModified. */
    public isModified: boolean;

    /** ModifiedString value. */
    public value: string;

    /**
     * Creates a new ModifiedString instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ModifiedString instance
     */
    public static create(properties?: IModifiedString): ModifiedString;

    /**
     * Encodes the specified ModifiedString message. Does not implicitly {@link ModifiedString.verify|verify} messages.
     * @param message ModifiedString message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IModifiedString, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ModifiedString message, length delimited. Does not implicitly {@link ModifiedString.verify|verify} messages.
     * @param message ModifiedString message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IModifiedString, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModifiedString message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ModifiedString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ModifiedString;

    /**
     * Decodes a ModifiedString message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ModifiedString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ModifiedString;

    /**
     * Verifies a ModifiedString message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ModifiedString message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ModifiedString
     */
    public static fromObject(object: { [k: string]: any }): ModifiedString;

    /**
     * Creates a plain object from a ModifiedString message. Also converts values to other types if specified.
     * @param message ModifiedString
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ModifiedString, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ModifiedString to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Terminal. */
export interface ITerminal {

    /** Terminal id */
    id?: (string|null);

    /** Terminal code */
    code?: (string|null);

    /** Terminal portCode */
    portCode?: (string|null);

    /** Terminal name */
    name?: (string|null);
}

/** Represents a Terminal. */
export class Terminal implements ITerminal {

    /**
     * Constructs a new Terminal.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITerminal);

    /** Terminal id. */
    public id: string;

    /** Terminal code. */
    public code: string;

    /** Terminal portCode. */
    public portCode: string;

    /** Terminal name. */
    public name: string;

    /**
     * Creates a new Terminal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Terminal instance
     */
    public static create(properties?: ITerminal): Terminal;

    /**
     * Encodes the specified Terminal message. Does not implicitly {@link Terminal.verify|verify} messages.
     * @param message Terminal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITerminal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Terminal message, length delimited. Does not implicitly {@link Terminal.verify|verify} messages.
     * @param message Terminal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITerminal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Terminal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Terminal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Terminal;

    /**
     * Decodes a Terminal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Terminal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Terminal;

    /**
     * Verifies a Terminal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Terminal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Terminal
     */
    public static fromObject(object: { [k: string]: any }): Terminal;

    /**
     * Creates a plain object from a Terminal message. Also converts values to other types if specified.
     * @param message Terminal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Terminal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Terminal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Port. */
export interface IPort {

    /** Port id */
    id?: (string|null);

    /** Port code */
    code?: (string|null);

    /** Port cityCode */
    cityCode?: (string|null);

    /** Port name */
    name?: (string|null);
}

/** Represents a Port. */
export class Port implements IPort {

    /**
     * Constructs a new Port.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPort);

    /** Port id. */
    public id: string;

    /** Port code. */
    public code: string;

    /** Port cityCode. */
    public cityCode: string;

    /** Port name. */
    public name: string;

    /**
     * Creates a new Port instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Port instance
     */
    public static create(properties?: IPort): Port;

    /**
     * Encodes the specified Port message. Does not implicitly {@link Port.verify|verify} messages.
     * @param message Port message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPort, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Port message, length delimited. Does not implicitly {@link Port.verify|verify} messages.
     * @param message Port message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPort, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Port message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Port
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Port;

    /**
     * Decodes a Port message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Port
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Port;

    /**
     * Verifies a Port message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Port message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Port
     */
    public static fromObject(object: { [k: string]: any }): Port;

    /**
     * Creates a plain object from a Port message. Also converts values to other types if specified.
     * @param message Port
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Port, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Port to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a City. */
export interface ICity {

    /** City id */
    id?: (string|null);

    /** City code */
    code?: (string|null);

    /** City countryCode */
    countryCode?: (string|null);

    /** City name */
    name?: (string|null);

    /** City timezone */
    timezone?: (ITimeZone|null);
}

/** Represents a City. */
export class City implements ICity {

    /**
     * Constructs a new City.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICity);

    /** City id. */
    public id: string;

    /** City code. */
    public code: string;

    /** City countryCode. */
    public countryCode: string;

    /** City name. */
    public name: string;

    /** City timezone. */
    public timezone?: (ITimeZone|null);

    /**
     * Creates a new City instance using the specified properties.
     * @param [properties] Properties to set
     * @returns City instance
     */
    public static create(properties?: ICity): City;

    /**
     * Encodes the specified City message. Does not implicitly {@link City.verify|verify} messages.
     * @param message City message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified City message, length delimited. Does not implicitly {@link City.verify|verify} messages.
     * @param message City message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a City message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns City
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): City;

    /**
     * Decodes a City message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns City
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): City;

    /**
     * Verifies a City message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a City message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns City
     */
    public static fromObject(object: { [k: string]: any }): City;

    /**
     * Creates a plain object from a City message. Also converts values to other types if specified.
     * @param message City
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: City, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this City to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Country. */
export interface ICountry {

    /** Country id */
    id?: (string|null);

    /** Country code */
    code?: (string|null);

    /** Country name */
    name?: (string|null);

    /** Country timezone */
    timezone?: (ITimeZone|null);
}

/** Represents a Country. */
export class Country implements ICountry {

    /**
     * Constructs a new Country.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICountry);

    /** Country id. */
    public id: string;

    /** Country code. */
    public code: string;

    /** Country name. */
    public name: string;

    /** Country timezone. */
    public timezone?: (ITimeZone|null);

    /**
     * Creates a new Country instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Country instance
     */
    public static create(properties?: ICountry): Country;

    /**
     * Encodes the specified Country message. Does not implicitly {@link Country.verify|verify} messages.
     * @param message Country message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICountry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Country message, length delimited. Does not implicitly {@link Country.verify|verify} messages.
     * @param message Country message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICountry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Country message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Country
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Country;

    /**
     * Decodes a Country message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Country
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Country;

    /**
     * Verifies a Country message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Country message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Country
     */
    public static fromObject(object: { [k: string]: any }): Country;

    /**
     * Creates a plain object from a Country message. Also converts values to other types if specified.
     * @param message Country
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Country, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Country to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TimeZone. */
export interface ITimeZone {

    /** TimeZone offset */
    offset?: (number|null);
}

/** Represents a TimeZone. */
export class TimeZone implements ITimeZone {

    /**
     * Constructs a new TimeZone.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITimeZone);

    /** TimeZone offset. */
    public offset: number;

    /**
     * Creates a new TimeZone instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TimeZone instance
     */
    public static create(properties?: ITimeZone): TimeZone;

    /**
     * Encodes the specified TimeZone message. Does not implicitly {@link TimeZone.verify|verify} messages.
     * @param message TimeZone message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TimeZone message, length delimited. Does not implicitly {@link TimeZone.verify|verify} messages.
     * @param message TimeZone message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TimeZone message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TimeZone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TimeZone;

    /**
     * Decodes a TimeZone message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TimeZone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TimeZone;

    /**
     * Verifies a TimeZone message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TimeZone message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TimeZone
     */
    public static fromObject(object: { [k: string]: any }): TimeZone;

    /**
     * Creates a plain object from a TimeZone message. Also converts values to other types if specified.
     * @param message TimeZone
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TimeZone, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TimeZone to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SearchTimeTableInput. */
export interface ISearchTimeTableInput {

    /** SearchTimeTableInput terminals */
    terminals?: (IFromToTerminals[]|null);

    /** SearchTimeTableInput startDate */
    startDate?: (string|null);

    /** SearchTimeTableInput endDate */
    endDate?: (string|null);
}

/** Represents a SearchTimeTableInput. */
export class SearchTimeTableInput implements ISearchTimeTableInput {

    /**
     * Constructs a new SearchTimeTableInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISearchTimeTableInput);

    /** SearchTimeTableInput terminals. */
    public terminals: IFromToTerminals[];

    /** SearchTimeTableInput startDate. */
    public startDate: string;

    /** SearchTimeTableInput endDate. */
    public endDate: string;

    /**
     * Creates a new SearchTimeTableInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SearchTimeTableInput instance
     */
    public static create(properties?: ISearchTimeTableInput): SearchTimeTableInput;

    /**
     * Encodes the specified SearchTimeTableInput message. Does not implicitly {@link SearchTimeTableInput.verify|verify} messages.
     * @param message SearchTimeTableInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISearchTimeTableInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SearchTimeTableInput message, length delimited. Does not implicitly {@link SearchTimeTableInput.verify|verify} messages.
     * @param message SearchTimeTableInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISearchTimeTableInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SearchTimeTableInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SearchTimeTableInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchTimeTableInput;

    /**
     * Decodes a SearchTimeTableInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SearchTimeTableInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchTimeTableInput;

    /**
     * Verifies a SearchTimeTableInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SearchTimeTableInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SearchTimeTableInput
     */
    public static fromObject(object: { [k: string]: any }): SearchTimeTableInput;

    /**
     * Creates a plain object from a SearchTimeTableInput message. Also converts values to other types if specified.
     * @param message SearchTimeTableInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SearchTimeTableInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SearchTimeTableInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FromToTerminals. */
export interface IFromToTerminals {

    /** FromToTerminals fromTerminalCode */
    fromTerminalCode?: (string|null);

    /** FromToTerminals toTerminalCode */
    toTerminalCode?: (string|null);
}

/** Represents a FromToTerminals. */
export class FromToTerminals implements IFromToTerminals {

    /**
     * Constructs a new FromToTerminals.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFromToTerminals);

    /** FromToTerminals fromTerminalCode. */
    public fromTerminalCode: string;

    /** FromToTerminals toTerminalCode. */
    public toTerminalCode: string;

    /**
     * Creates a new FromToTerminals instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FromToTerminals instance
     */
    public static create(properties?: IFromToTerminals): FromToTerminals;

    /**
     * Encodes the specified FromToTerminals message. Does not implicitly {@link FromToTerminals.verify|verify} messages.
     * @param message FromToTerminals message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFromToTerminals, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FromToTerminals message, length delimited. Does not implicitly {@link FromToTerminals.verify|verify} messages.
     * @param message FromToTerminals message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFromToTerminals, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FromToTerminals message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FromToTerminals
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FromToTerminals;

    /**
     * Decodes a FromToTerminals message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FromToTerminals
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FromToTerminals;

    /**
     * Verifies a FromToTerminals message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FromToTerminals message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FromToTerminals
     */
    public static fromObject(object: { [k: string]: any }): FromToTerminals;

    /**
     * Creates a plain object from a FromToTerminals message. Also converts values to other types if specified.
     * @param message FromToTerminals
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FromToTerminals, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FromToTerminals to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SearchTimeTableResponse. */
export interface ISearchTimeTableResponse {

    /** SearchTimeTableResponse departures */
    departures?: (IDeparture[]|null);
}

/** Represents a SearchTimeTableResponse. */
export class SearchTimeTableResponse implements ISearchTimeTableResponse {

    /**
     * Constructs a new SearchTimeTableResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISearchTimeTableResponse);

    /** SearchTimeTableResponse departures. */
    public departures: IDeparture[];

    /**
     * Creates a new SearchTimeTableResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SearchTimeTableResponse instance
     */
    public static create(properties?: ISearchTimeTableResponse): SearchTimeTableResponse;

    /**
     * Encodes the specified SearchTimeTableResponse message. Does not implicitly {@link SearchTimeTableResponse.verify|verify} messages.
     * @param message SearchTimeTableResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISearchTimeTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SearchTimeTableResponse message, length delimited. Does not implicitly {@link SearchTimeTableResponse.verify|verify} messages.
     * @param message SearchTimeTableResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISearchTimeTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SearchTimeTableResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SearchTimeTableResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchTimeTableResponse;

    /**
     * Decodes a SearchTimeTableResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SearchTimeTableResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchTimeTableResponse;

    /**
     * Verifies a SearchTimeTableResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SearchTimeTableResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SearchTimeTableResponse
     */
    public static fromObject(object: { [k: string]: any }): SearchTimeTableResponse;

    /**
     * Creates a plain object from a SearchTimeTableResponse message. Also converts values to other types if specified.
     * @param message SearchTimeTableResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SearchTimeTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SearchTimeTableResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Departure. */
export interface IDeparture {

    /** Departure id */
    id?: (string|null);

    /** Departure shipCode */
    shipCode?: (string|null);

    /** Departure departure */
    departure?: (ITerminalSchedule|null);

    /** Departure arrival */
    arrival?: (ITerminalSchedule|null);

    /** Departure loadingTime */
    loadingTime?: (string|null);

    /** Departure rampTime */
    rampTime?: (string|null);
}

/** Represents a Departure. */
export class Departure implements IDeparture {

    /**
     * Constructs a new Departure.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeparture);

    /** Departure id. */
    public id: string;

    /** Departure shipCode. */
    public shipCode: string;

    /** Departure departure. */
    public departure?: (ITerminalSchedule|null);

    /** Departure arrival. */
    public arrival?: (ITerminalSchedule|null);

    /** Departure loadingTime. */
    public loadingTime: string;

    /** Departure rampTime. */
    public rampTime: string;

    /**
     * Creates a new Departure instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Departure instance
     */
    public static create(properties?: IDeparture): Departure;

    /**
     * Encodes the specified Departure message. Does not implicitly {@link Departure.verify|verify} messages.
     * @param message Departure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeparture, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Departure message, length delimited. Does not implicitly {@link Departure.verify|verify} messages.
     * @param message Departure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeparture, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Departure message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Departure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Departure;

    /**
     * Decodes a Departure message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Departure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Departure;

    /**
     * Verifies a Departure message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Departure message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Departure
     */
    public static fromObject(object: { [k: string]: any }): Departure;

    /**
     * Creates a plain object from a Departure message. Also converts values to other types if specified.
     * @param message Departure
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Departure, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Departure to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TerminalSchedule. */
export interface ITerminalSchedule {

    /** TerminalSchedule terminalCode */
    terminalCode?: (string|null);

    /** TerminalSchedule plannedTime */
    plannedTime?: (string|null);

    /** TerminalSchedule estimatedTime */
    estimatedTime?: (string|null);

    /** TerminalSchedule actualTime */
    actualTime?: (string|null);
}

/** Represents a TerminalSchedule. */
export class TerminalSchedule implements ITerminalSchedule {

    /**
     * Constructs a new TerminalSchedule.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITerminalSchedule);

    /** TerminalSchedule terminalCode. */
    public terminalCode: string;

    /** TerminalSchedule plannedTime. */
    public plannedTime: string;

    /** TerminalSchedule estimatedTime. */
    public estimatedTime: string;

    /** TerminalSchedule actualTime. */
    public actualTime: string;

    /**
     * Creates a new TerminalSchedule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TerminalSchedule instance
     */
    public static create(properties?: ITerminalSchedule): TerminalSchedule;

    /**
     * Encodes the specified TerminalSchedule message. Does not implicitly {@link TerminalSchedule.verify|verify} messages.
     * @param message TerminalSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITerminalSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TerminalSchedule message, length delimited. Does not implicitly {@link TerminalSchedule.verify|verify} messages.
     * @param message TerminalSchedule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITerminalSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TerminalSchedule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TerminalSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TerminalSchedule;

    /**
     * Decodes a TerminalSchedule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TerminalSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TerminalSchedule;

    /**
     * Verifies a TerminalSchedule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TerminalSchedule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TerminalSchedule
     */
    public static fromObject(object: { [k: string]: any }): TerminalSchedule;

    /**
     * Creates a plain object from a TerminalSchedule message. Also converts values to other types if specified.
     * @param message TerminalSchedule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TerminalSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TerminalSchedule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Ship. */
export interface IShip {

    /** Ship id */
    id?: (string|null);

    /** Ship code */
    code?: (string|null);

    /** Ship name */
    name?: (string|null);

    /** Ship imo */
    imo?: (string|null);
}

/** Represents a Ship. */
export class Ship implements IShip {

    /**
     * Constructs a new Ship.
     * @param [properties] Properties to set
     */
    constructor(properties?: IShip);

    /** Ship id. */
    public id: string;

    /** Ship code. */
    public code: string;

    /** Ship name. */
    public name: string;

    /** Ship imo. */
    public imo: string;

    /**
     * Creates a new Ship instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Ship instance
     */
    public static create(properties?: IShip): Ship;

    /**
     * Encodes the specified Ship message. Does not implicitly {@link Ship.verify|verify} messages.
     * @param message Ship message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IShip, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Ship message, length delimited. Does not implicitly {@link Ship.verify|verify} messages.
     * @param message Ship message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IShip, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Ship message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Ship
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ship;

    /**
     * Decodes a Ship message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Ship
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ship;

    /**
     * Verifies a Ship message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Ship message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Ship
     */
    public static fromObject(object: { [k: string]: any }): Ship;

    /**
     * Creates a plain object from a Ship message. Also converts values to other types if specified.
     * @param message Ship
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Ship, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Ship to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetAllShipsResponse. */
export interface IGetAllShipsResponse {

    /** GetAllShipsResponse ships */
    ships?: (IShip[]|null);
}

/** Represents a GetAllShipsResponse. */
export class GetAllShipsResponse implements IGetAllShipsResponse {

    /**
     * Constructs a new GetAllShipsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetAllShipsResponse);

    /** GetAllShipsResponse ships. */
    public ships: IShip[];

    /**
     * Creates a new GetAllShipsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetAllShipsResponse instance
     */
    public static create(properties?: IGetAllShipsResponse): GetAllShipsResponse;

    /**
     * Encodes the specified GetAllShipsResponse message. Does not implicitly {@link GetAllShipsResponse.verify|verify} messages.
     * @param message GetAllShipsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetAllShipsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetAllShipsResponse message, length delimited. Does not implicitly {@link GetAllShipsResponse.verify|verify} messages.
     * @param message GetAllShipsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetAllShipsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetAllShipsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetAllShipsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetAllShipsResponse;

    /**
     * Decodes a GetAllShipsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetAllShipsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetAllShipsResponse;

    /**
     * Verifies a GetAllShipsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetAllShipsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetAllShipsResponse
     */
    public static fromObject(object: { [k: string]: any }): GetAllShipsResponse;

    /**
     * Creates a plain object from a GetAllShipsResponse message. Also converts values to other types if specified.
     * @param message GetAllShipsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetAllShipsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetAllShipsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
