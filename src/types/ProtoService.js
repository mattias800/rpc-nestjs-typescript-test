/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Timetable = (function() {

    /**
     * Namespace Timetable.
     * @exports Timetable
     * @namespace
     */
    var Timetable = {};

    Timetable.TimetableChangeSetService = (function() {

        /**
         * Constructs a new TimetableChangeSetService service.
         * @memberof Timetable
         * @classdesc Represents a TimetableChangeSetService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function TimetableChangeSetService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (TimetableChangeSetService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TimetableChangeSetService;

        /**
         * Creates new TimetableChangeSetService service using the specified rpc implementation.
         * @function create
         * @memberof Timetable.TimetableChangeSetService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {TimetableChangeSetService} RPC service. Useful where requests and/or responses are streamed.
         */
        TimetableChangeSetService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link Timetable.TimetableChangeSetService#createChangeSet}.
         * @memberof Timetable.TimetableChangeSetService
         * @typedef CreateChangeSetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {CreateChangeSetResponse} [response] CreateChangeSetResponse
         */

        /**
         * Calls CreateChangeSet.
         * @function createChangeSet
         * @memberof Timetable.TimetableChangeSetService
         * @instance
         * @param {ICreateChangeSetInput} request CreateChangeSetInput message or plain object
         * @param {Timetable.TimetableChangeSetService.CreateChangeSetCallback} callback Node-style callback called with the error, if any, and CreateChangeSetResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TimetableChangeSetService.prototype.createChangeSet = function createChangeSet(request, callback) {
            return this.rpcCall(createChangeSet, $root.CreateChangeSetInput, $root.CreateChangeSetResponse, request, callback);
        }, "name", { value: "CreateChangeSet" });

        /**
         * Calls CreateChangeSet.
         * @function createChangeSet
         * @memberof Timetable.TimetableChangeSetService
         * @instance
         * @param {ICreateChangeSetInput} request CreateChangeSetInput message or plain object
         * @returns {Promise<CreateChangeSetResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link Timetable.TimetableChangeSetService#getChangeSetById}.
         * @memberof Timetable.TimetableChangeSetService
         * @typedef GetChangeSetByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {TimetableChangeSet} [response] TimetableChangeSet
         */

        /**
         * Calls GetChangeSetById.
         * @function getChangeSetById
         * @memberof Timetable.TimetableChangeSetService
         * @instance
         * @param {IIdInput} request IdInput message or plain object
         * @param {Timetable.TimetableChangeSetService.GetChangeSetByIdCallback} callback Node-style callback called with the error, if any, and TimetableChangeSet
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TimetableChangeSetService.prototype.getChangeSetById = function getChangeSetById(request, callback) {
            return this.rpcCall(getChangeSetById, $root.IdInput, $root.TimetableChangeSet, request, callback);
        }, "name", { value: "GetChangeSetById" });

        /**
         * Calls GetChangeSetById.
         * @function getChangeSetById
         * @memberof Timetable.TimetableChangeSetService
         * @instance
         * @param {IIdInput} request IdInput message or plain object
         * @returns {Promise<TimetableChangeSet>} Promise
         * @variation 2
         */

        return TimetableChangeSetService;
    })();

    Timetable.PortService = (function() {

        /**
         * Constructs a new PortService service.
         * @memberof Timetable
         * @classdesc Represents a PortService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function PortService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (PortService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PortService;

        /**
         * Creates new PortService service using the specified rpc implementation.
         * @function create
         * @memberof Timetable.PortService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {PortService} RPC service. Useful where requests and/or responses are streamed.
         */
        PortService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link Timetable.PortService#getPortByCode}.
         * @memberof Timetable.PortService
         * @typedef GetPortByCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {Port} [response] Port
         */

        /**
         * Calls GetPortByCode.
         * @function getPortByCode
         * @memberof Timetable.PortService
         * @instance
         * @param {ICodeInput} request CodeInput message or plain object
         * @param {Timetable.PortService.GetPortByCodeCallback} callback Node-style callback called with the error, if any, and Port
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PortService.prototype.getPortByCode = function getPortByCode(request, callback) {
            return this.rpcCall(getPortByCode, $root.CodeInput, $root.Port, request, callback);
        }, "name", { value: "GetPortByCode" });

        /**
         * Calls GetPortByCode.
         * @function getPortByCode
         * @memberof Timetable.PortService
         * @instance
         * @param {ICodeInput} request CodeInput message or plain object
         * @returns {Promise<Port>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link Timetable.PortService#getTerminalByCode}.
         * @memberof Timetable.PortService
         * @typedef GetTerminalByCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {Terminal} [response] Terminal
         */

        /**
         * Calls GetTerminalByCode.
         * @function getTerminalByCode
         * @memberof Timetable.PortService
         * @instance
         * @param {ICodeInput} request CodeInput message or plain object
         * @param {Timetable.PortService.GetTerminalByCodeCallback} callback Node-style callback called with the error, if any, and Terminal
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PortService.prototype.getTerminalByCode = function getTerminalByCode(request, callback) {
            return this.rpcCall(getTerminalByCode, $root.CodeInput, $root.Terminal, request, callback);
        }, "name", { value: "GetTerminalByCode" });

        /**
         * Calls GetTerminalByCode.
         * @function getTerminalByCode
         * @memberof Timetable.PortService
         * @instance
         * @param {ICodeInput} request CodeInput message or plain object
         * @returns {Promise<Terminal>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link Timetable.PortService#getCityByCode}.
         * @memberof Timetable.PortService
         * @typedef GetCityByCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {City} [response] City
         */

        /**
         * Calls GetCityByCode.
         * @function getCityByCode
         * @memberof Timetable.PortService
         * @instance
         * @param {ICodeInput} request CodeInput message or plain object
         * @param {Timetable.PortService.GetCityByCodeCallback} callback Node-style callback called with the error, if any, and City
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PortService.prototype.getCityByCode = function getCityByCode(request, callback) {
            return this.rpcCall(getCityByCode, $root.CodeInput, $root.City, request, callback);
        }, "name", { value: "GetCityByCode" });

        /**
         * Calls GetCityByCode.
         * @function getCityByCode
         * @memberof Timetable.PortService
         * @instance
         * @param {ICodeInput} request CodeInput message or plain object
         * @returns {Promise<City>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link Timetable.PortService#getCountryByCode}.
         * @memberof Timetable.PortService
         * @typedef GetCountryByCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {Country} [response] Country
         */

        /**
         * Calls GetCountryByCode.
         * @function getCountryByCode
         * @memberof Timetable.PortService
         * @instance
         * @param {ICodeInput} request CodeInput message or plain object
         * @param {Timetable.PortService.GetCountryByCodeCallback} callback Node-style callback called with the error, if any, and Country
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PortService.prototype.getCountryByCode = function getCountryByCode(request, callback) {
            return this.rpcCall(getCountryByCode, $root.CodeInput, $root.Country, request, callback);
        }, "name", { value: "GetCountryByCode" });

        /**
         * Calls GetCountryByCode.
         * @function getCountryByCode
         * @memberof Timetable.PortService
         * @instance
         * @param {ICodeInput} request CodeInput message or plain object
         * @returns {Promise<Country>} Promise
         * @variation 2
         */

        return PortService;
    })();

    Timetable.TimetableService = (function() {

        /**
         * Constructs a new TimetableService service.
         * @memberof Timetable
         * @classdesc Represents a TimetableService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function TimetableService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (TimetableService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TimetableService;

        /**
         * Creates new TimetableService service using the specified rpc implementation.
         * @function create
         * @memberof Timetable.TimetableService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {TimetableService} RPC service. Useful where requests and/or responses are streamed.
         */
        TimetableService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link Timetable.TimetableService#searchTimeTable}.
         * @memberof Timetable.TimetableService
         * @typedef SearchTimeTableCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {SearchTimeTableResponse} [response] SearchTimeTableResponse
         */

        /**
         * Calls SearchTimeTable.
         * @function searchTimeTable
         * @memberof Timetable.TimetableService
         * @instance
         * @param {ISearchTimeTableInput} request SearchTimeTableInput message or plain object
         * @param {Timetable.TimetableService.SearchTimeTableCallback} callback Node-style callback called with the error, if any, and SearchTimeTableResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TimetableService.prototype.searchTimeTable = function searchTimeTable(request, callback) {
            return this.rpcCall(searchTimeTable, $root.SearchTimeTableInput, $root.SearchTimeTableResponse, request, callback);
        }, "name", { value: "SearchTimeTable" });

        /**
         * Calls SearchTimeTable.
         * @function searchTimeTable
         * @memberof Timetable.TimetableService
         * @instance
         * @param {ISearchTimeTableInput} request SearchTimeTableInput message or plain object
         * @returns {Promise<SearchTimeTableResponse>} Promise
         * @variation 2
         */

        return TimetableService;
    })();

    Timetable.ShipService = (function() {

        /**
         * Constructs a new ShipService service.
         * @memberof Timetable
         * @classdesc Represents a ShipService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ShipService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ShipService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ShipService;

        /**
         * Creates new ShipService service using the specified rpc implementation.
         * @function create
         * @memberof Timetable.ShipService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ShipService} RPC service. Useful where requests and/or responses are streamed.
         */
        ShipService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link Timetable.ShipService#getShipByCode}.
         * @memberof Timetable.ShipService
         * @typedef GetShipByCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {Ship} [response] Ship
         */

        /**
         * Calls GetShipByCode.
         * @function getShipByCode
         * @memberof Timetable.ShipService
         * @instance
         * @param {ICodeInput} request CodeInput message or plain object
         * @param {Timetable.ShipService.GetShipByCodeCallback} callback Node-style callback called with the error, if any, and Ship
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShipService.prototype.getShipByCode = function getShipByCode(request, callback) {
            return this.rpcCall(getShipByCode, $root.CodeInput, $root.Ship, request, callback);
        }, "name", { value: "GetShipByCode" });

        /**
         * Calls GetShipByCode.
         * @function getShipByCode
         * @memberof Timetable.ShipService
         * @instance
         * @param {ICodeInput} request CodeInput message or plain object
         * @returns {Promise<Ship>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link Timetable.ShipService#getAllShips}.
         * @memberof Timetable.ShipService
         * @typedef GetAllShipsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {GetAllShipsResponse} [response] GetAllShipsResponse
         */

        /**
         * Calls GetAllShips.
         * @function getAllShips
         * @memberof Timetable.ShipService
         * @instance
         * @param {IEmptyInput} request EmptyInput message or plain object
         * @param {Timetable.ShipService.GetAllShipsCallback} callback Node-style callback called with the error, if any, and GetAllShipsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShipService.prototype.getAllShips = function getAllShips(request, callback) {
            return this.rpcCall(getAllShips, $root.EmptyInput, $root.GetAllShipsResponse, request, callback);
        }, "name", { value: "GetAllShips" });

        /**
         * Calls GetAllShips.
         * @function getAllShips
         * @memberof Timetable.ShipService
         * @instance
         * @param {IEmptyInput} request EmptyInput message or plain object
         * @returns {Promise<GetAllShipsResponse>} Promise
         * @variation 2
         */

        return ShipService;
    })();

    return Timetable;
})();

$root.CreateChangeSetInput = (function() {

    /**
     * Properties of a CreateChangeSetInput.
     * @exports ICreateChangeSetInput
     * @interface ICreateChangeSetInput
     * @property {string|null} [name] CreateChangeSetInput name
     */

    /**
     * Constructs a new CreateChangeSetInput.
     * @exports CreateChangeSetInput
     * @classdesc Represents a CreateChangeSetInput.
     * @implements ICreateChangeSetInput
     * @constructor
     * @param {ICreateChangeSetInput=} [properties] Properties to set
     */
    function CreateChangeSetInput(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateChangeSetInput name.
     * @member {string} name
     * @memberof CreateChangeSetInput
     * @instance
     */
    CreateChangeSetInput.prototype.name = "";

    /**
     * Creates a new CreateChangeSetInput instance using the specified properties.
     * @function create
     * @memberof CreateChangeSetInput
     * @static
     * @param {ICreateChangeSetInput=} [properties] Properties to set
     * @returns {CreateChangeSetInput} CreateChangeSetInput instance
     */
    CreateChangeSetInput.create = function create(properties) {
        return new CreateChangeSetInput(properties);
    };

    /**
     * Encodes the specified CreateChangeSetInput message. Does not implicitly {@link CreateChangeSetInput.verify|verify} messages.
     * @function encode
     * @memberof CreateChangeSetInput
     * @static
     * @param {ICreateChangeSetInput} message CreateChangeSetInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateChangeSetInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified CreateChangeSetInput message, length delimited. Does not implicitly {@link CreateChangeSetInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateChangeSetInput
     * @static
     * @param {ICreateChangeSetInput} message CreateChangeSetInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateChangeSetInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateChangeSetInput message from the specified reader or buffer.
     * @function decode
     * @memberof CreateChangeSetInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateChangeSetInput} CreateChangeSetInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateChangeSetInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateChangeSetInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateChangeSetInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateChangeSetInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateChangeSetInput} CreateChangeSetInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateChangeSetInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateChangeSetInput message.
     * @function verify
     * @memberof CreateChangeSetInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateChangeSetInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a CreateChangeSetInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateChangeSetInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateChangeSetInput} CreateChangeSetInput
     */
    CreateChangeSetInput.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateChangeSetInput)
            return object;
        var message = new $root.CreateChangeSetInput();
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a CreateChangeSetInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateChangeSetInput
     * @static
     * @param {CreateChangeSetInput} message CreateChangeSetInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateChangeSetInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this CreateChangeSetInput to JSON.
     * @function toJSON
     * @memberof CreateChangeSetInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateChangeSetInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateChangeSetInput;
})();

$root.CreateChangeSetResponse = (function() {

    /**
     * Properties of a CreateChangeSetResponse.
     * @exports ICreateChangeSetResponse
     * @interface ICreateChangeSetResponse
     * @property {ITimetableChangeSet|null} [timetableChangeSet] CreateChangeSetResponse timetableChangeSet
     */

    /**
     * Constructs a new CreateChangeSetResponse.
     * @exports CreateChangeSetResponse
     * @classdesc Represents a CreateChangeSetResponse.
     * @implements ICreateChangeSetResponse
     * @constructor
     * @param {ICreateChangeSetResponse=} [properties] Properties to set
     */
    function CreateChangeSetResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateChangeSetResponse timetableChangeSet.
     * @member {ITimetableChangeSet|null|undefined} timetableChangeSet
     * @memberof CreateChangeSetResponse
     * @instance
     */
    CreateChangeSetResponse.prototype.timetableChangeSet = null;

    /**
     * Creates a new CreateChangeSetResponse instance using the specified properties.
     * @function create
     * @memberof CreateChangeSetResponse
     * @static
     * @param {ICreateChangeSetResponse=} [properties] Properties to set
     * @returns {CreateChangeSetResponse} CreateChangeSetResponse instance
     */
    CreateChangeSetResponse.create = function create(properties) {
        return new CreateChangeSetResponse(properties);
    };

    /**
     * Encodes the specified CreateChangeSetResponse message. Does not implicitly {@link CreateChangeSetResponse.verify|verify} messages.
     * @function encode
     * @memberof CreateChangeSetResponse
     * @static
     * @param {ICreateChangeSetResponse} message CreateChangeSetResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateChangeSetResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timetableChangeSet != null && message.hasOwnProperty("timetableChangeSet"))
            $root.TimetableChangeSet.encode(message.timetableChangeSet, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CreateChangeSetResponse message, length delimited. Does not implicitly {@link CreateChangeSetResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateChangeSetResponse
     * @static
     * @param {ICreateChangeSetResponse} message CreateChangeSetResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateChangeSetResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateChangeSetResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CreateChangeSetResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateChangeSetResponse} CreateChangeSetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateChangeSetResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateChangeSetResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timetableChangeSet = $root.TimetableChangeSet.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateChangeSetResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateChangeSetResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateChangeSetResponse} CreateChangeSetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateChangeSetResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateChangeSetResponse message.
     * @function verify
     * @memberof CreateChangeSetResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateChangeSetResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timetableChangeSet != null && message.hasOwnProperty("timetableChangeSet")) {
            var error = $root.TimetableChangeSet.verify(message.timetableChangeSet);
            if (error)
                return "timetableChangeSet." + error;
        }
        return null;
    };

    /**
     * Creates a CreateChangeSetResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateChangeSetResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateChangeSetResponse} CreateChangeSetResponse
     */
    CreateChangeSetResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateChangeSetResponse)
            return object;
        var message = new $root.CreateChangeSetResponse();
        if (object.timetableChangeSet != null) {
            if (typeof object.timetableChangeSet !== "object")
                throw TypeError(".CreateChangeSetResponse.timetableChangeSet: object expected");
            message.timetableChangeSet = $root.TimetableChangeSet.fromObject(object.timetableChangeSet);
        }
        return message;
    };

    /**
     * Creates a plain object from a CreateChangeSetResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateChangeSetResponse
     * @static
     * @param {CreateChangeSetResponse} message CreateChangeSetResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateChangeSetResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.timetableChangeSet = null;
        if (message.timetableChangeSet != null && message.hasOwnProperty("timetableChangeSet"))
            object.timetableChangeSet = $root.TimetableChangeSet.toObject(message.timetableChangeSet, options);
        return object;
    };

    /**
     * Converts this CreateChangeSetResponse to JSON.
     * @function toJSON
     * @memberof CreateChangeSetResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateChangeSetResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateChangeSetResponse;
})();

$root.TimetableChangeSet = (function() {

    /**
     * Properties of a TimetableChangeSet.
     * @exports ITimetableChangeSet
     * @interface ITimetableChangeSet
     * @property {string|null} [id] TimetableChangeSet id
     * @property {string|null} [name] TimetableChangeSet name
     * @property {string|null} [createdBy] TimetableChangeSet createdBy
     * @property {string|null} [createdAt] TimetableChangeSet createdAt
     * @property {Array.<IDepartureAddition>|null} [additions] TimetableChangeSet additions
     * @property {Array.<IDepartureModification>|null} [modifications] TimetableChangeSet modifications
     * @property {Array.<IDepartureDeletion>|null} [deletions] TimetableChangeSet deletions
     */

    /**
     * Constructs a new TimetableChangeSet.
     * @exports TimetableChangeSet
     * @classdesc Represents a TimetableChangeSet.
     * @implements ITimetableChangeSet
     * @constructor
     * @param {ITimetableChangeSet=} [properties] Properties to set
     */
    function TimetableChangeSet(properties) {
        this.additions = [];
        this.modifications = [];
        this.deletions = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TimetableChangeSet id.
     * @member {string} id
     * @memberof TimetableChangeSet
     * @instance
     */
    TimetableChangeSet.prototype.id = "";

    /**
     * TimetableChangeSet name.
     * @member {string} name
     * @memberof TimetableChangeSet
     * @instance
     */
    TimetableChangeSet.prototype.name = "";

    /**
     * TimetableChangeSet createdBy.
     * @member {string} createdBy
     * @memberof TimetableChangeSet
     * @instance
     */
    TimetableChangeSet.prototype.createdBy = "";

    /**
     * TimetableChangeSet createdAt.
     * @member {string} createdAt
     * @memberof TimetableChangeSet
     * @instance
     */
    TimetableChangeSet.prototype.createdAt = "";

    /**
     * TimetableChangeSet additions.
     * @member {Array.<IDepartureAddition>} additions
     * @memberof TimetableChangeSet
     * @instance
     */
    TimetableChangeSet.prototype.additions = $util.emptyArray;

    /**
     * TimetableChangeSet modifications.
     * @member {Array.<IDepartureModification>} modifications
     * @memberof TimetableChangeSet
     * @instance
     */
    TimetableChangeSet.prototype.modifications = $util.emptyArray;

    /**
     * TimetableChangeSet deletions.
     * @member {Array.<IDepartureDeletion>} deletions
     * @memberof TimetableChangeSet
     * @instance
     */
    TimetableChangeSet.prototype.deletions = $util.emptyArray;

    /**
     * Creates a new TimetableChangeSet instance using the specified properties.
     * @function create
     * @memberof TimetableChangeSet
     * @static
     * @param {ITimetableChangeSet=} [properties] Properties to set
     * @returns {TimetableChangeSet} TimetableChangeSet instance
     */
    TimetableChangeSet.create = function create(properties) {
        return new TimetableChangeSet(properties);
    };

    /**
     * Encodes the specified TimetableChangeSet message. Does not implicitly {@link TimetableChangeSet.verify|verify} messages.
     * @function encode
     * @memberof TimetableChangeSet
     * @static
     * @param {ITimetableChangeSet} message TimetableChangeSet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TimetableChangeSet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.createdBy);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.createdAt);
        if (message.additions != null && message.additions.length)
            for (var i = 0; i < message.additions.length; ++i)
                $root.DepartureAddition.encode(message.additions[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.modifications != null && message.modifications.length)
            for (var i = 0; i < message.modifications.length; ++i)
                $root.DepartureModification.encode(message.modifications[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.deletions != null && message.deletions.length)
            for (var i = 0; i < message.deletions.length; ++i)
                $root.DepartureDeletion.encode(message.deletions[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TimetableChangeSet message, length delimited. Does not implicitly {@link TimetableChangeSet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TimetableChangeSet
     * @static
     * @param {ITimetableChangeSet} message TimetableChangeSet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TimetableChangeSet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TimetableChangeSet message from the specified reader or buffer.
     * @function decode
     * @memberof TimetableChangeSet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TimetableChangeSet} TimetableChangeSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TimetableChangeSet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TimetableChangeSet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.createdBy = reader.string();
                break;
            case 4:
                message.createdAt = reader.string();
                break;
            case 5:
                if (!(message.additions && message.additions.length))
                    message.additions = [];
                message.additions.push($root.DepartureAddition.decode(reader, reader.uint32()));
                break;
            case 6:
                if (!(message.modifications && message.modifications.length))
                    message.modifications = [];
                message.modifications.push($root.DepartureModification.decode(reader, reader.uint32()));
                break;
            case 7:
                if (!(message.deletions && message.deletions.length))
                    message.deletions = [];
                message.deletions.push($root.DepartureDeletion.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TimetableChangeSet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TimetableChangeSet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TimetableChangeSet} TimetableChangeSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TimetableChangeSet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TimetableChangeSet message.
     * @function verify
     * @memberof TimetableChangeSet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TimetableChangeSet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            if (!$util.isString(message.createdBy))
                return "createdBy: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isString(message.createdAt))
                return "createdAt: string expected";
        if (message.additions != null && message.hasOwnProperty("additions")) {
            if (!Array.isArray(message.additions))
                return "additions: array expected";
            for (var i = 0; i < message.additions.length; ++i) {
                var error = $root.DepartureAddition.verify(message.additions[i]);
                if (error)
                    return "additions." + error;
            }
        }
        if (message.modifications != null && message.hasOwnProperty("modifications")) {
            if (!Array.isArray(message.modifications))
                return "modifications: array expected";
            for (var i = 0; i < message.modifications.length; ++i) {
                var error = $root.DepartureModification.verify(message.modifications[i]);
                if (error)
                    return "modifications." + error;
            }
        }
        if (message.deletions != null && message.hasOwnProperty("deletions")) {
            if (!Array.isArray(message.deletions))
                return "deletions: array expected";
            for (var i = 0; i < message.deletions.length; ++i) {
                var error = $root.DepartureDeletion.verify(message.deletions[i]);
                if (error)
                    return "deletions." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TimetableChangeSet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TimetableChangeSet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TimetableChangeSet} TimetableChangeSet
     */
    TimetableChangeSet.fromObject = function fromObject(object) {
        if (object instanceof $root.TimetableChangeSet)
            return object;
        var message = new $root.TimetableChangeSet();
        if (object.id != null)
            message.id = String(object.id);
        if (object.name != null)
            message.name = String(object.name);
        if (object.createdBy != null)
            message.createdBy = String(object.createdBy);
        if (object.createdAt != null)
            message.createdAt = String(object.createdAt);
        if (object.additions) {
            if (!Array.isArray(object.additions))
                throw TypeError(".TimetableChangeSet.additions: array expected");
            message.additions = [];
            for (var i = 0; i < object.additions.length; ++i) {
                if (typeof object.additions[i] !== "object")
                    throw TypeError(".TimetableChangeSet.additions: object expected");
                message.additions[i] = $root.DepartureAddition.fromObject(object.additions[i]);
            }
        }
        if (object.modifications) {
            if (!Array.isArray(object.modifications))
                throw TypeError(".TimetableChangeSet.modifications: array expected");
            message.modifications = [];
            for (var i = 0; i < object.modifications.length; ++i) {
                if (typeof object.modifications[i] !== "object")
                    throw TypeError(".TimetableChangeSet.modifications: object expected");
                message.modifications[i] = $root.DepartureModification.fromObject(object.modifications[i]);
            }
        }
        if (object.deletions) {
            if (!Array.isArray(object.deletions))
                throw TypeError(".TimetableChangeSet.deletions: array expected");
            message.deletions = [];
            for (var i = 0; i < object.deletions.length; ++i) {
                if (typeof object.deletions[i] !== "object")
                    throw TypeError(".TimetableChangeSet.deletions: object expected");
                message.deletions[i] = $root.DepartureDeletion.fromObject(object.deletions[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TimetableChangeSet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TimetableChangeSet
     * @static
     * @param {TimetableChangeSet} message TimetableChangeSet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TimetableChangeSet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.additions = [];
            object.modifications = [];
            object.deletions = [];
        }
        if (options.defaults) {
            object.id = "";
            object.name = "";
            object.createdBy = "";
            object.createdAt = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            object.createdBy = message.createdBy;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.additions && message.additions.length) {
            object.additions = [];
            for (var j = 0; j < message.additions.length; ++j)
                object.additions[j] = $root.DepartureAddition.toObject(message.additions[j], options);
        }
        if (message.modifications && message.modifications.length) {
            object.modifications = [];
            for (var j = 0; j < message.modifications.length; ++j)
                object.modifications[j] = $root.DepartureModification.toObject(message.modifications[j], options);
        }
        if (message.deletions && message.deletions.length) {
            object.deletions = [];
            for (var j = 0; j < message.deletions.length; ++j)
                object.deletions[j] = $root.DepartureDeletion.toObject(message.deletions[j], options);
        }
        return object;
    };

    /**
     * Converts this TimetableChangeSet to JSON.
     * @function toJSON
     * @memberof TimetableChangeSet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TimetableChangeSet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TimetableChangeSet;
})();

$root.DepartureAddition = (function() {

    /**
     * Properties of a DepartureAddition.
     * @exports IDepartureAddition
     * @interface IDepartureAddition
     * @property {string|null} [id] DepartureAddition id
     * @property {string|null} [createdBy] DepartureAddition createdBy
     * @property {string|null} [createdAt] DepartureAddition createdAt
     * @property {string|null} [shipCode] DepartureAddition shipCode
     * @property {string|null} [plannedDeparture] DepartureAddition plannedDeparture
     * @property {string|null} [plannedArrival] DepartureAddition plannedArrival
     * @property {string|null} [departureTerminalCode] DepartureAddition departureTerminalCode
     * @property {string|null} [arrivalTerminalCode] DepartureAddition arrivalTerminalCode
     */

    /**
     * Constructs a new DepartureAddition.
     * @exports DepartureAddition
     * @classdesc Represents a DepartureAddition.
     * @implements IDepartureAddition
     * @constructor
     * @param {IDepartureAddition=} [properties] Properties to set
     */
    function DepartureAddition(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DepartureAddition id.
     * @member {string} id
     * @memberof DepartureAddition
     * @instance
     */
    DepartureAddition.prototype.id = "";

    /**
     * DepartureAddition createdBy.
     * @member {string} createdBy
     * @memberof DepartureAddition
     * @instance
     */
    DepartureAddition.prototype.createdBy = "";

    /**
     * DepartureAddition createdAt.
     * @member {string} createdAt
     * @memberof DepartureAddition
     * @instance
     */
    DepartureAddition.prototype.createdAt = "";

    /**
     * DepartureAddition shipCode.
     * @member {string} shipCode
     * @memberof DepartureAddition
     * @instance
     */
    DepartureAddition.prototype.shipCode = "";

    /**
     * DepartureAddition plannedDeparture.
     * @member {string} plannedDeparture
     * @memberof DepartureAddition
     * @instance
     */
    DepartureAddition.prototype.plannedDeparture = "";

    /**
     * DepartureAddition plannedArrival.
     * @member {string} plannedArrival
     * @memberof DepartureAddition
     * @instance
     */
    DepartureAddition.prototype.plannedArrival = "";

    /**
     * DepartureAddition departureTerminalCode.
     * @member {string} departureTerminalCode
     * @memberof DepartureAddition
     * @instance
     */
    DepartureAddition.prototype.departureTerminalCode = "";

    /**
     * DepartureAddition arrivalTerminalCode.
     * @member {string} arrivalTerminalCode
     * @memberof DepartureAddition
     * @instance
     */
    DepartureAddition.prototype.arrivalTerminalCode = "";

    /**
     * Creates a new DepartureAddition instance using the specified properties.
     * @function create
     * @memberof DepartureAddition
     * @static
     * @param {IDepartureAddition=} [properties] Properties to set
     * @returns {DepartureAddition} DepartureAddition instance
     */
    DepartureAddition.create = function create(properties) {
        return new DepartureAddition(properties);
    };

    /**
     * Encodes the specified DepartureAddition message. Does not implicitly {@link DepartureAddition.verify|verify} messages.
     * @function encode
     * @memberof DepartureAddition
     * @static
     * @param {IDepartureAddition} message DepartureAddition message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DepartureAddition.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdBy);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.createdAt);
        if (message.shipCode != null && message.hasOwnProperty("shipCode"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.shipCode);
        if (message.plannedDeparture != null && message.hasOwnProperty("plannedDeparture"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.plannedDeparture);
        if (message.plannedArrival != null && message.hasOwnProperty("plannedArrival"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.plannedArrival);
        if (message.departureTerminalCode != null && message.hasOwnProperty("departureTerminalCode"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.departureTerminalCode);
        if (message.arrivalTerminalCode != null && message.hasOwnProperty("arrivalTerminalCode"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.arrivalTerminalCode);
        return writer;
    };

    /**
     * Encodes the specified DepartureAddition message, length delimited. Does not implicitly {@link DepartureAddition.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DepartureAddition
     * @static
     * @param {IDepartureAddition} message DepartureAddition message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DepartureAddition.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DepartureAddition message from the specified reader or buffer.
     * @function decode
     * @memberof DepartureAddition
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DepartureAddition} DepartureAddition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DepartureAddition.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DepartureAddition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.createdBy = reader.string();
                break;
            case 3:
                message.createdAt = reader.string();
                break;
            case 4:
                message.shipCode = reader.string();
                break;
            case 5:
                message.plannedDeparture = reader.string();
                break;
            case 6:
                message.plannedArrival = reader.string();
                break;
            case 7:
                message.departureTerminalCode = reader.string();
                break;
            case 8:
                message.arrivalTerminalCode = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DepartureAddition message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DepartureAddition
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DepartureAddition} DepartureAddition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DepartureAddition.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DepartureAddition message.
     * @function verify
     * @memberof DepartureAddition
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DepartureAddition.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            if (!$util.isString(message.createdBy))
                return "createdBy: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isString(message.createdAt))
                return "createdAt: string expected";
        if (message.shipCode != null && message.hasOwnProperty("shipCode"))
            if (!$util.isString(message.shipCode))
                return "shipCode: string expected";
        if (message.plannedDeparture != null && message.hasOwnProperty("plannedDeparture"))
            if (!$util.isString(message.plannedDeparture))
                return "plannedDeparture: string expected";
        if (message.plannedArrival != null && message.hasOwnProperty("plannedArrival"))
            if (!$util.isString(message.plannedArrival))
                return "plannedArrival: string expected";
        if (message.departureTerminalCode != null && message.hasOwnProperty("departureTerminalCode"))
            if (!$util.isString(message.departureTerminalCode))
                return "departureTerminalCode: string expected";
        if (message.arrivalTerminalCode != null && message.hasOwnProperty("arrivalTerminalCode"))
            if (!$util.isString(message.arrivalTerminalCode))
                return "arrivalTerminalCode: string expected";
        return null;
    };

    /**
     * Creates a DepartureAddition message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DepartureAddition
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DepartureAddition} DepartureAddition
     */
    DepartureAddition.fromObject = function fromObject(object) {
        if (object instanceof $root.DepartureAddition)
            return object;
        var message = new $root.DepartureAddition();
        if (object.id != null)
            message.id = String(object.id);
        if (object.createdBy != null)
            message.createdBy = String(object.createdBy);
        if (object.createdAt != null)
            message.createdAt = String(object.createdAt);
        if (object.shipCode != null)
            message.shipCode = String(object.shipCode);
        if (object.plannedDeparture != null)
            message.plannedDeparture = String(object.plannedDeparture);
        if (object.plannedArrival != null)
            message.plannedArrival = String(object.plannedArrival);
        if (object.departureTerminalCode != null)
            message.departureTerminalCode = String(object.departureTerminalCode);
        if (object.arrivalTerminalCode != null)
            message.arrivalTerminalCode = String(object.arrivalTerminalCode);
        return message;
    };

    /**
     * Creates a plain object from a DepartureAddition message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DepartureAddition
     * @static
     * @param {DepartureAddition} message DepartureAddition
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DepartureAddition.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.createdBy = "";
            object.createdAt = "";
            object.shipCode = "";
            object.plannedDeparture = "";
            object.plannedArrival = "";
            object.departureTerminalCode = "";
            object.arrivalTerminalCode = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            object.createdBy = message.createdBy;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.shipCode != null && message.hasOwnProperty("shipCode"))
            object.shipCode = message.shipCode;
        if (message.plannedDeparture != null && message.hasOwnProperty("plannedDeparture"))
            object.plannedDeparture = message.plannedDeparture;
        if (message.plannedArrival != null && message.hasOwnProperty("plannedArrival"))
            object.plannedArrival = message.plannedArrival;
        if (message.departureTerminalCode != null && message.hasOwnProperty("departureTerminalCode"))
            object.departureTerminalCode = message.departureTerminalCode;
        if (message.arrivalTerminalCode != null && message.hasOwnProperty("arrivalTerminalCode"))
            object.arrivalTerminalCode = message.arrivalTerminalCode;
        return object;
    };

    /**
     * Converts this DepartureAddition to JSON.
     * @function toJSON
     * @memberof DepartureAddition
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DepartureAddition.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DepartureAddition;
})();

$root.DepartureModification = (function() {

    /**
     * Properties of a DepartureModification.
     * @exports IDepartureModification
     * @interface IDepartureModification
     * @property {string|null} [id] DepartureModification id
     * @property {string|null} [createdBy] DepartureModification createdBy
     * @property {string|null} [createdAt] DepartureModification createdAt
     * @property {string|null} [departureId] DepartureModification departureId
     * @property {IModifiedString|null} [shipCode] DepartureModification shipCode
     * @property {IModifiedString|null} [plannedDeparture] DepartureModification plannedDeparture
     * @property {IModifiedString|null} [plannedArrival] DepartureModification plannedArrival
     * @property {IModifiedString|null} [departureTerminalCode] DepartureModification departureTerminalCode
     * @property {IModifiedString|null} [arrivalTerminalCode] DepartureModification arrivalTerminalCode
     */

    /**
     * Constructs a new DepartureModification.
     * @exports DepartureModification
     * @classdesc Represents a DepartureModification.
     * @implements IDepartureModification
     * @constructor
     * @param {IDepartureModification=} [properties] Properties to set
     */
    function DepartureModification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DepartureModification id.
     * @member {string} id
     * @memberof DepartureModification
     * @instance
     */
    DepartureModification.prototype.id = "";

    /**
     * DepartureModification createdBy.
     * @member {string} createdBy
     * @memberof DepartureModification
     * @instance
     */
    DepartureModification.prototype.createdBy = "";

    /**
     * DepartureModification createdAt.
     * @member {string} createdAt
     * @memberof DepartureModification
     * @instance
     */
    DepartureModification.prototype.createdAt = "";

    /**
     * DepartureModification departureId.
     * @member {string} departureId
     * @memberof DepartureModification
     * @instance
     */
    DepartureModification.prototype.departureId = "";

    /**
     * DepartureModification shipCode.
     * @member {IModifiedString|null|undefined} shipCode
     * @memberof DepartureModification
     * @instance
     */
    DepartureModification.prototype.shipCode = null;

    /**
     * DepartureModification plannedDeparture.
     * @member {IModifiedString|null|undefined} plannedDeparture
     * @memberof DepartureModification
     * @instance
     */
    DepartureModification.prototype.plannedDeparture = null;

    /**
     * DepartureModification plannedArrival.
     * @member {IModifiedString|null|undefined} plannedArrival
     * @memberof DepartureModification
     * @instance
     */
    DepartureModification.prototype.plannedArrival = null;

    /**
     * DepartureModification departureTerminalCode.
     * @member {IModifiedString|null|undefined} departureTerminalCode
     * @memberof DepartureModification
     * @instance
     */
    DepartureModification.prototype.departureTerminalCode = null;

    /**
     * DepartureModification arrivalTerminalCode.
     * @member {IModifiedString|null|undefined} arrivalTerminalCode
     * @memberof DepartureModification
     * @instance
     */
    DepartureModification.prototype.arrivalTerminalCode = null;

    /**
     * Creates a new DepartureModification instance using the specified properties.
     * @function create
     * @memberof DepartureModification
     * @static
     * @param {IDepartureModification=} [properties] Properties to set
     * @returns {DepartureModification} DepartureModification instance
     */
    DepartureModification.create = function create(properties) {
        return new DepartureModification(properties);
    };

    /**
     * Encodes the specified DepartureModification message. Does not implicitly {@link DepartureModification.verify|verify} messages.
     * @function encode
     * @memberof DepartureModification
     * @static
     * @param {IDepartureModification} message DepartureModification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DepartureModification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdBy);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.createdAt);
        if (message.departureId != null && message.hasOwnProperty("departureId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.departureId);
        if (message.shipCode != null && message.hasOwnProperty("shipCode"))
            $root.ModifiedString.encode(message.shipCode, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.plannedDeparture != null && message.hasOwnProperty("plannedDeparture"))
            $root.ModifiedString.encode(message.plannedDeparture, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.plannedArrival != null && message.hasOwnProperty("plannedArrival"))
            $root.ModifiedString.encode(message.plannedArrival, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.departureTerminalCode != null && message.hasOwnProperty("departureTerminalCode"))
            $root.ModifiedString.encode(message.departureTerminalCode, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.arrivalTerminalCode != null && message.hasOwnProperty("arrivalTerminalCode"))
            $root.ModifiedString.encode(message.arrivalTerminalCode, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DepartureModification message, length delimited. Does not implicitly {@link DepartureModification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DepartureModification
     * @static
     * @param {IDepartureModification} message DepartureModification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DepartureModification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DepartureModification message from the specified reader or buffer.
     * @function decode
     * @memberof DepartureModification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DepartureModification} DepartureModification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DepartureModification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DepartureModification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.createdBy = reader.string();
                break;
            case 3:
                message.createdAt = reader.string();
                break;
            case 4:
                message.departureId = reader.string();
                break;
            case 5:
                message.shipCode = $root.ModifiedString.decode(reader, reader.uint32());
                break;
            case 6:
                message.plannedDeparture = $root.ModifiedString.decode(reader, reader.uint32());
                break;
            case 7:
                message.plannedArrival = $root.ModifiedString.decode(reader, reader.uint32());
                break;
            case 8:
                message.departureTerminalCode = $root.ModifiedString.decode(reader, reader.uint32());
                break;
            case 9:
                message.arrivalTerminalCode = $root.ModifiedString.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DepartureModification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DepartureModification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DepartureModification} DepartureModification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DepartureModification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DepartureModification message.
     * @function verify
     * @memberof DepartureModification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DepartureModification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            if (!$util.isString(message.createdBy))
                return "createdBy: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isString(message.createdAt))
                return "createdAt: string expected";
        if (message.departureId != null && message.hasOwnProperty("departureId"))
            if (!$util.isString(message.departureId))
                return "departureId: string expected";
        if (message.shipCode != null && message.hasOwnProperty("shipCode")) {
            var error = $root.ModifiedString.verify(message.shipCode);
            if (error)
                return "shipCode." + error;
        }
        if (message.plannedDeparture != null && message.hasOwnProperty("plannedDeparture")) {
            var error = $root.ModifiedString.verify(message.plannedDeparture);
            if (error)
                return "plannedDeparture." + error;
        }
        if (message.plannedArrival != null && message.hasOwnProperty("plannedArrival")) {
            var error = $root.ModifiedString.verify(message.plannedArrival);
            if (error)
                return "plannedArrival." + error;
        }
        if (message.departureTerminalCode != null && message.hasOwnProperty("departureTerminalCode")) {
            var error = $root.ModifiedString.verify(message.departureTerminalCode);
            if (error)
                return "departureTerminalCode." + error;
        }
        if (message.arrivalTerminalCode != null && message.hasOwnProperty("arrivalTerminalCode")) {
            var error = $root.ModifiedString.verify(message.arrivalTerminalCode);
            if (error)
                return "arrivalTerminalCode." + error;
        }
        return null;
    };

    /**
     * Creates a DepartureModification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DepartureModification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DepartureModification} DepartureModification
     */
    DepartureModification.fromObject = function fromObject(object) {
        if (object instanceof $root.DepartureModification)
            return object;
        var message = new $root.DepartureModification();
        if (object.id != null)
            message.id = String(object.id);
        if (object.createdBy != null)
            message.createdBy = String(object.createdBy);
        if (object.createdAt != null)
            message.createdAt = String(object.createdAt);
        if (object.departureId != null)
            message.departureId = String(object.departureId);
        if (object.shipCode != null) {
            if (typeof object.shipCode !== "object")
                throw TypeError(".DepartureModification.shipCode: object expected");
            message.shipCode = $root.ModifiedString.fromObject(object.shipCode);
        }
        if (object.plannedDeparture != null) {
            if (typeof object.plannedDeparture !== "object")
                throw TypeError(".DepartureModification.plannedDeparture: object expected");
            message.plannedDeparture = $root.ModifiedString.fromObject(object.plannedDeparture);
        }
        if (object.plannedArrival != null) {
            if (typeof object.plannedArrival !== "object")
                throw TypeError(".DepartureModification.plannedArrival: object expected");
            message.plannedArrival = $root.ModifiedString.fromObject(object.plannedArrival);
        }
        if (object.departureTerminalCode != null) {
            if (typeof object.departureTerminalCode !== "object")
                throw TypeError(".DepartureModification.departureTerminalCode: object expected");
            message.departureTerminalCode = $root.ModifiedString.fromObject(object.departureTerminalCode);
        }
        if (object.arrivalTerminalCode != null) {
            if (typeof object.arrivalTerminalCode !== "object")
                throw TypeError(".DepartureModification.arrivalTerminalCode: object expected");
            message.arrivalTerminalCode = $root.ModifiedString.fromObject(object.arrivalTerminalCode);
        }
        return message;
    };

    /**
     * Creates a plain object from a DepartureModification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DepartureModification
     * @static
     * @param {DepartureModification} message DepartureModification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DepartureModification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.createdBy = "";
            object.createdAt = "";
            object.departureId = "";
            object.shipCode = null;
            object.plannedDeparture = null;
            object.plannedArrival = null;
            object.departureTerminalCode = null;
            object.arrivalTerminalCode = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            object.createdBy = message.createdBy;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.departureId != null && message.hasOwnProperty("departureId"))
            object.departureId = message.departureId;
        if (message.shipCode != null && message.hasOwnProperty("shipCode"))
            object.shipCode = $root.ModifiedString.toObject(message.shipCode, options);
        if (message.plannedDeparture != null && message.hasOwnProperty("plannedDeparture"))
            object.plannedDeparture = $root.ModifiedString.toObject(message.plannedDeparture, options);
        if (message.plannedArrival != null && message.hasOwnProperty("plannedArrival"))
            object.plannedArrival = $root.ModifiedString.toObject(message.plannedArrival, options);
        if (message.departureTerminalCode != null && message.hasOwnProperty("departureTerminalCode"))
            object.departureTerminalCode = $root.ModifiedString.toObject(message.departureTerminalCode, options);
        if (message.arrivalTerminalCode != null && message.hasOwnProperty("arrivalTerminalCode"))
            object.arrivalTerminalCode = $root.ModifiedString.toObject(message.arrivalTerminalCode, options);
        return object;
    };

    /**
     * Converts this DepartureModification to JSON.
     * @function toJSON
     * @memberof DepartureModification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DepartureModification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DepartureModification;
})();

$root.DepartureDeletion = (function() {

    /**
     * Properties of a DepartureDeletion.
     * @exports IDepartureDeletion
     * @interface IDepartureDeletion
     * @property {string|null} [id] DepartureDeletion id
     * @property {string|null} [createdBy] DepartureDeletion createdBy
     * @property {string|null} [createdAt] DepartureDeletion createdAt
     * @property {string|null} [departureId] DepartureDeletion departureId
     */

    /**
     * Constructs a new DepartureDeletion.
     * @exports DepartureDeletion
     * @classdesc Represents a DepartureDeletion.
     * @implements IDepartureDeletion
     * @constructor
     * @param {IDepartureDeletion=} [properties] Properties to set
     */
    function DepartureDeletion(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DepartureDeletion id.
     * @member {string} id
     * @memberof DepartureDeletion
     * @instance
     */
    DepartureDeletion.prototype.id = "";

    /**
     * DepartureDeletion createdBy.
     * @member {string} createdBy
     * @memberof DepartureDeletion
     * @instance
     */
    DepartureDeletion.prototype.createdBy = "";

    /**
     * DepartureDeletion createdAt.
     * @member {string} createdAt
     * @memberof DepartureDeletion
     * @instance
     */
    DepartureDeletion.prototype.createdAt = "";

    /**
     * DepartureDeletion departureId.
     * @member {string} departureId
     * @memberof DepartureDeletion
     * @instance
     */
    DepartureDeletion.prototype.departureId = "";

    /**
     * Creates a new DepartureDeletion instance using the specified properties.
     * @function create
     * @memberof DepartureDeletion
     * @static
     * @param {IDepartureDeletion=} [properties] Properties to set
     * @returns {DepartureDeletion} DepartureDeletion instance
     */
    DepartureDeletion.create = function create(properties) {
        return new DepartureDeletion(properties);
    };

    /**
     * Encodes the specified DepartureDeletion message. Does not implicitly {@link DepartureDeletion.verify|verify} messages.
     * @function encode
     * @memberof DepartureDeletion
     * @static
     * @param {IDepartureDeletion} message DepartureDeletion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DepartureDeletion.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdBy);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.createdAt);
        if (message.departureId != null && message.hasOwnProperty("departureId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.departureId);
        return writer;
    };

    /**
     * Encodes the specified DepartureDeletion message, length delimited. Does not implicitly {@link DepartureDeletion.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DepartureDeletion
     * @static
     * @param {IDepartureDeletion} message DepartureDeletion message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DepartureDeletion.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DepartureDeletion message from the specified reader or buffer.
     * @function decode
     * @memberof DepartureDeletion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DepartureDeletion} DepartureDeletion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DepartureDeletion.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DepartureDeletion();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.createdBy = reader.string();
                break;
            case 3:
                message.createdAt = reader.string();
                break;
            case 4:
                message.departureId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DepartureDeletion message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DepartureDeletion
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DepartureDeletion} DepartureDeletion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DepartureDeletion.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DepartureDeletion message.
     * @function verify
     * @memberof DepartureDeletion
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DepartureDeletion.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            if (!$util.isString(message.createdBy))
                return "createdBy: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isString(message.createdAt))
                return "createdAt: string expected";
        if (message.departureId != null && message.hasOwnProperty("departureId"))
            if (!$util.isString(message.departureId))
                return "departureId: string expected";
        return null;
    };

    /**
     * Creates a DepartureDeletion message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DepartureDeletion
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DepartureDeletion} DepartureDeletion
     */
    DepartureDeletion.fromObject = function fromObject(object) {
        if (object instanceof $root.DepartureDeletion)
            return object;
        var message = new $root.DepartureDeletion();
        if (object.id != null)
            message.id = String(object.id);
        if (object.createdBy != null)
            message.createdBy = String(object.createdBy);
        if (object.createdAt != null)
            message.createdAt = String(object.createdAt);
        if (object.departureId != null)
            message.departureId = String(object.departureId);
        return message;
    };

    /**
     * Creates a plain object from a DepartureDeletion message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DepartureDeletion
     * @static
     * @param {DepartureDeletion} message DepartureDeletion
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DepartureDeletion.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.createdBy = "";
            object.createdAt = "";
            object.departureId = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.createdBy != null && message.hasOwnProperty("createdBy"))
            object.createdBy = message.createdBy;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.departureId != null && message.hasOwnProperty("departureId"))
            object.departureId = message.departureId;
        return object;
    };

    /**
     * Converts this DepartureDeletion to JSON.
     * @function toJSON
     * @memberof DepartureDeletion
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DepartureDeletion.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DepartureDeletion;
})();

$root.IdInput = (function() {

    /**
     * Properties of an IdInput.
     * @exports IIdInput
     * @interface IIdInput
     * @property {string|null} [id] IdInput id
     */

    /**
     * Constructs a new IdInput.
     * @exports IdInput
     * @classdesc Represents an IdInput.
     * @implements IIdInput
     * @constructor
     * @param {IIdInput=} [properties] Properties to set
     */
    function IdInput(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * IdInput id.
     * @member {string} id
     * @memberof IdInput
     * @instance
     */
    IdInput.prototype.id = "";

    /**
     * Creates a new IdInput instance using the specified properties.
     * @function create
     * @memberof IdInput
     * @static
     * @param {IIdInput=} [properties] Properties to set
     * @returns {IdInput} IdInput instance
     */
    IdInput.create = function create(properties) {
        return new IdInput(properties);
    };

    /**
     * Encodes the specified IdInput message. Does not implicitly {@link IdInput.verify|verify} messages.
     * @function encode
     * @memberof IdInput
     * @static
     * @param {IIdInput} message IdInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IdInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified IdInput message, length delimited. Does not implicitly {@link IdInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof IdInput
     * @static
     * @param {IIdInput} message IdInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IdInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an IdInput message from the specified reader or buffer.
     * @function decode
     * @memberof IdInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {IdInput} IdInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IdInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.IdInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an IdInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof IdInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {IdInput} IdInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IdInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an IdInput message.
     * @function verify
     * @memberof IdInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IdInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates an IdInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof IdInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {IdInput} IdInput
     */
    IdInput.fromObject = function fromObject(object) {
        if (object instanceof $root.IdInput)
            return object;
        var message = new $root.IdInput();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from an IdInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof IdInput
     * @static
     * @param {IdInput} message IdInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IdInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this IdInput to JSON.
     * @function toJSON
     * @memberof IdInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IdInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return IdInput;
})();

$root.CodeInput = (function() {

    /**
     * Properties of a CodeInput.
     * @exports ICodeInput
     * @interface ICodeInput
     * @property {string|null} [code] CodeInput code
     */

    /**
     * Constructs a new CodeInput.
     * @exports CodeInput
     * @classdesc Represents a CodeInput.
     * @implements ICodeInput
     * @constructor
     * @param {ICodeInput=} [properties] Properties to set
     */
    function CodeInput(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CodeInput code.
     * @member {string} code
     * @memberof CodeInput
     * @instance
     */
    CodeInput.prototype.code = "";

    /**
     * Creates a new CodeInput instance using the specified properties.
     * @function create
     * @memberof CodeInput
     * @static
     * @param {ICodeInput=} [properties] Properties to set
     * @returns {CodeInput} CodeInput instance
     */
    CodeInput.create = function create(properties) {
        return new CodeInput(properties);
    };

    /**
     * Encodes the specified CodeInput message. Does not implicitly {@link CodeInput.verify|verify} messages.
     * @function encode
     * @memberof CodeInput
     * @static
     * @param {ICodeInput} message CodeInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CodeInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && message.hasOwnProperty("code"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
        return writer;
    };

    /**
     * Encodes the specified CodeInput message, length delimited. Does not implicitly {@link CodeInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CodeInput
     * @static
     * @param {ICodeInput} message CodeInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CodeInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CodeInput message from the specified reader or buffer.
     * @function decode
     * @memberof CodeInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CodeInput} CodeInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CodeInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CodeInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.code = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CodeInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CodeInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CodeInput} CodeInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CodeInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CodeInput message.
     * @function verify
     * @memberof CodeInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CodeInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isString(message.code))
                return "code: string expected";
        return null;
    };

    /**
     * Creates a CodeInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CodeInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CodeInput} CodeInput
     */
    CodeInput.fromObject = function fromObject(object) {
        if (object instanceof $root.CodeInput)
            return object;
        var message = new $root.CodeInput();
        if (object.code != null)
            message.code = String(object.code);
        return message;
    };

    /**
     * Creates a plain object from a CodeInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CodeInput
     * @static
     * @param {CodeInput} message CodeInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CodeInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.code = "";
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };

    /**
     * Converts this CodeInput to JSON.
     * @function toJSON
     * @memberof CodeInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CodeInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CodeInput;
})();

$root.EmptyInput = (function() {

    /**
     * Properties of an EmptyInput.
     * @exports IEmptyInput
     * @interface IEmptyInput
     */

    /**
     * Constructs a new EmptyInput.
     * @exports EmptyInput
     * @classdesc Represents an EmptyInput.
     * @implements IEmptyInput
     * @constructor
     * @param {IEmptyInput=} [properties] Properties to set
     */
    function EmptyInput(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EmptyInput instance using the specified properties.
     * @function create
     * @memberof EmptyInput
     * @static
     * @param {IEmptyInput=} [properties] Properties to set
     * @returns {EmptyInput} EmptyInput instance
     */
    EmptyInput.create = function create(properties) {
        return new EmptyInput(properties);
    };

    /**
     * Encodes the specified EmptyInput message. Does not implicitly {@link EmptyInput.verify|verify} messages.
     * @function encode
     * @memberof EmptyInput
     * @static
     * @param {IEmptyInput} message EmptyInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmptyInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified EmptyInput message, length delimited. Does not implicitly {@link EmptyInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EmptyInput
     * @static
     * @param {IEmptyInput} message EmptyInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmptyInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EmptyInput message from the specified reader or buffer.
     * @function decode
     * @memberof EmptyInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EmptyInput} EmptyInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmptyInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EmptyInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EmptyInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EmptyInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EmptyInput} EmptyInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmptyInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EmptyInput message.
     * @function verify
     * @memberof EmptyInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EmptyInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an EmptyInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EmptyInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EmptyInput} EmptyInput
     */
    EmptyInput.fromObject = function fromObject(object) {
        if (object instanceof $root.EmptyInput)
            return object;
        return new $root.EmptyInput();
    };

    /**
     * Creates a plain object from an EmptyInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EmptyInput
     * @static
     * @param {EmptyInput} message EmptyInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EmptyInput.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this EmptyInput to JSON.
     * @function toJSON
     * @memberof EmptyInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EmptyInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EmptyInput;
})();

$root.ModifiedString = (function() {

    /**
     * Properties of a ModifiedString.
     * @exports IModifiedString
     * @interface IModifiedString
     * @property {boolean|null} [isModified] ModifiedString isModified
     * @property {string|null} [value] ModifiedString value
     */

    /**
     * Constructs a new ModifiedString.
     * @exports ModifiedString
     * @classdesc Represents a ModifiedString.
     * @implements IModifiedString
     * @constructor
     * @param {IModifiedString=} [properties] Properties to set
     */
    function ModifiedString(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ModifiedString isModified.
     * @member {boolean} isModified
     * @memberof ModifiedString
     * @instance
     */
    ModifiedString.prototype.isModified = false;

    /**
     * ModifiedString value.
     * @member {string} value
     * @memberof ModifiedString
     * @instance
     */
    ModifiedString.prototype.value = "";

    /**
     * Creates a new ModifiedString instance using the specified properties.
     * @function create
     * @memberof ModifiedString
     * @static
     * @param {IModifiedString=} [properties] Properties to set
     * @returns {ModifiedString} ModifiedString instance
     */
    ModifiedString.create = function create(properties) {
        return new ModifiedString(properties);
    };

    /**
     * Encodes the specified ModifiedString message. Does not implicitly {@link ModifiedString.verify|verify} messages.
     * @function encode
     * @memberof ModifiedString
     * @static
     * @param {IModifiedString} message ModifiedString message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifiedString.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.isModified != null && message.hasOwnProperty("isModified"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isModified);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified ModifiedString message, length delimited. Does not implicitly {@link ModifiedString.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ModifiedString
     * @static
     * @param {IModifiedString} message ModifiedString message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModifiedString.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ModifiedString message from the specified reader or buffer.
     * @function decode
     * @memberof ModifiedString
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ModifiedString} ModifiedString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifiedString.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModifiedString();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.isModified = reader.bool();
                break;
            case 2:
                message.value = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ModifiedString message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ModifiedString
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ModifiedString} ModifiedString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModifiedString.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ModifiedString message.
     * @function verify
     * @memberof ModifiedString
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ModifiedString.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.isModified != null && message.hasOwnProperty("isModified"))
            if (typeof message.isModified !== "boolean")
                return "isModified: boolean expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isString(message.value))
                return "value: string expected";
        return null;
    };

    /**
     * Creates a ModifiedString message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ModifiedString
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ModifiedString} ModifiedString
     */
    ModifiedString.fromObject = function fromObject(object) {
        if (object instanceof $root.ModifiedString)
            return object;
        var message = new $root.ModifiedString();
        if (object.isModified != null)
            message.isModified = Boolean(object.isModified);
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from a ModifiedString message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ModifiedString
     * @static
     * @param {ModifiedString} message ModifiedString
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ModifiedString.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.isModified = false;
            object.value = "";
        }
        if (message.isModified != null && message.hasOwnProperty("isModified"))
            object.isModified = message.isModified;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this ModifiedString to JSON.
     * @function toJSON
     * @memberof ModifiedString
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ModifiedString.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ModifiedString;
})();

$root.Terminal = (function() {

    /**
     * Properties of a Terminal.
     * @exports ITerminal
     * @interface ITerminal
     * @property {string|null} [id] Terminal id
     * @property {string|null} [code] Terminal code
     * @property {string|null} [portCode] Terminal portCode
     * @property {string|null} [name] Terminal name
     */

    /**
     * Constructs a new Terminal.
     * @exports Terminal
     * @classdesc Represents a Terminal.
     * @implements ITerminal
     * @constructor
     * @param {ITerminal=} [properties] Properties to set
     */
    function Terminal(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Terminal id.
     * @member {string} id
     * @memberof Terminal
     * @instance
     */
    Terminal.prototype.id = "";

    /**
     * Terminal code.
     * @member {string} code
     * @memberof Terminal
     * @instance
     */
    Terminal.prototype.code = "";

    /**
     * Terminal portCode.
     * @member {string} portCode
     * @memberof Terminal
     * @instance
     */
    Terminal.prototype.portCode = "";

    /**
     * Terminal name.
     * @member {string} name
     * @memberof Terminal
     * @instance
     */
    Terminal.prototype.name = "";

    /**
     * Creates a new Terminal instance using the specified properties.
     * @function create
     * @memberof Terminal
     * @static
     * @param {ITerminal=} [properties] Properties to set
     * @returns {Terminal} Terminal instance
     */
    Terminal.create = function create(properties) {
        return new Terminal(properties);
    };

    /**
     * Encodes the specified Terminal message. Does not implicitly {@link Terminal.verify|verify} messages.
     * @function encode
     * @memberof Terminal
     * @static
     * @param {ITerminal} message Terminal message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Terminal.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.code != null && message.hasOwnProperty("code"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
        if (message.portCode != null && message.hasOwnProperty("portCode"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.portCode);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified Terminal message, length delimited. Does not implicitly {@link Terminal.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Terminal
     * @static
     * @param {ITerminal} message Terminal message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Terminal.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Terminal message from the specified reader or buffer.
     * @function decode
     * @memberof Terminal
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Terminal} Terminal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Terminal.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Terminal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.code = reader.string();
                break;
            case 3:
                message.portCode = reader.string();
                break;
            case 4:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Terminal message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Terminal
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Terminal} Terminal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Terminal.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Terminal message.
     * @function verify
     * @memberof Terminal
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Terminal.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isString(message.code))
                return "code: string expected";
        if (message.portCode != null && message.hasOwnProperty("portCode"))
            if (!$util.isString(message.portCode))
                return "portCode: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a Terminal message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Terminal
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Terminal} Terminal
     */
    Terminal.fromObject = function fromObject(object) {
        if (object instanceof $root.Terminal)
            return object;
        var message = new $root.Terminal();
        if (object.id != null)
            message.id = String(object.id);
        if (object.code != null)
            message.code = String(object.code);
        if (object.portCode != null)
            message.portCode = String(object.portCode);
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a Terminal message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Terminal
     * @static
     * @param {Terminal} message Terminal
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Terminal.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.code = "";
            object.portCode = "";
            object.name = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        if (message.portCode != null && message.hasOwnProperty("portCode"))
            object.portCode = message.portCode;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this Terminal to JSON.
     * @function toJSON
     * @memberof Terminal
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Terminal.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Terminal;
})();

$root.Port = (function() {

    /**
     * Properties of a Port.
     * @exports IPort
     * @interface IPort
     * @property {string|null} [id] Port id
     * @property {string|null} [code] Port code
     * @property {string|null} [cityCode] Port cityCode
     * @property {string|null} [name] Port name
     */

    /**
     * Constructs a new Port.
     * @exports Port
     * @classdesc Represents a Port.
     * @implements IPort
     * @constructor
     * @param {IPort=} [properties] Properties to set
     */
    function Port(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Port id.
     * @member {string} id
     * @memberof Port
     * @instance
     */
    Port.prototype.id = "";

    /**
     * Port code.
     * @member {string} code
     * @memberof Port
     * @instance
     */
    Port.prototype.code = "";

    /**
     * Port cityCode.
     * @member {string} cityCode
     * @memberof Port
     * @instance
     */
    Port.prototype.cityCode = "";

    /**
     * Port name.
     * @member {string} name
     * @memberof Port
     * @instance
     */
    Port.prototype.name = "";

    /**
     * Creates a new Port instance using the specified properties.
     * @function create
     * @memberof Port
     * @static
     * @param {IPort=} [properties] Properties to set
     * @returns {Port} Port instance
     */
    Port.create = function create(properties) {
        return new Port(properties);
    };

    /**
     * Encodes the specified Port message. Does not implicitly {@link Port.verify|verify} messages.
     * @function encode
     * @memberof Port
     * @static
     * @param {IPort} message Port message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Port.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.code != null && message.hasOwnProperty("code"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
        if (message.cityCode != null && message.hasOwnProperty("cityCode"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.cityCode);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified Port message, length delimited. Does not implicitly {@link Port.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Port
     * @static
     * @param {IPort} message Port message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Port.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Port message from the specified reader or buffer.
     * @function decode
     * @memberof Port
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Port} Port
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Port.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Port();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.code = reader.string();
                break;
            case 3:
                message.cityCode = reader.string();
                break;
            case 4:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Port message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Port
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Port} Port
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Port.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Port message.
     * @function verify
     * @memberof Port
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Port.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isString(message.code))
                return "code: string expected";
        if (message.cityCode != null && message.hasOwnProperty("cityCode"))
            if (!$util.isString(message.cityCode))
                return "cityCode: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a Port message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Port
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Port} Port
     */
    Port.fromObject = function fromObject(object) {
        if (object instanceof $root.Port)
            return object;
        var message = new $root.Port();
        if (object.id != null)
            message.id = String(object.id);
        if (object.code != null)
            message.code = String(object.code);
        if (object.cityCode != null)
            message.cityCode = String(object.cityCode);
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a Port message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Port
     * @static
     * @param {Port} message Port
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Port.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.code = "";
            object.cityCode = "";
            object.name = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        if (message.cityCode != null && message.hasOwnProperty("cityCode"))
            object.cityCode = message.cityCode;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this Port to JSON.
     * @function toJSON
     * @memberof Port
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Port.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Port;
})();

$root.City = (function() {

    /**
     * Properties of a City.
     * @exports ICity
     * @interface ICity
     * @property {string|null} [id] City id
     * @property {string|null} [code] City code
     * @property {string|null} [countryCode] City countryCode
     * @property {string|null} [name] City name
     * @property {ITimeZone|null} [timezone] City timezone
     */

    /**
     * Constructs a new City.
     * @exports City
     * @classdesc Represents a City.
     * @implements ICity
     * @constructor
     * @param {ICity=} [properties] Properties to set
     */
    function City(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * City id.
     * @member {string} id
     * @memberof City
     * @instance
     */
    City.prototype.id = "";

    /**
     * City code.
     * @member {string} code
     * @memberof City
     * @instance
     */
    City.prototype.code = "";

    /**
     * City countryCode.
     * @member {string} countryCode
     * @memberof City
     * @instance
     */
    City.prototype.countryCode = "";

    /**
     * City name.
     * @member {string} name
     * @memberof City
     * @instance
     */
    City.prototype.name = "";

    /**
     * City timezone.
     * @member {ITimeZone|null|undefined} timezone
     * @memberof City
     * @instance
     */
    City.prototype.timezone = null;

    /**
     * Creates a new City instance using the specified properties.
     * @function create
     * @memberof City
     * @static
     * @param {ICity=} [properties] Properties to set
     * @returns {City} City instance
     */
    City.create = function create(properties) {
        return new City(properties);
    };

    /**
     * Encodes the specified City message. Does not implicitly {@link City.verify|verify} messages.
     * @function encode
     * @memberof City
     * @static
     * @param {ICity} message City message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    City.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.code != null && message.hasOwnProperty("code"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
        if (message.countryCode != null && message.hasOwnProperty("countryCode"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.countryCode);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
        if (message.timezone != null && message.hasOwnProperty("timezone"))
            $root.TimeZone.encode(message.timezone, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified City message, length delimited. Does not implicitly {@link City.verify|verify} messages.
     * @function encodeDelimited
     * @memberof City
     * @static
     * @param {ICity} message City message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    City.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a City message from the specified reader or buffer.
     * @function decode
     * @memberof City
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {City} City
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    City.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.City();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.code = reader.string();
                break;
            case 3:
                message.countryCode = reader.string();
                break;
            case 4:
                message.name = reader.string();
                break;
            case 5:
                message.timezone = $root.TimeZone.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a City message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof City
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {City} City
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    City.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a City message.
     * @function verify
     * @memberof City
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    City.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isString(message.code))
                return "code: string expected";
        if (message.countryCode != null && message.hasOwnProperty("countryCode"))
            if (!$util.isString(message.countryCode))
                return "countryCode: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.timezone != null && message.hasOwnProperty("timezone")) {
            var error = $root.TimeZone.verify(message.timezone);
            if (error)
                return "timezone." + error;
        }
        return null;
    };

    /**
     * Creates a City message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof City
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {City} City
     */
    City.fromObject = function fromObject(object) {
        if (object instanceof $root.City)
            return object;
        var message = new $root.City();
        if (object.id != null)
            message.id = String(object.id);
        if (object.code != null)
            message.code = String(object.code);
        if (object.countryCode != null)
            message.countryCode = String(object.countryCode);
        if (object.name != null)
            message.name = String(object.name);
        if (object.timezone != null) {
            if (typeof object.timezone !== "object")
                throw TypeError(".City.timezone: object expected");
            message.timezone = $root.TimeZone.fromObject(object.timezone);
        }
        return message;
    };

    /**
     * Creates a plain object from a City message. Also converts values to other types if specified.
     * @function toObject
     * @memberof City
     * @static
     * @param {City} message City
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    City.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.code = "";
            object.countryCode = "";
            object.name = "";
            object.timezone = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        if (message.countryCode != null && message.hasOwnProperty("countryCode"))
            object.countryCode = message.countryCode;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.timezone != null && message.hasOwnProperty("timezone"))
            object.timezone = $root.TimeZone.toObject(message.timezone, options);
        return object;
    };

    /**
     * Converts this City to JSON.
     * @function toJSON
     * @memberof City
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    City.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return City;
})();

$root.Country = (function() {

    /**
     * Properties of a Country.
     * @exports ICountry
     * @interface ICountry
     * @property {string|null} [id] Country id
     * @property {string|null} [code] Country code
     * @property {string|null} [name] Country name
     * @property {ITimeZone|null} [timezone] Country timezone
     */

    /**
     * Constructs a new Country.
     * @exports Country
     * @classdesc Represents a Country.
     * @implements ICountry
     * @constructor
     * @param {ICountry=} [properties] Properties to set
     */
    function Country(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Country id.
     * @member {string} id
     * @memberof Country
     * @instance
     */
    Country.prototype.id = "";

    /**
     * Country code.
     * @member {string} code
     * @memberof Country
     * @instance
     */
    Country.prototype.code = "";

    /**
     * Country name.
     * @member {string} name
     * @memberof Country
     * @instance
     */
    Country.prototype.name = "";

    /**
     * Country timezone.
     * @member {ITimeZone|null|undefined} timezone
     * @memberof Country
     * @instance
     */
    Country.prototype.timezone = null;

    /**
     * Creates a new Country instance using the specified properties.
     * @function create
     * @memberof Country
     * @static
     * @param {ICountry=} [properties] Properties to set
     * @returns {Country} Country instance
     */
    Country.create = function create(properties) {
        return new Country(properties);
    };

    /**
     * Encodes the specified Country message. Does not implicitly {@link Country.verify|verify} messages.
     * @function encode
     * @memberof Country
     * @static
     * @param {ICountry} message Country message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Country.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.code != null && message.hasOwnProperty("code"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
        if (message.timezone != null && message.hasOwnProperty("timezone"))
            $root.TimeZone.encode(message.timezone, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Country message, length delimited. Does not implicitly {@link Country.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Country
     * @static
     * @param {ICountry} message Country message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Country.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Country message from the specified reader or buffer.
     * @function decode
     * @memberof Country
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Country} Country
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Country.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Country();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.code = reader.string();
                break;
            case 3:
                message.name = reader.string();
                break;
            case 4:
                message.timezone = $root.TimeZone.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Country message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Country
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Country} Country
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Country.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Country message.
     * @function verify
     * @memberof Country
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Country.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isString(message.code))
                return "code: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.timezone != null && message.hasOwnProperty("timezone")) {
            var error = $root.TimeZone.verify(message.timezone);
            if (error)
                return "timezone." + error;
        }
        return null;
    };

    /**
     * Creates a Country message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Country
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Country} Country
     */
    Country.fromObject = function fromObject(object) {
        if (object instanceof $root.Country)
            return object;
        var message = new $root.Country();
        if (object.id != null)
            message.id = String(object.id);
        if (object.code != null)
            message.code = String(object.code);
        if (object.name != null)
            message.name = String(object.name);
        if (object.timezone != null) {
            if (typeof object.timezone !== "object")
                throw TypeError(".Country.timezone: object expected");
            message.timezone = $root.TimeZone.fromObject(object.timezone);
        }
        return message;
    };

    /**
     * Creates a plain object from a Country message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Country
     * @static
     * @param {Country} message Country
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Country.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.code = "";
            object.name = "";
            object.timezone = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.timezone != null && message.hasOwnProperty("timezone"))
            object.timezone = $root.TimeZone.toObject(message.timezone, options);
        return object;
    };

    /**
     * Converts this Country to JSON.
     * @function toJSON
     * @memberof Country
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Country.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Country;
})();

$root.TimeZone = (function() {

    /**
     * Properties of a TimeZone.
     * @exports ITimeZone
     * @interface ITimeZone
     * @property {number|null} [offset] TimeZone offset
     */

    /**
     * Constructs a new TimeZone.
     * @exports TimeZone
     * @classdesc Represents a TimeZone.
     * @implements ITimeZone
     * @constructor
     * @param {ITimeZone=} [properties] Properties to set
     */
    function TimeZone(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TimeZone offset.
     * @member {number} offset
     * @memberof TimeZone
     * @instance
     */
    TimeZone.prototype.offset = 0;

    /**
     * Creates a new TimeZone instance using the specified properties.
     * @function create
     * @memberof TimeZone
     * @static
     * @param {ITimeZone=} [properties] Properties to set
     * @returns {TimeZone} TimeZone instance
     */
    TimeZone.create = function create(properties) {
        return new TimeZone(properties);
    };

    /**
     * Encodes the specified TimeZone message. Does not implicitly {@link TimeZone.verify|verify} messages.
     * @function encode
     * @memberof TimeZone
     * @static
     * @param {ITimeZone} message TimeZone message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TimeZone.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.offset != null && message.hasOwnProperty("offset"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.offset);
        return writer;
    };

    /**
     * Encodes the specified TimeZone message, length delimited. Does not implicitly {@link TimeZone.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TimeZone
     * @static
     * @param {ITimeZone} message TimeZone message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TimeZone.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TimeZone message from the specified reader or buffer.
     * @function decode
     * @memberof TimeZone
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TimeZone} TimeZone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TimeZone.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TimeZone();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.offset = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TimeZone message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TimeZone
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TimeZone} TimeZone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TimeZone.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TimeZone message.
     * @function verify
     * @memberof TimeZone
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TimeZone.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.offset != null && message.hasOwnProperty("offset"))
            if (!$util.isInteger(message.offset))
                return "offset: integer expected";
        return null;
    };

    /**
     * Creates a TimeZone message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TimeZone
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TimeZone} TimeZone
     */
    TimeZone.fromObject = function fromObject(object) {
        if (object instanceof $root.TimeZone)
            return object;
        var message = new $root.TimeZone();
        if (object.offset != null)
            message.offset = object.offset | 0;
        return message;
    };

    /**
     * Creates a plain object from a TimeZone message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TimeZone
     * @static
     * @param {TimeZone} message TimeZone
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TimeZone.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.offset = 0;
        if (message.offset != null && message.hasOwnProperty("offset"))
            object.offset = message.offset;
        return object;
    };

    /**
     * Converts this TimeZone to JSON.
     * @function toJSON
     * @memberof TimeZone
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TimeZone.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TimeZone;
})();

$root.SearchTimeTableInput = (function() {

    /**
     * Properties of a SearchTimeTableInput.
     * @exports ISearchTimeTableInput
     * @interface ISearchTimeTableInput
     * @property {Array.<IFromToTerminals>|null} [terminals] SearchTimeTableInput terminals
     * @property {string|null} [startDate] SearchTimeTableInput startDate
     * @property {string|null} [endDate] SearchTimeTableInput endDate
     */

    /**
     * Constructs a new SearchTimeTableInput.
     * @exports SearchTimeTableInput
     * @classdesc Represents a SearchTimeTableInput.
     * @implements ISearchTimeTableInput
     * @constructor
     * @param {ISearchTimeTableInput=} [properties] Properties to set
     */
    function SearchTimeTableInput(properties) {
        this.terminals = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SearchTimeTableInput terminals.
     * @member {Array.<IFromToTerminals>} terminals
     * @memberof SearchTimeTableInput
     * @instance
     */
    SearchTimeTableInput.prototype.terminals = $util.emptyArray;

    /**
     * SearchTimeTableInput startDate.
     * @member {string} startDate
     * @memberof SearchTimeTableInput
     * @instance
     */
    SearchTimeTableInput.prototype.startDate = "";

    /**
     * SearchTimeTableInput endDate.
     * @member {string} endDate
     * @memberof SearchTimeTableInput
     * @instance
     */
    SearchTimeTableInput.prototype.endDate = "";

    /**
     * Creates a new SearchTimeTableInput instance using the specified properties.
     * @function create
     * @memberof SearchTimeTableInput
     * @static
     * @param {ISearchTimeTableInput=} [properties] Properties to set
     * @returns {SearchTimeTableInput} SearchTimeTableInput instance
     */
    SearchTimeTableInput.create = function create(properties) {
        return new SearchTimeTableInput(properties);
    };

    /**
     * Encodes the specified SearchTimeTableInput message. Does not implicitly {@link SearchTimeTableInput.verify|verify} messages.
     * @function encode
     * @memberof SearchTimeTableInput
     * @static
     * @param {ISearchTimeTableInput} message SearchTimeTableInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchTimeTableInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.terminals != null && message.terminals.length)
            for (var i = 0; i < message.terminals.length; ++i)
                $root.FromToTerminals.encode(message.terminals[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.startDate != null && message.hasOwnProperty("startDate"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.startDate);
        if (message.endDate != null && message.hasOwnProperty("endDate"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.endDate);
        return writer;
    };

    /**
     * Encodes the specified SearchTimeTableInput message, length delimited. Does not implicitly {@link SearchTimeTableInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SearchTimeTableInput
     * @static
     * @param {ISearchTimeTableInput} message SearchTimeTableInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchTimeTableInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SearchTimeTableInput message from the specified reader or buffer.
     * @function decode
     * @memberof SearchTimeTableInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SearchTimeTableInput} SearchTimeTableInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchTimeTableInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SearchTimeTableInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.terminals && message.terminals.length))
                    message.terminals = [];
                message.terminals.push($root.FromToTerminals.decode(reader, reader.uint32()));
                break;
            case 2:
                message.startDate = reader.string();
                break;
            case 3:
                message.endDate = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SearchTimeTableInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SearchTimeTableInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SearchTimeTableInput} SearchTimeTableInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchTimeTableInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SearchTimeTableInput message.
     * @function verify
     * @memberof SearchTimeTableInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SearchTimeTableInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.terminals != null && message.hasOwnProperty("terminals")) {
            if (!Array.isArray(message.terminals))
                return "terminals: array expected";
            for (var i = 0; i < message.terminals.length; ++i) {
                var error = $root.FromToTerminals.verify(message.terminals[i]);
                if (error)
                    return "terminals." + error;
            }
        }
        if (message.startDate != null && message.hasOwnProperty("startDate"))
            if (!$util.isString(message.startDate))
                return "startDate: string expected";
        if (message.endDate != null && message.hasOwnProperty("endDate"))
            if (!$util.isString(message.endDate))
                return "endDate: string expected";
        return null;
    };

    /**
     * Creates a SearchTimeTableInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SearchTimeTableInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SearchTimeTableInput} SearchTimeTableInput
     */
    SearchTimeTableInput.fromObject = function fromObject(object) {
        if (object instanceof $root.SearchTimeTableInput)
            return object;
        var message = new $root.SearchTimeTableInput();
        if (object.terminals) {
            if (!Array.isArray(object.terminals))
                throw TypeError(".SearchTimeTableInput.terminals: array expected");
            message.terminals = [];
            for (var i = 0; i < object.terminals.length; ++i) {
                if (typeof object.terminals[i] !== "object")
                    throw TypeError(".SearchTimeTableInput.terminals: object expected");
                message.terminals[i] = $root.FromToTerminals.fromObject(object.terminals[i]);
            }
        }
        if (object.startDate != null)
            message.startDate = String(object.startDate);
        if (object.endDate != null)
            message.endDate = String(object.endDate);
        return message;
    };

    /**
     * Creates a plain object from a SearchTimeTableInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SearchTimeTableInput
     * @static
     * @param {SearchTimeTableInput} message SearchTimeTableInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SearchTimeTableInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.terminals = [];
        if (options.defaults) {
            object.startDate = "";
            object.endDate = "";
        }
        if (message.terminals && message.terminals.length) {
            object.terminals = [];
            for (var j = 0; j < message.terminals.length; ++j)
                object.terminals[j] = $root.FromToTerminals.toObject(message.terminals[j], options);
        }
        if (message.startDate != null && message.hasOwnProperty("startDate"))
            object.startDate = message.startDate;
        if (message.endDate != null && message.hasOwnProperty("endDate"))
            object.endDate = message.endDate;
        return object;
    };

    /**
     * Converts this SearchTimeTableInput to JSON.
     * @function toJSON
     * @memberof SearchTimeTableInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SearchTimeTableInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SearchTimeTableInput;
})();

$root.FromToTerminals = (function() {

    /**
     * Properties of a FromToTerminals.
     * @exports IFromToTerminals
     * @interface IFromToTerminals
     * @property {string|null} [fromTerminalCode] FromToTerminals fromTerminalCode
     * @property {string|null} [toTerminalCode] FromToTerminals toTerminalCode
     */

    /**
     * Constructs a new FromToTerminals.
     * @exports FromToTerminals
     * @classdesc Represents a FromToTerminals.
     * @implements IFromToTerminals
     * @constructor
     * @param {IFromToTerminals=} [properties] Properties to set
     */
    function FromToTerminals(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FromToTerminals fromTerminalCode.
     * @member {string} fromTerminalCode
     * @memberof FromToTerminals
     * @instance
     */
    FromToTerminals.prototype.fromTerminalCode = "";

    /**
     * FromToTerminals toTerminalCode.
     * @member {string} toTerminalCode
     * @memberof FromToTerminals
     * @instance
     */
    FromToTerminals.prototype.toTerminalCode = "";

    /**
     * Creates a new FromToTerminals instance using the specified properties.
     * @function create
     * @memberof FromToTerminals
     * @static
     * @param {IFromToTerminals=} [properties] Properties to set
     * @returns {FromToTerminals} FromToTerminals instance
     */
    FromToTerminals.create = function create(properties) {
        return new FromToTerminals(properties);
    };

    /**
     * Encodes the specified FromToTerminals message. Does not implicitly {@link FromToTerminals.verify|verify} messages.
     * @function encode
     * @memberof FromToTerminals
     * @static
     * @param {IFromToTerminals} message FromToTerminals message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FromToTerminals.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.fromTerminalCode != null && message.hasOwnProperty("fromTerminalCode"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.fromTerminalCode);
        if (message.toTerminalCode != null && message.hasOwnProperty("toTerminalCode"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.toTerminalCode);
        return writer;
    };

    /**
     * Encodes the specified FromToTerminals message, length delimited. Does not implicitly {@link FromToTerminals.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FromToTerminals
     * @static
     * @param {IFromToTerminals} message FromToTerminals message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FromToTerminals.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FromToTerminals message from the specified reader or buffer.
     * @function decode
     * @memberof FromToTerminals
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FromToTerminals} FromToTerminals
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FromToTerminals.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FromToTerminals();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.fromTerminalCode = reader.string();
                break;
            case 2:
                message.toTerminalCode = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FromToTerminals message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FromToTerminals
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FromToTerminals} FromToTerminals
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FromToTerminals.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FromToTerminals message.
     * @function verify
     * @memberof FromToTerminals
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FromToTerminals.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.fromTerminalCode != null && message.hasOwnProperty("fromTerminalCode"))
            if (!$util.isString(message.fromTerminalCode))
                return "fromTerminalCode: string expected";
        if (message.toTerminalCode != null && message.hasOwnProperty("toTerminalCode"))
            if (!$util.isString(message.toTerminalCode))
                return "toTerminalCode: string expected";
        return null;
    };

    /**
     * Creates a FromToTerminals message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FromToTerminals
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FromToTerminals} FromToTerminals
     */
    FromToTerminals.fromObject = function fromObject(object) {
        if (object instanceof $root.FromToTerminals)
            return object;
        var message = new $root.FromToTerminals();
        if (object.fromTerminalCode != null)
            message.fromTerminalCode = String(object.fromTerminalCode);
        if (object.toTerminalCode != null)
            message.toTerminalCode = String(object.toTerminalCode);
        return message;
    };

    /**
     * Creates a plain object from a FromToTerminals message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FromToTerminals
     * @static
     * @param {FromToTerminals} message FromToTerminals
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FromToTerminals.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.fromTerminalCode = "";
            object.toTerminalCode = "";
        }
        if (message.fromTerminalCode != null && message.hasOwnProperty("fromTerminalCode"))
            object.fromTerminalCode = message.fromTerminalCode;
        if (message.toTerminalCode != null && message.hasOwnProperty("toTerminalCode"))
            object.toTerminalCode = message.toTerminalCode;
        return object;
    };

    /**
     * Converts this FromToTerminals to JSON.
     * @function toJSON
     * @memberof FromToTerminals
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FromToTerminals.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FromToTerminals;
})();

$root.SearchTimeTableResponse = (function() {

    /**
     * Properties of a SearchTimeTableResponse.
     * @exports ISearchTimeTableResponse
     * @interface ISearchTimeTableResponse
     * @property {Array.<IDeparture>|null} [departures] SearchTimeTableResponse departures
     */

    /**
     * Constructs a new SearchTimeTableResponse.
     * @exports SearchTimeTableResponse
     * @classdesc Represents a SearchTimeTableResponse.
     * @implements ISearchTimeTableResponse
     * @constructor
     * @param {ISearchTimeTableResponse=} [properties] Properties to set
     */
    function SearchTimeTableResponse(properties) {
        this.departures = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SearchTimeTableResponse departures.
     * @member {Array.<IDeparture>} departures
     * @memberof SearchTimeTableResponse
     * @instance
     */
    SearchTimeTableResponse.prototype.departures = $util.emptyArray;

    /**
     * Creates a new SearchTimeTableResponse instance using the specified properties.
     * @function create
     * @memberof SearchTimeTableResponse
     * @static
     * @param {ISearchTimeTableResponse=} [properties] Properties to set
     * @returns {SearchTimeTableResponse} SearchTimeTableResponse instance
     */
    SearchTimeTableResponse.create = function create(properties) {
        return new SearchTimeTableResponse(properties);
    };

    /**
     * Encodes the specified SearchTimeTableResponse message. Does not implicitly {@link SearchTimeTableResponse.verify|verify} messages.
     * @function encode
     * @memberof SearchTimeTableResponse
     * @static
     * @param {ISearchTimeTableResponse} message SearchTimeTableResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchTimeTableResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.departures != null && message.departures.length)
            for (var i = 0; i < message.departures.length; ++i)
                $root.Departure.encode(message.departures[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SearchTimeTableResponse message, length delimited. Does not implicitly {@link SearchTimeTableResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SearchTimeTableResponse
     * @static
     * @param {ISearchTimeTableResponse} message SearchTimeTableResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SearchTimeTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SearchTimeTableResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SearchTimeTableResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SearchTimeTableResponse} SearchTimeTableResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchTimeTableResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SearchTimeTableResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.departures && message.departures.length))
                    message.departures = [];
                message.departures.push($root.Departure.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SearchTimeTableResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SearchTimeTableResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SearchTimeTableResponse} SearchTimeTableResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SearchTimeTableResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SearchTimeTableResponse message.
     * @function verify
     * @memberof SearchTimeTableResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SearchTimeTableResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.departures != null && message.hasOwnProperty("departures")) {
            if (!Array.isArray(message.departures))
                return "departures: array expected";
            for (var i = 0; i < message.departures.length; ++i) {
                var error = $root.Departure.verify(message.departures[i]);
                if (error)
                    return "departures." + error;
            }
        }
        return null;
    };

    /**
     * Creates a SearchTimeTableResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SearchTimeTableResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SearchTimeTableResponse} SearchTimeTableResponse
     */
    SearchTimeTableResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.SearchTimeTableResponse)
            return object;
        var message = new $root.SearchTimeTableResponse();
        if (object.departures) {
            if (!Array.isArray(object.departures))
                throw TypeError(".SearchTimeTableResponse.departures: array expected");
            message.departures = [];
            for (var i = 0; i < object.departures.length; ++i) {
                if (typeof object.departures[i] !== "object")
                    throw TypeError(".SearchTimeTableResponse.departures: object expected");
                message.departures[i] = $root.Departure.fromObject(object.departures[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a SearchTimeTableResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SearchTimeTableResponse
     * @static
     * @param {SearchTimeTableResponse} message SearchTimeTableResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SearchTimeTableResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.departures = [];
        if (message.departures && message.departures.length) {
            object.departures = [];
            for (var j = 0; j < message.departures.length; ++j)
                object.departures[j] = $root.Departure.toObject(message.departures[j], options);
        }
        return object;
    };

    /**
     * Converts this SearchTimeTableResponse to JSON.
     * @function toJSON
     * @memberof SearchTimeTableResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SearchTimeTableResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SearchTimeTableResponse;
})();

$root.Departure = (function() {

    /**
     * Properties of a Departure.
     * @exports IDeparture
     * @interface IDeparture
     * @property {string|null} [id] Departure id
     * @property {string|null} [shipCode] Departure shipCode
     * @property {ITerminalSchedule|null} [departure] Departure departure
     * @property {ITerminalSchedule|null} [arrival] Departure arrival
     * @property {string|null} [loadingTime] Departure loadingTime
     * @property {string|null} [rampTime] Departure rampTime
     */

    /**
     * Constructs a new Departure.
     * @exports Departure
     * @classdesc Represents a Departure.
     * @implements IDeparture
     * @constructor
     * @param {IDeparture=} [properties] Properties to set
     */
    function Departure(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Departure id.
     * @member {string} id
     * @memberof Departure
     * @instance
     */
    Departure.prototype.id = "";

    /**
     * Departure shipCode.
     * @member {string} shipCode
     * @memberof Departure
     * @instance
     */
    Departure.prototype.shipCode = "";

    /**
     * Departure departure.
     * @member {ITerminalSchedule|null|undefined} departure
     * @memberof Departure
     * @instance
     */
    Departure.prototype.departure = null;

    /**
     * Departure arrival.
     * @member {ITerminalSchedule|null|undefined} arrival
     * @memberof Departure
     * @instance
     */
    Departure.prototype.arrival = null;

    /**
     * Departure loadingTime.
     * @member {string} loadingTime
     * @memberof Departure
     * @instance
     */
    Departure.prototype.loadingTime = "";

    /**
     * Departure rampTime.
     * @member {string} rampTime
     * @memberof Departure
     * @instance
     */
    Departure.prototype.rampTime = "";

    /**
     * Creates a new Departure instance using the specified properties.
     * @function create
     * @memberof Departure
     * @static
     * @param {IDeparture=} [properties] Properties to set
     * @returns {Departure} Departure instance
     */
    Departure.create = function create(properties) {
        return new Departure(properties);
    };

    /**
     * Encodes the specified Departure message. Does not implicitly {@link Departure.verify|verify} messages.
     * @function encode
     * @memberof Departure
     * @static
     * @param {IDeparture} message Departure message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Departure.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.shipCode != null && message.hasOwnProperty("shipCode"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.shipCode);
        if (message.departure != null && message.hasOwnProperty("departure"))
            $root.TerminalSchedule.encode(message.departure, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.arrival != null && message.hasOwnProperty("arrival"))
            $root.TerminalSchedule.encode(message.arrival, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.loadingTime != null && message.hasOwnProperty("loadingTime"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.loadingTime);
        if (message.rampTime != null && message.hasOwnProperty("rampTime"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.rampTime);
        return writer;
    };

    /**
     * Encodes the specified Departure message, length delimited. Does not implicitly {@link Departure.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Departure
     * @static
     * @param {IDeparture} message Departure message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Departure.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Departure message from the specified reader or buffer.
     * @function decode
     * @memberof Departure
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Departure} Departure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Departure.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Departure();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.shipCode = reader.string();
                break;
            case 3:
                message.departure = $root.TerminalSchedule.decode(reader, reader.uint32());
                break;
            case 4:
                message.arrival = $root.TerminalSchedule.decode(reader, reader.uint32());
                break;
            case 5:
                message.loadingTime = reader.string();
                break;
            case 6:
                message.rampTime = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Departure message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Departure
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Departure} Departure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Departure.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Departure message.
     * @function verify
     * @memberof Departure
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Departure.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.shipCode != null && message.hasOwnProperty("shipCode"))
            if (!$util.isString(message.shipCode))
                return "shipCode: string expected";
        if (message.departure != null && message.hasOwnProperty("departure")) {
            var error = $root.TerminalSchedule.verify(message.departure);
            if (error)
                return "departure." + error;
        }
        if (message.arrival != null && message.hasOwnProperty("arrival")) {
            var error = $root.TerminalSchedule.verify(message.arrival);
            if (error)
                return "arrival." + error;
        }
        if (message.loadingTime != null && message.hasOwnProperty("loadingTime"))
            if (!$util.isString(message.loadingTime))
                return "loadingTime: string expected";
        if (message.rampTime != null && message.hasOwnProperty("rampTime"))
            if (!$util.isString(message.rampTime))
                return "rampTime: string expected";
        return null;
    };

    /**
     * Creates a Departure message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Departure
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Departure} Departure
     */
    Departure.fromObject = function fromObject(object) {
        if (object instanceof $root.Departure)
            return object;
        var message = new $root.Departure();
        if (object.id != null)
            message.id = String(object.id);
        if (object.shipCode != null)
            message.shipCode = String(object.shipCode);
        if (object.departure != null) {
            if (typeof object.departure !== "object")
                throw TypeError(".Departure.departure: object expected");
            message.departure = $root.TerminalSchedule.fromObject(object.departure);
        }
        if (object.arrival != null) {
            if (typeof object.arrival !== "object")
                throw TypeError(".Departure.arrival: object expected");
            message.arrival = $root.TerminalSchedule.fromObject(object.arrival);
        }
        if (object.loadingTime != null)
            message.loadingTime = String(object.loadingTime);
        if (object.rampTime != null)
            message.rampTime = String(object.rampTime);
        return message;
    };

    /**
     * Creates a plain object from a Departure message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Departure
     * @static
     * @param {Departure} message Departure
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Departure.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.shipCode = "";
            object.departure = null;
            object.arrival = null;
            object.loadingTime = "";
            object.rampTime = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.shipCode != null && message.hasOwnProperty("shipCode"))
            object.shipCode = message.shipCode;
        if (message.departure != null && message.hasOwnProperty("departure"))
            object.departure = $root.TerminalSchedule.toObject(message.departure, options);
        if (message.arrival != null && message.hasOwnProperty("arrival"))
            object.arrival = $root.TerminalSchedule.toObject(message.arrival, options);
        if (message.loadingTime != null && message.hasOwnProperty("loadingTime"))
            object.loadingTime = message.loadingTime;
        if (message.rampTime != null && message.hasOwnProperty("rampTime"))
            object.rampTime = message.rampTime;
        return object;
    };

    /**
     * Converts this Departure to JSON.
     * @function toJSON
     * @memberof Departure
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Departure.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Departure;
})();

$root.TerminalSchedule = (function() {

    /**
     * Properties of a TerminalSchedule.
     * @exports ITerminalSchedule
     * @interface ITerminalSchedule
     * @property {string|null} [terminalCode] TerminalSchedule terminalCode
     * @property {string|null} [plannedTime] TerminalSchedule plannedTime
     * @property {string|null} [estimatedTime] TerminalSchedule estimatedTime
     * @property {string|null} [actualTime] TerminalSchedule actualTime
     */

    /**
     * Constructs a new TerminalSchedule.
     * @exports TerminalSchedule
     * @classdesc Represents a TerminalSchedule.
     * @implements ITerminalSchedule
     * @constructor
     * @param {ITerminalSchedule=} [properties] Properties to set
     */
    function TerminalSchedule(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TerminalSchedule terminalCode.
     * @member {string} terminalCode
     * @memberof TerminalSchedule
     * @instance
     */
    TerminalSchedule.prototype.terminalCode = "";

    /**
     * TerminalSchedule plannedTime.
     * @member {string} plannedTime
     * @memberof TerminalSchedule
     * @instance
     */
    TerminalSchedule.prototype.plannedTime = "";

    /**
     * TerminalSchedule estimatedTime.
     * @member {string} estimatedTime
     * @memberof TerminalSchedule
     * @instance
     */
    TerminalSchedule.prototype.estimatedTime = "";

    /**
     * TerminalSchedule actualTime.
     * @member {string} actualTime
     * @memberof TerminalSchedule
     * @instance
     */
    TerminalSchedule.prototype.actualTime = "";

    /**
     * Creates a new TerminalSchedule instance using the specified properties.
     * @function create
     * @memberof TerminalSchedule
     * @static
     * @param {ITerminalSchedule=} [properties] Properties to set
     * @returns {TerminalSchedule} TerminalSchedule instance
     */
    TerminalSchedule.create = function create(properties) {
        return new TerminalSchedule(properties);
    };

    /**
     * Encodes the specified TerminalSchedule message. Does not implicitly {@link TerminalSchedule.verify|verify} messages.
     * @function encode
     * @memberof TerminalSchedule
     * @static
     * @param {ITerminalSchedule} message TerminalSchedule message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TerminalSchedule.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.terminalCode != null && message.hasOwnProperty("terminalCode"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.terminalCode);
        if (message.plannedTime != null && message.hasOwnProperty("plannedTime"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.plannedTime);
        if (message.estimatedTime != null && message.hasOwnProperty("estimatedTime"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.estimatedTime);
        if (message.actualTime != null && message.hasOwnProperty("actualTime"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.actualTime);
        return writer;
    };

    /**
     * Encodes the specified TerminalSchedule message, length delimited. Does not implicitly {@link TerminalSchedule.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TerminalSchedule
     * @static
     * @param {ITerminalSchedule} message TerminalSchedule message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TerminalSchedule.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TerminalSchedule message from the specified reader or buffer.
     * @function decode
     * @memberof TerminalSchedule
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TerminalSchedule} TerminalSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TerminalSchedule.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TerminalSchedule();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.terminalCode = reader.string();
                break;
            case 2:
                message.plannedTime = reader.string();
                break;
            case 3:
                message.estimatedTime = reader.string();
                break;
            case 4:
                message.actualTime = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TerminalSchedule message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TerminalSchedule
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TerminalSchedule} TerminalSchedule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TerminalSchedule.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TerminalSchedule message.
     * @function verify
     * @memberof TerminalSchedule
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TerminalSchedule.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.terminalCode != null && message.hasOwnProperty("terminalCode"))
            if (!$util.isString(message.terminalCode))
                return "terminalCode: string expected";
        if (message.plannedTime != null && message.hasOwnProperty("plannedTime"))
            if (!$util.isString(message.plannedTime))
                return "plannedTime: string expected";
        if (message.estimatedTime != null && message.hasOwnProperty("estimatedTime"))
            if (!$util.isString(message.estimatedTime))
                return "estimatedTime: string expected";
        if (message.actualTime != null && message.hasOwnProperty("actualTime"))
            if (!$util.isString(message.actualTime))
                return "actualTime: string expected";
        return null;
    };

    /**
     * Creates a TerminalSchedule message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TerminalSchedule
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TerminalSchedule} TerminalSchedule
     */
    TerminalSchedule.fromObject = function fromObject(object) {
        if (object instanceof $root.TerminalSchedule)
            return object;
        var message = new $root.TerminalSchedule();
        if (object.terminalCode != null)
            message.terminalCode = String(object.terminalCode);
        if (object.plannedTime != null)
            message.plannedTime = String(object.plannedTime);
        if (object.estimatedTime != null)
            message.estimatedTime = String(object.estimatedTime);
        if (object.actualTime != null)
            message.actualTime = String(object.actualTime);
        return message;
    };

    /**
     * Creates a plain object from a TerminalSchedule message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TerminalSchedule
     * @static
     * @param {TerminalSchedule} message TerminalSchedule
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TerminalSchedule.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.terminalCode = "";
            object.plannedTime = "";
            object.estimatedTime = "";
            object.actualTime = "";
        }
        if (message.terminalCode != null && message.hasOwnProperty("terminalCode"))
            object.terminalCode = message.terminalCode;
        if (message.plannedTime != null && message.hasOwnProperty("plannedTime"))
            object.plannedTime = message.plannedTime;
        if (message.estimatedTime != null && message.hasOwnProperty("estimatedTime"))
            object.estimatedTime = message.estimatedTime;
        if (message.actualTime != null && message.hasOwnProperty("actualTime"))
            object.actualTime = message.actualTime;
        return object;
    };

    /**
     * Converts this TerminalSchedule to JSON.
     * @function toJSON
     * @memberof TerminalSchedule
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TerminalSchedule.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TerminalSchedule;
})();

$root.Ship = (function() {

    /**
     * Properties of a Ship.
     * @exports IShip
     * @interface IShip
     * @property {string|null} [id] Ship id
     * @property {string|null} [code] Ship code
     * @property {string|null} [name] Ship name
     * @property {string|null} [imo] Ship imo
     */

    /**
     * Constructs a new Ship.
     * @exports Ship
     * @classdesc Represents a Ship.
     * @implements IShip
     * @constructor
     * @param {IShip=} [properties] Properties to set
     */
    function Ship(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Ship id.
     * @member {string} id
     * @memberof Ship
     * @instance
     */
    Ship.prototype.id = "";

    /**
     * Ship code.
     * @member {string} code
     * @memberof Ship
     * @instance
     */
    Ship.prototype.code = "";

    /**
     * Ship name.
     * @member {string} name
     * @memberof Ship
     * @instance
     */
    Ship.prototype.name = "";

    /**
     * Ship imo.
     * @member {string} imo
     * @memberof Ship
     * @instance
     */
    Ship.prototype.imo = "";

    /**
     * Creates a new Ship instance using the specified properties.
     * @function create
     * @memberof Ship
     * @static
     * @param {IShip=} [properties] Properties to set
     * @returns {Ship} Ship instance
     */
    Ship.create = function create(properties) {
        return new Ship(properties);
    };

    /**
     * Encodes the specified Ship message. Does not implicitly {@link Ship.verify|verify} messages.
     * @function encode
     * @memberof Ship
     * @static
     * @param {IShip} message Ship message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ship.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.code != null && message.hasOwnProperty("code"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
        if (message.imo != null && message.hasOwnProperty("imo"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.imo);
        return writer;
    };

    /**
     * Encodes the specified Ship message, length delimited. Does not implicitly {@link Ship.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Ship
     * @static
     * @param {IShip} message Ship message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ship.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Ship message from the specified reader or buffer.
     * @function decode
     * @memberof Ship
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Ship} Ship
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ship.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ship();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.code = reader.string();
                break;
            case 3:
                message.name = reader.string();
                break;
            case 4:
                message.imo = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Ship message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Ship
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Ship} Ship
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ship.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Ship message.
     * @function verify
     * @memberof Ship
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Ship.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isString(message.code))
                return "code: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.imo != null && message.hasOwnProperty("imo"))
            if (!$util.isString(message.imo))
                return "imo: string expected";
        return null;
    };

    /**
     * Creates a Ship message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Ship
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Ship} Ship
     */
    Ship.fromObject = function fromObject(object) {
        if (object instanceof $root.Ship)
            return object;
        var message = new $root.Ship();
        if (object.id != null)
            message.id = String(object.id);
        if (object.code != null)
            message.code = String(object.code);
        if (object.name != null)
            message.name = String(object.name);
        if (object.imo != null)
            message.imo = String(object.imo);
        return message;
    };

    /**
     * Creates a plain object from a Ship message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Ship
     * @static
     * @param {Ship} message Ship
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Ship.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.code = "";
            object.name = "";
            object.imo = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.imo != null && message.hasOwnProperty("imo"))
            object.imo = message.imo;
        return object;
    };

    /**
     * Converts this Ship to JSON.
     * @function toJSON
     * @memberof Ship
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Ship.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Ship;
})();

$root.GetAllShipsResponse = (function() {

    /**
     * Properties of a GetAllShipsResponse.
     * @exports IGetAllShipsResponse
     * @interface IGetAllShipsResponse
     * @property {Array.<IShip>|null} [ships] GetAllShipsResponse ships
     */

    /**
     * Constructs a new GetAllShipsResponse.
     * @exports GetAllShipsResponse
     * @classdesc Represents a GetAllShipsResponse.
     * @implements IGetAllShipsResponse
     * @constructor
     * @param {IGetAllShipsResponse=} [properties] Properties to set
     */
    function GetAllShipsResponse(properties) {
        this.ships = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetAllShipsResponse ships.
     * @member {Array.<IShip>} ships
     * @memberof GetAllShipsResponse
     * @instance
     */
    GetAllShipsResponse.prototype.ships = $util.emptyArray;

    /**
     * Creates a new GetAllShipsResponse instance using the specified properties.
     * @function create
     * @memberof GetAllShipsResponse
     * @static
     * @param {IGetAllShipsResponse=} [properties] Properties to set
     * @returns {GetAllShipsResponse} GetAllShipsResponse instance
     */
    GetAllShipsResponse.create = function create(properties) {
        return new GetAllShipsResponse(properties);
    };

    /**
     * Encodes the specified GetAllShipsResponse message. Does not implicitly {@link GetAllShipsResponse.verify|verify} messages.
     * @function encode
     * @memberof GetAllShipsResponse
     * @static
     * @param {IGetAllShipsResponse} message GetAllShipsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetAllShipsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ships != null && message.ships.length)
            for (var i = 0; i < message.ships.length; ++i)
                $root.Ship.encode(message.ships[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetAllShipsResponse message, length delimited. Does not implicitly {@link GetAllShipsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetAllShipsResponse
     * @static
     * @param {IGetAllShipsResponse} message GetAllShipsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetAllShipsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetAllShipsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof GetAllShipsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetAllShipsResponse} GetAllShipsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetAllShipsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetAllShipsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.ships && message.ships.length))
                    message.ships = [];
                message.ships.push($root.Ship.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetAllShipsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetAllShipsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetAllShipsResponse} GetAllShipsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetAllShipsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetAllShipsResponse message.
     * @function verify
     * @memberof GetAllShipsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetAllShipsResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ships != null && message.hasOwnProperty("ships")) {
            if (!Array.isArray(message.ships))
                return "ships: array expected";
            for (var i = 0; i < message.ships.length; ++i) {
                var error = $root.Ship.verify(message.ships[i]);
                if (error)
                    return "ships." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GetAllShipsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetAllShipsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetAllShipsResponse} GetAllShipsResponse
     */
    GetAllShipsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.GetAllShipsResponse)
            return object;
        var message = new $root.GetAllShipsResponse();
        if (object.ships) {
            if (!Array.isArray(object.ships))
                throw TypeError(".GetAllShipsResponse.ships: array expected");
            message.ships = [];
            for (var i = 0; i < object.ships.length; ++i) {
                if (typeof object.ships[i] !== "object")
                    throw TypeError(".GetAllShipsResponse.ships: object expected");
                message.ships[i] = $root.Ship.fromObject(object.ships[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GetAllShipsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetAllShipsResponse
     * @static
     * @param {GetAllShipsResponse} message GetAllShipsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetAllShipsResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ships = [];
        if (message.ships && message.ships.length) {
            object.ships = [];
            for (var j = 0; j < message.ships.length; ++j)
                object.ships[j] = $root.Ship.toObject(message.ships[j], options);
        }
        return object;
    };

    /**
     * Converts this GetAllShipsResponse to JSON.
     * @function toJSON
     * @memberof GetAllShipsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetAllShipsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetAllShipsResponse;
})();

module.exports = $root;
