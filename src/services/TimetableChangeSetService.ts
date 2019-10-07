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
      name: "Mattias",
      additions: [
        {
          id: "31231",
          arrivalTerminalCode: "STA",
          departureTerminalCode: "SIF",
          createdAt: new Date().toISOString(),
          createdBy: "Dennis",
          plannedDeparture: new Date().toISOString(),
          plannedArrival: new Date().toISOString(),
          shipCode: "STENADAC"
        }
      ],
      deletions: [
        {
          createdBy: "Kalle Anka",
          createdAt: new Date().toISOString(),
          departureId: "12412418",
          id: "12481248"
        }
      ],
      modifications: [
        {
          createdBy: "Kalle Anka",
          createdAt: new Date().toISOString(),
          departureId: "12412418",
          id: "12481248",
          shipCode: {
            isModified: true,
            value: "COCAPAMA"
          }
        }
      ]
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
