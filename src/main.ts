import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
//const cors = require('cors');
const port = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('NASMA ')
  .setDescription('Medical laboratories management API description')
  .setVersion('1.0')
  .addTag('nasma')
  .addTag('test')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api-docs', app, document);
//app.use((cors));

await app.listen(port);
}
bootstrap();
