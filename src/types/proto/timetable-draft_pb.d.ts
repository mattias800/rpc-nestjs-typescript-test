// package: 
// file: proto/timetable-draft.proto

import * as jspb from "google-protobuf";

export class TimetableDraft extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getCreatedBy(): string;
  setCreatedBy(value: string): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimetableDraft.AsObject;
  static toObject(includeInstance: boolean, msg: TimetableDraft): TimetableDraft.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimetableDraft, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimetableDraft;
  static deserializeBinaryFromReader(message: TimetableDraft, reader: jspb.BinaryReader): TimetableDraft;
}

export namespace TimetableDraft {
  export type AsObject = {
    id: string,
    name: string,
    createdBy: string,
    createdAt: string,
  }
}

export class CreateDraftInput extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDraftInput.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDraftInput): CreateDraftInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDraftInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDraftInput;
  static deserializeBinaryFromReader(message: CreateDraftInput, reader: jspb.BinaryReader): CreateDraftInput;
}

export namespace CreateDraftInput {
  export type AsObject = {
    name: string,
  }
}

export class CreateDraftResponse extends jspb.Message {
  hasTimetableDraft(): boolean;
  clearTimetableDraft(): void;
  getTimetableDraft(): TimetableDraft | undefined;
  setTimetableDraft(value?: TimetableDraft): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDraftResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDraftResponse): CreateDraftResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDraftResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDraftResponse;
  static deserializeBinaryFromReader(message: CreateDraftResponse, reader: jspb.BinaryReader): CreateDraftResponse;
}

export namespace CreateDraftResponse {
  export type AsObject = {
    timetableDraft?: TimetableDraft.AsObject,
  }
}

export class IdInput extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdInput.AsObject;
  static toObject(includeInstance: boolean, msg: IdInput): IdInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdInput;
  static deserializeBinaryFromReader(message: IdInput, reader: jspb.BinaryReader): IdInput;
}

export namespace IdInput {
  export type AsObject = {
    id: string,
  }
}

