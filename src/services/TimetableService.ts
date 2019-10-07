import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import {
  ISearchTimeTableInput,
  ISearchTimeTableResponse
} from "../types/ProtoService";

@Controller()
export class TimetableService {
  @GrpcMethod()
  SearchTimeTable(data: ISearchTimeTableInput): ISearchTimeTableResponse {
    return {
      departures: []
    };
  }
}
