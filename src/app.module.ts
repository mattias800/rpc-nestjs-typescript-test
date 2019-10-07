import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TimetableDraftModule } from "./services/timetable-draft/timetable-draft.module";

@Module({
  imports: [TimetableDraftModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
