import { Module } from "@nestjs/common";
import { TimetableDraftController } from "./timetable-draft.controller";

@Module({
  controllers: [TimetableDraftController]
})
export class TimetableDraftModule {}
