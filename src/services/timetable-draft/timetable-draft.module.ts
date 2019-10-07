import { Module } from "@nestjs/common";
import { TimetableDraftService } from "./timetable-draft.service";

@Module({
  controllers: [TimetableDraftService]
})
export class TimetableDraftModule {}
