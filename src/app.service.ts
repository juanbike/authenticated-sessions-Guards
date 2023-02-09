/* eslint-disable prettier/prettier */
import { Injectable, Inject  } from '@nestjs/common';
import { ConfigType} from '@nestjs/config';
import config from './modules/config/configuration'

@Injectable()
export class AppService {
  constructor(@Inject(config.KEY) private configService: ConfigType<typeof config>,){

  }
  getHello(): string {
    
    return this.configService.title;
  }


}

