/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.TimetableDraft = (function() {

    /**
     * Namespace TimetableDraft.
     * @exports TimetableDraft
     * @namespace
     */
    var TimetableDraft = {};

    TimetableDraft.TimetableDraftService = (function() {

        /**
         * Constructs a new TimetableDraftService service.
         * @memberof TimetableDraft
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
         * @memberof TimetableDraft.TimetableDraftService
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
         * Callback as used by {@link TimetableDraft.TimetableDraftService#createDraft}.
         * @memberof TimetableDraft.TimetableDraftService
         * @typedef CreateDraftCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {TimetableDraft.CreateDraftResponse} [response] CreateDraftResponse
         */

        /**
         * Calls CreateDraft.
         * @function createDraft
         * @memberof TimetableDraft.TimetableDraftService
         * @instance
         * @param {TimetableDraft.ICreateDraftInput} request CreateDraftInput message or plain object
         * @param {TimetableDraft.TimetableDraftService.CreateDraftCallback} callback Node-style callback called with the error, if any, and CreateDraftResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TimetableDraftService.prototype.createDraft = function createDraft(request, callback) {
            return this.rpcCall(createDraft, $root.TimetableDraft.CreateDraftInput, $root.TimetableDraft.CreateDraftResponse, request, callback);
        }, "name", { value: "CreateDraft" });

        /**
         * Calls CreateDraft.
         * @function createDraft
         * @memberof TimetableDraft.TimetableDraftService
         * @instance
         * @param {TimetableDraft.ICreateDraftInput} request CreateDraftInput message or plain object
         * @returns {Promise<TimetableDraft.CreateDraftResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link TimetableDraft.TimetableDraftService#findOneById}.
         * @memberof TimetableDraft.TimetableDraftService
         * @typedef FindOneByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {TimetableDraft.TimetableDraft} [response] TimetableDraft
         */

        /**
         * Calls FindOneById.
         * @function findOneById
         * @memberof TimetableDraft.TimetableDraftService
         * @instance
         * @param {TimetableDraft.IIdInput} request IdInput message or plain object
         * @param {TimetableDraft.TimetableDraftService.FindOneByIdCallback} callback Node-style callback called with the error, if any, and TimetableDraft
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TimetableDraftService.prototype.findOneById = function findOneById(request, callback) {
            return this.rpcCall(findOneById, $root.TimetableDraft.IdInput, $root.TimetableDraft.TimetableDraft, request, callback);
        }, "name", { value: "FindOneById" });

        /**
         * Calls FindOneById.
         * @function findOneById
         * @memberof TimetableDraft.TimetableDraftService
         * @instance
         * @param {TimetableDraft.IIdInput} request IdInput message or plain object
         * @returns {Promise<TimetableDraft.TimetableDraft>} Promise
         * @variation 2
         */

        return TimetableDraftService;
    })();

    TimetableDraft.TimetableDraft = (function() {

        /**
         * Properties of a TimetableDraft.
         * @memberof TimetableDraft
         * @interface ITimetableDraft
         * @property {string|null} [id] TimetableDraft id
         * @property {string|null} [name] TimetableDraft name
         * @property {string|null} [createdBy] TimetableDraft createdBy
         * @property {string|null} [createdAt] TimetableDraft createdAt
         */

        /**
         * Constructs a new TimetableDraft.
         * @memberof TimetableDraft
         * @classdesc Represents a TimetableDraft.
         * @implements ITimetableDraft
         * @constructor
         * @param {TimetableDraft.ITimetableDraft=} [properties] Properties to set
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
         * @memberof TimetableDraft.TimetableDraft
         * @instance
         */
        TimetableDraft.prototype.id = "";

        /**
         * TimetableDraft name.
         * @member {string} name
         * @memberof TimetableDraft.TimetableDraft
         * @instance
         */
        TimetableDraft.prototype.name = "";

        /**
         * TimetableDraft createdBy.
         * @member {string} createdBy
         * @memberof TimetableDraft.TimetableDraft
         * @instance
         */
        TimetableDraft.prototype.createdBy = "";

        /**
         * TimetableDraft createdAt.
         * @member {string} createdAt
         * @memberof TimetableDraft.TimetableDraft
         * @instance
         */
        TimetableDraft.prototype.createdAt = "";

        /**
         * Creates a new TimetableDraft instance using the specified properties.
         * @function create
         * @memberof TimetableDraft.TimetableDraft
         * @static
         * @param {TimetableDraft.ITimetableDraft=} [properties] Properties to set
         * @returns {TimetableDraft.TimetableDraft} TimetableDraft instance
         */
        TimetableDraft.create = function create(properties) {
            return new TimetableDraft(properties);
        };

        /**
         * Encodes the specified TimetableDraft message. Does not implicitly {@link TimetableDraft.TimetableDraft.verify|verify} messages.
         * @function encode
         * @memberof TimetableDraft.TimetableDraft
         * @static
         * @param {TimetableDraft.ITimetableDraft} message TimetableDraft message or plain object to encode
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
         * Encodes the specified TimetableDraft message, length delimited. Does not implicitly {@link TimetableDraft.TimetableDraft.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TimetableDraft.TimetableDraft
         * @static
         * @param {TimetableDraft.ITimetableDraft} message TimetableDraft message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimetableDraft.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimetableDraft message from the specified reader or buffer.
         * @function decode
         * @memberof TimetableDraft.TimetableDraft
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TimetableDraft.TimetableDraft} TimetableDraft
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimetableDraft.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TimetableDraft.TimetableDraft();
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
         * @memberof TimetableDraft.TimetableDraft
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TimetableDraft.TimetableDraft} TimetableDraft
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
         * @memberof TimetableDraft.TimetableDraft
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
         * @memberof TimetableDraft.TimetableDraft
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TimetableDraft.TimetableDraft} TimetableDraft
         */
        TimetableDraft.fromObject = function fromObject(object) {
            if (object instanceof $root.TimetableDraft.TimetableDraft)
                return object;
            var message = new $root.TimetableDraft.TimetableDraft();
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
         * @memberof TimetableDraft.TimetableDraft
         * @static
         * @param {TimetableDraft.TimetableDraft} message TimetableDraft
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
         * @memberof TimetableDraft.TimetableDraft
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimetableDraft.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TimetableDraft;
    })();

    TimetableDraft.CreateDraftInput = (function() {

        /**
         * Properties of a CreateDraftInput.
         * @memberof TimetableDraft
         * @interface ICreateDraftInput
         * @property {string|null} [name] CreateDraftInput name
         */

        /**
         * Constructs a new CreateDraftInput.
         * @memberof TimetableDraft
         * @classdesc Represents a CreateDraftInput.
         * @implements ICreateDraftInput
         * @constructor
         * @param {TimetableDraft.ICreateDraftInput=} [properties] Properties to set
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
         * @memberof TimetableDraft.CreateDraftInput
         * @instance
         */
        CreateDraftInput.prototype.name = "";

        /**
         * Creates a new CreateDraftInput instance using the specified properties.
         * @function create
         * @memberof TimetableDraft.CreateDraftInput
         * @static
         * @param {TimetableDraft.ICreateDraftInput=} [properties] Properties to set
         * @returns {TimetableDraft.CreateDraftInput} CreateDraftInput instance
         */
        CreateDraftInput.create = function create(properties) {
            return new CreateDraftInput(properties);
        };

        /**
         * Encodes the specified CreateDraftInput message. Does not implicitly {@link TimetableDraft.CreateDraftInput.verify|verify} messages.
         * @function encode
         * @memberof TimetableDraft.CreateDraftInput
         * @static
         * @param {TimetableDraft.ICreateDraftInput} message CreateDraftInput message or plain object to encode
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
         * Encodes the specified CreateDraftInput message, length delimited. Does not implicitly {@link TimetableDraft.CreateDraftInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TimetableDraft.CreateDraftInput
         * @static
         * @param {TimetableDraft.ICreateDraftInput} message CreateDraftInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateDraftInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateDraftInput message from the specified reader or buffer.
         * @function decode
         * @memberof TimetableDraft.CreateDraftInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TimetableDraft.CreateDraftInput} CreateDraftInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateDraftInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TimetableDraft.CreateDraftInput();
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
         * @memberof TimetableDraft.CreateDraftInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TimetableDraft.CreateDraftInput} CreateDraftInput
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
         * @memberof TimetableDraft.CreateDraftInput
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
         * @memberof TimetableDraft.CreateDraftInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TimetableDraft.CreateDraftInput} CreateDraftInput
         */
        CreateDraftInput.fromObject = function fromObject(object) {
            if (object instanceof $root.TimetableDraft.CreateDraftInput)
                return object;
            var message = new $root.TimetableDraft.CreateDraftInput();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a CreateDraftInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TimetableDraft.CreateDraftInput
         * @static
         * @param {TimetableDraft.CreateDraftInput} message CreateDraftInput
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
         * @memberof TimetableDraft.CreateDraftInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateDraftInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateDraftInput;
    })();

    TimetableDraft.CreateDraftResponse = (function() {

        /**
         * Properties of a CreateDraftResponse.
         * @memberof TimetableDraft
         * @interface ICreateDraftResponse
         * @property {TimetableDraft.ITimetableDraft|null} [timetableDraft] CreateDraftResponse timetableDraft
         */

        /**
         * Constructs a new CreateDraftResponse.
         * @memberof TimetableDraft
         * @classdesc Represents a CreateDraftResponse.
         * @implements ICreateDraftResponse
         * @constructor
         * @param {TimetableDraft.ICreateDraftResponse=} [properties] Properties to set
         */
        function CreateDraftResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateDraftResponse timetableDraft.
         * @member {TimetableDraft.ITimetableDraft|null|undefined} timetableDraft
         * @memberof TimetableDraft.CreateDraftResponse
         * @instance
         */
        CreateDraftResponse.prototype.timetableDraft = null;

        /**
         * Creates a new CreateDraftResponse instance using the specified properties.
         * @function create
         * @memberof TimetableDraft.CreateDraftResponse
         * @static
         * @param {TimetableDraft.ICreateDraftResponse=} [properties] Properties to set
         * @returns {TimetableDraft.CreateDraftResponse} CreateDraftResponse instance
         */
        CreateDraftResponse.create = function create(properties) {
            return new CreateDraftResponse(properties);
        };

        /**
         * Encodes the specified CreateDraftResponse message. Does not implicitly {@link TimetableDraft.CreateDraftResponse.verify|verify} messages.
         * @function encode
         * @memberof TimetableDraft.CreateDraftResponse
         * @static
         * @param {TimetableDraft.ICreateDraftResponse} message CreateDraftResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateDraftResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timetableDraft != null && message.hasOwnProperty("timetableDraft"))
                $root.TimetableDraft.TimetableDraft.encode(message.timetableDraft, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateDraftResponse message, length delimited. Does not implicitly {@link TimetableDraft.CreateDraftResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TimetableDraft.CreateDraftResponse
         * @static
         * @param {TimetableDraft.ICreateDraftResponse} message CreateDraftResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateDraftResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateDraftResponse message from the specified reader or buffer.
         * @function decode
         * @memberof TimetableDraft.CreateDraftResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TimetableDraft.CreateDraftResponse} CreateDraftResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateDraftResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TimetableDraft.CreateDraftResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timetableDraft = $root.TimetableDraft.TimetableDraft.decode(reader, reader.uint32());
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
         * @memberof TimetableDraft.CreateDraftResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TimetableDraft.CreateDraftResponse} CreateDraftResponse
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
         * @memberof TimetableDraft.CreateDraftResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateDraftResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timetableDraft != null && message.hasOwnProperty("timetableDraft")) {
                var error = $root.TimetableDraft.TimetableDraft.verify(message.timetableDraft);
                if (error)
                    return "timetableDraft." + error;
            }
            return null;
        };

        /**
         * Creates a CreateDraftResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TimetableDraft.CreateDraftResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TimetableDraft.CreateDraftResponse} CreateDraftResponse
         */
        CreateDraftResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.TimetableDraft.CreateDraftResponse)
                return object;
            var message = new $root.TimetableDraft.CreateDraftResponse();
            if (object.timetableDraft != null) {
                if (typeof object.timetableDraft !== "object")
                    throw TypeError(".TimetableDraft.CreateDraftResponse.timetableDraft: object expected");
                message.timetableDraft = $root.TimetableDraft.TimetableDraft.fromObject(object.timetableDraft);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateDraftResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TimetableDraft.CreateDraftResponse
         * @static
         * @param {TimetableDraft.CreateDraftResponse} message CreateDraftResponse
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
                object.timetableDraft = $root.TimetableDraft.TimetableDraft.toObject(message.timetableDraft, options);
            return object;
        };

        /**
         * Converts this CreateDraftResponse to JSON.
         * @function toJSON
         * @memberof TimetableDraft.CreateDraftResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateDraftResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateDraftResponse;
    })();

    TimetableDraft.IdInput = (function() {

        /**
         * Properties of an IdInput.
         * @memberof TimetableDraft
         * @interface IIdInput
         * @property {string|null} [id] IdInput id
         */

        /**
         * Constructs a new IdInput.
         * @memberof TimetableDraft
         * @classdesc Represents an IdInput.
         * @implements IIdInput
         * @constructor
         * @param {TimetableDraft.IIdInput=} [properties] Properties to set
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
         * @memberof TimetableDraft.IdInput
         * @instance
         */
        IdInput.prototype.id = "";

        /**
         * Creates a new IdInput instance using the specified properties.
         * @function create
         * @memberof TimetableDraft.IdInput
         * @static
         * @param {TimetableDraft.IIdInput=} [properties] Properties to set
         * @returns {TimetableDraft.IdInput} IdInput instance
         */
        IdInput.create = function create(properties) {
            return new IdInput(properties);
        };

        /**
         * Encodes the specified IdInput message. Does not implicitly {@link TimetableDraft.IdInput.verify|verify} messages.
         * @function encode
         * @memberof TimetableDraft.IdInput
         * @static
         * @param {TimetableDraft.IIdInput} message IdInput message or plain object to encode
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
         * Encodes the specified IdInput message, length delimited. Does not implicitly {@link TimetableDraft.IdInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TimetableDraft.IdInput
         * @static
         * @param {TimetableDraft.IIdInput} message IdInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IdInput message from the specified reader or buffer.
         * @function decode
         * @memberof TimetableDraft.IdInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TimetableDraft.IdInput} IdInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TimetableDraft.IdInput();
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
         * @memberof TimetableDraft.IdInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TimetableDraft.IdInput} IdInput
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
         * @memberof TimetableDraft.IdInput
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
         * @memberof TimetableDraft.IdInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TimetableDraft.IdInput} IdInput
         */
        IdInput.fromObject = function fromObject(object) {
            if (object instanceof $root.TimetableDraft.IdInput)
                return object;
            var message = new $root.TimetableDraft.IdInput();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an IdInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TimetableDraft.IdInput
         * @static
         * @param {TimetableDraft.IdInput} message IdInput
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
         * @memberof TimetableDraft.IdInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IdInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IdInput;
    })();

    return TimetableDraft;
})();

module.exports = $root;
