import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import {
  CreateDraftInput,
  IdInput,
  TimetableDraft
} from "../../types/proto/timetable-draft_pb";

@Controller()
export class TimetableDraftService {
  @GrpcMethod()
  FindOneById(data: IdInput): TimetableDraft {
    const one = new TimetableDraft();
    one.setId(data.getId());
    one.setCreatedAt(new Date().toISOString());
    one.setCreatedBy("");
    one.setName("some name");
    return one;
  }

  @GrpcMethod()
  CreateDraft(data: CreateDraftInput): TimetableDraft {
    const one = new TimetableDraft();
    one.setId("123123123123123");
    one.setCreatedAt(new Date().toISOString());
    one.setCreatedBy("");
    one.setName(data.getName());
    return one;
  }
}
