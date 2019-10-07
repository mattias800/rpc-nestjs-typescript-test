import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import {
  ICreateChangeSetInput,
  ICreateChangeSetResponse,
  IIdInput,
  ITimetableChangeSet
} from "../types/ProtoService";

@Controller()
export class TimetableChangeSetService {
  @GrpcMethod()
  GetChangeSetById(data: IIdInput): ITimetableChangeSet {
    const one: ITimetableChangeSet = {
      id: data.id,
      createdAt: new Date().toISOString(),
      createdBy: "Must",
      name: "Mattias"
    };
    return one;
  }

  @GrpcMethod()
  CreateChangeSet(data: ICreateChangeSetInput): ICreateChangeSetResponse {
    const timetableChangeSet: ITimetableChangeSet = {
      id: "mattias nice id",
      createdAt: new Date().toISOString(),
      createdBy: "mangan",
      name: data.name
    };
    return { timetableChangeSet };
  }
}
