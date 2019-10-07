import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import {
  ICity,
  ICodeInput,
  ICountry,
  IPort,
  ITerminal
} from "../types/ProtoService";

@Controller()
export class PortService {
  @GrpcMethod()
  GetPortByCode(data: ICodeInput): IPort {
    const one: IPort = {
      id: "nice id ii",
      code: data.code,
      name: "Danmarksterminalen"
    };
    return one;
  }

  @GrpcMethod()
  GetCityByCode(data: ICodeInput): ICity {
    const one: ICity = {
      id: "nice id ii",
      code: data.code,
      name: "Göteborg"
    };
    return one;
  }

  @GrpcMethod()
  GetTerminalByCode(data: ICodeInput): ITerminal {
    const one: ICity = {
      id: "nice id ii",
      code: data.code,
      name: "Danmarksterminalen"
    };
    return one;
  }

  @GrpcMethod()
  GetCountryByCode(data: ICodeInput): ICountry {
    const one: ICountry = {
      id: "nice id ii",
      code: data.code,
      name: "Sweden"
    };
    return one;
  }
}
