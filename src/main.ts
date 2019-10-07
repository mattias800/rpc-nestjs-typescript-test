import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { join } from "path";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const protoDir = join(__dirname, "..", "proto");
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: "0.0.0.0:5000",
      package: "TimetableDraft",
      protoPath: "./timetable-draft.proto",
      loader: {
        longs: Number,
        defaults: false,
        arrays: true,
        objects: true,
        includeDirs: [protoDir]
      }
    }
  });
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}

bootstrap();
