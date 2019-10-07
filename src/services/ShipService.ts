import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import {
  ICodeInput,
  IEmptyInput,
  IGetAllShipsResponse,
  IShip
} from "../types/ProtoService";

@Controller()
export class ShipService {
  @GrpcMethod()
  GetShipByCode(data: ICodeInput): IShip {
    const ship: IShip = {
      id: "some ship id",
      code: data.code,
      imo: "12312",
      name: "Stena Danica"
    };

    return ship;
  }

  @GrpcMethod()
  GetAllShips(data: IEmptyInput): IGetAllShipsResponse {
    const ship: IShip = {
      id: "some ship id",
      code: "STENADAC",
      imo: "12312",
      name: "Stena Danica"
    };

    return { ships: [ship] };
  }
}
