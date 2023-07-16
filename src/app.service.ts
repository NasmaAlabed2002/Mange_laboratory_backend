import { Injectable } from '@nestjs/common';
const cors = require('cors');
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
