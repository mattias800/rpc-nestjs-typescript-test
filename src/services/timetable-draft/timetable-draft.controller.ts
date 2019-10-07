import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { IIdInput, Timetable } from "../../types/ProtoService";
import ICreateDraftInput = Timetable.ICreateDraftInput;
import ICreateDraftResponse = Timetable.ICreateDraftResponse;
import ITimetableDraft = Timetable.ITimetableDraft;

@Controller()
export class TimetableDraftController {
  @GrpcMethod("TimetableDraftService")
  FindOneById(data: IIdInput): ITimetableDraft {
    const one: ITimetableDraft = {
      id: data.id,
      createdAt: new Date().toISOString(),
      createdBy: "Must",
      name: "Mattias"
    };
    return one;
  }

  @GrpcMethod("TimetableDraftService")
  CreateDraft(data: ICreateDraftInput): ICreateDraftResponse {
    const timetableDraft: ITimetableDraft = {
      id: "mattias nice id",
      createdAt: new Date().toISOString(),
      createdBy: "mangan",
      name: data.name
    };
    return { timetableDraft };
  }
}
