import { Module } from "@nestjs/common";
import { ShipService } from "./services/ShipService";
import { TimetableChangeSetService } from "./services/TimetableChangeSetService";
import { PortService } from "./services/PortService";
import { TimetableService } from "./services/TimetableService";

@Module({
  controllers: [
    TimetableChangeSetService,
    PortService,
    TimetableService,
    ShipService
  ]
})
export class TimetableModule {}
