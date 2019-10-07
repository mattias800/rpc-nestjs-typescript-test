import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { TimetableDraft } from "../../types/ProtoService";
import ICreateDraftInput = TimetableDraft.ICreateDraftInput;
import ICreateDraftResponse = TimetableDraft.ICreateDraftResponse;
import IIdInput = TimetableDraft.IIdInput;
import ITimetableDraft = TimetableDraft.ITimetableDraft;

@Controller()
export class TimetableDraftService {
  @GrpcMethod()
  FindOneById(data: IIdInput): ITimetableDraft {
    const one: ITimetableDraft = {
      id: data.id,
      createdAt: new Date().toISOString(),
      createdBy: "Must",
      name: "Mattias"
    };
    return one;
  }

  @GrpcMethod()
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
