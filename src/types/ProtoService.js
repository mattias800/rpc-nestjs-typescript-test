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

    Timetable.TimetableDraftService = (function() {

        /**
         * Constructs a new TimetableDraftService service.
         * @memberof Timetable
         * @classdesc Represents a TimetableDraftService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function TimetableDraftService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (TimetableDraftService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TimetableDraftService;

        /**
         * Creates new TimetableDraftService service using the specified rpc implementation.
         * @function create
         * @memberof Timetable.TimetableDraftService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {TimetableDraftService} RPC service. Useful where requests and/or responses are streamed.
         */
        TimetableDraftService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link Timetable.TimetableDraftService#createDraft}.
         * @memberof Timetable.TimetableDraftService
         * @typedef CreateDraftCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {Timetable.CreateDraftResponse} [response] CreateDraftResponse
         */

        /**
         * Calls CreateDraft.
         * @function createDraft
         * @memberof Timetable.TimetableDraftService
         * @instance
         * @param {Timetable.ICreateDraftInput} request CreateDraftInput message or plain object
         * @param {Timetable.TimetableDraftService.CreateDraftCallback} callback Node-style callback called with the error, if any, and CreateDraftResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TimetableDraftService.prototype.createDraft = function createDraft(request, callback) {
            return this.rpcCall(createDraft, $root.Timetable.CreateDraftInput, $root.Timetable.CreateDraftResponse, request, callback);
        }, "name", { value: "CreateDraft" });

        /**
         * Calls CreateDraft.
         * @function createDraft
         * @memberof Timetable.TimetableDraftService
         * @instance
         * @param {Timetable.ICreateDraftInput} request CreateDraftInput message or plain object
         * @returns {Promise<Timetable.CreateDraftResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link Timetable.TimetableDraftService#findOneById}.
         * @memberof Timetable.TimetableDraftService
         * @typedef FindOneByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {Timetable.TimetableDraft} [response] TimetableDraft
         */

        /**
         * Calls FindOneById.
         * @function findOneById
         * @memberof Timetable.TimetableDraftService
         * @instance
         * @param {IIdInput} request IdInput message or plain object
         * @param {Timetable.TimetableDraftService.FindOneByIdCallback} callback Node-style callback called with the error, if any, and TimetableDraft
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TimetableDraftService.prototype.findOneById = function findOneById(request, callback) {
            return this.rpcCall(findOneById, $root.IdInput, $root.Timetable.TimetableDraft, request, callback);
        }, "name", { value: "FindOneById" });

        /**
         * Calls FindOneById.
         * @function findOneById
         * @memberof Timetable.TimetableDraftService
         * @instance
         * @param {IIdInput} request IdInput message or plain object
         * @returns {Promise<Timetable.TimetableDraft>} Promise
         * @variation 2
         */

        return TimetableDraftService;
    })();

    Timetable.TimetableDraft = (function() {

        /**
         * Properties of a TimetableDraft.
         * @memberof Timetable
         * @interface ITimetableDraft
         * @property {string|null} [id] TimetableDraft id
         * @property {string|null} [name] TimetableDraft name
         * @property {string|null} [createdBy] TimetableDraft createdBy
         * @property {string|null} [createdAt] TimetableDraft createdAt
         */

        /**
         * Constructs a new TimetableDraft.
         * @memberof Timetable
         * @classdesc Represents a TimetableDraft.
         * @implements ITimetableDraft
         * @constructor
         * @param {Timetable.ITimetableDraft=} [properties] Properties to set
         */
        function TimetableDraft(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimetableDraft id.
         * @member {string} id
         * @memberof Timetable.TimetableDraft
         * @instance
         */
        TimetableDraft.prototype.id = "";

        /**
         * TimetableDraft name.
         * @member {string} name
         * @memberof Timetable.TimetableDraft
         * @instance
         */
        TimetableDraft.prototype.name = "";

        /**
         * TimetableDraft createdBy.
         * @member {string} createdBy
         * @memberof Timetable.TimetableDraft
         * @instance
         */
        TimetableDraft.prototype.createdBy = "";

        /**
         * TimetableDraft createdAt.
         * @member {string} createdAt
         * @memberof Timetable.TimetableDraft
         * @instance
         */
        TimetableDraft.prototype.createdAt = "";

        /**
         * Creates a new TimetableDraft instance using the specified properties.
         * @function create
         * @memberof Timetable.TimetableDraft
         * @static
         * @param {Timetable.ITimetableDraft=} [properties] Properties to set
         * @returns {Timetable.TimetableDraft} TimetableDraft instance
         */
        TimetableDraft.create = function create(properties) {
            return new TimetableDraft(properties);
        };

        /**
         * Encodes the specified TimetableDraft message. Does not implicitly {@link Timetable.TimetableDraft.verify|verify} messages.
         * @function encode
         * @memberof Timetable.TimetableDraft
         * @static
         * @param {Timetable.ITimetableDraft} message TimetableDraft message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimetableDraft.encode = function encode(message, writer) {
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
            return writer;
        };

        /**
         * Encodes the specified TimetableDraft message, length delimited. Does not implicitly {@link Timetable.TimetableDraft.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Timetable.TimetableDraft
         * @static
         * @param {Timetable.ITimetableDraft} message TimetableDraft message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimetableDraft.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimetableDraft message from the specified reader or buffer.
         * @function decode
         * @memberof Timetable.TimetableDraft
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Timetable.TimetableDraft} TimetableDraft
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimetableDraft.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Timetable.TimetableDraft();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TimetableDraft message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Timetable.TimetableDraft
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Timetable.TimetableDraft} TimetableDraft
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimetableDraft.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimetableDraft message.
         * @function verify
         * @memberof Timetable.TimetableDraft
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimetableDraft.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates a TimetableDraft message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Timetable.TimetableDraft
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Timetable.TimetableDraft} TimetableDraft
         */
        TimetableDraft.fromObject = function fromObject(object) {
            if (object instanceof $root.Timetable.TimetableDraft)
                return object;
            var message = new $root.Timetable.TimetableDraft();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            return message;
        };

        /**
         * Creates a plain object from a TimetableDraft message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Timetable.TimetableDraft
         * @static
         * @param {Timetable.TimetableDraft} message TimetableDraft
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimetableDraft.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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
            return object;
        };

        /**
         * Converts this TimetableDraft to JSON.
         * @function toJSON
         * @memberof Timetable.TimetableDraft
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimetableDraft.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TimetableDraft;
    })();

    Timetable.CreateDraftInput = (function() {

        /**
         * Properties of a CreateDraftInput.
         * @memberof Timetable
         * @interface ICreateDraftInput
         * @property {string|null} [name] CreateDraftInput name
         */

        /**
         * Constructs a new CreateDraftInput.
         * @memberof Timetable
         * @classdesc Represents a CreateDraftInput.
         * @implements ICreateDraftInput
         * @constructor
         * @param {Timetable.ICreateDraftInput=} [properties] Properties to set
         */
        function CreateDraftInput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateDraftInput name.
         * @member {string} name
         * @memberof Timetable.CreateDraftInput
         * @instance
         */
        CreateDraftInput.prototype.name = "";

        /**
         * Creates a new CreateDraftInput instance using the specified properties.
         * @function create
         * @memberof Timetable.CreateDraftInput
         * @static
         * @param {Timetable.ICreateDraftInput=} [properties] Properties to set
         * @returns {Timetable.CreateDraftInput} CreateDraftInput instance
         */
        CreateDraftInput.create = function create(properties) {
            return new CreateDraftInput(properties);
        };

        /**
         * Encodes the specified CreateDraftInput message. Does not implicitly {@link Timetable.CreateDraftInput.verify|verify} messages.
         * @function encode
         * @memberof Timetable.CreateDraftInput
         * @static
         * @param {Timetable.ICreateDraftInput} message CreateDraftInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateDraftInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified CreateDraftInput message, length delimited. Does not implicitly {@link Timetable.CreateDraftInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Timetable.CreateDraftInput
         * @static
         * @param {Timetable.ICreateDraftInput} message CreateDraftInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateDraftInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateDraftInput message from the specified reader or buffer.
         * @function decode
         * @memberof Timetable.CreateDraftInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Timetable.CreateDraftInput} CreateDraftInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateDraftInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Timetable.CreateDraftInput();
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
         * Decodes a CreateDraftInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Timetable.CreateDraftInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Timetable.CreateDraftInput} CreateDraftInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateDraftInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateDraftInput message.
         * @function verify
         * @memberof Timetable.CreateDraftInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateDraftInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a CreateDraftInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Timetable.CreateDraftInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Timetable.CreateDraftInput} CreateDraftInput
         */
        CreateDraftInput.fromObject = function fromObject(object) {
            if (object instanceof $root.Timetable.CreateDraftInput)
                return object;
            var message = new $root.Timetable.CreateDraftInput();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a CreateDraftInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Timetable.CreateDraftInput
         * @static
         * @param {Timetable.CreateDraftInput} message CreateDraftInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateDraftInput.toObject = function toObject(message, options) {
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
         * Converts this CreateDraftInput to JSON.
         * @function toJSON
         * @memberof Timetable.CreateDraftInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateDraftInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateDraftInput;
    })();

    Timetable.CreateDraftResponse = (function() {

        /**
         * Properties of a CreateDraftResponse.
         * @memberof Timetable
         * @interface ICreateDraftResponse
         * @property {Timetable.ITimetableDraft|null} [timetableDraft] CreateDraftResponse timetableDraft
         */

        /**
         * Constructs a new CreateDraftResponse.
         * @memberof Timetable
         * @classdesc Represents a CreateDraftResponse.
         * @implements ICreateDraftResponse
         * @constructor
         * @param {Timetable.ICreateDraftResponse=} [properties] Properties to set
         */
        function CreateDraftResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateDraftResponse timetableDraft.
         * @member {Timetable.ITimetableDraft|null|undefined} timetableDraft
         * @memberof Timetable.CreateDraftResponse
         * @instance
         */
        CreateDraftResponse.prototype.timetableDraft = null;

        /**
         * Creates a new CreateDraftResponse instance using the specified properties.
         * @function create
         * @memberof Timetable.CreateDraftResponse
         * @static
         * @param {Timetable.ICreateDraftResponse=} [properties] Properties to set
         * @returns {Timetable.CreateDraftResponse} CreateDraftResponse instance
         */
        CreateDraftResponse.create = function create(properties) {
            return new CreateDraftResponse(properties);
        };

        /**
         * Encodes the specified CreateDraftResponse message. Does not implicitly {@link Timetable.CreateDraftResponse.verify|verify} messages.
         * @function encode
         * @memberof Timetable.CreateDraftResponse
         * @static
         * @param {Timetable.ICreateDraftResponse} message CreateDraftResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateDraftResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timetableDraft != null && message.hasOwnProperty("timetableDraft"))
                $root.Timetable.TimetableDraft.encode(message.timetableDraft, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateDraftResponse message, length delimited. Does not implicitly {@link Timetable.CreateDraftResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Timetable.CreateDraftResponse
         * @static
         * @param {Timetable.ICreateDraftResponse} message CreateDraftResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateDraftResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateDraftResponse message from the specified reader or buffer.
         * @function decode
         * @memberof Timetable.CreateDraftResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Timetable.CreateDraftResponse} CreateDraftResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateDraftResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Timetable.CreateDraftResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timetableDraft = $root.Timetable.TimetableDraft.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateDraftResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Timetable.CreateDraftResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Timetable.CreateDraftResponse} CreateDraftResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateDraftResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateDraftResponse message.
         * @function verify
         * @memberof Timetable.CreateDraftResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateDraftResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timetableDraft != null && message.hasOwnProperty("timetableDraft")) {
                var error = $root.Timetable.TimetableDraft.verify(message.timetableDraft);
                if (error)
                    return "timetableDraft." + error;
            }
            return null;
        };

        /**
         * Creates a CreateDraftResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Timetable.CreateDraftResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Timetable.CreateDraftResponse} CreateDraftResponse
         */
        CreateDraftResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.Timetable.CreateDraftResponse)
                return object;
            var message = new $root.Timetable.CreateDraftResponse();
            if (object.timetableDraft != null) {
                if (typeof object.timetableDraft !== "object")
                    throw TypeError(".Timetable.CreateDraftResponse.timetableDraft: object expected");
                message.timetableDraft = $root.Timetable.TimetableDraft.fromObject(object.timetableDraft);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateDraftResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Timetable.CreateDraftResponse
         * @static
         * @param {Timetable.CreateDraftResponse} message CreateDraftResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateDraftResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.timetableDraft = null;
            if (message.timetableDraft != null && message.hasOwnProperty("timetableDraft"))
                object.timetableDraft = $root.Timetable.TimetableDraft.toObject(message.timetableDraft, options);
            return object;
        };

        /**
         * Converts this CreateDraftResponse to JSON.
         * @function toJSON
         * @memberof Timetable.CreateDraftResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateDraftResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateDraftResponse;
    })();

    return Timetable;
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

module.exports = $root;
