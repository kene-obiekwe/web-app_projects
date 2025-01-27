import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('home.html')
  getHome(): {} { 
  return this.appService.getHome();
  }
  @Get('about-us')
  @Render('about-us.html')
  getAboutUs(): {} {
  return this.appService.getAboutUs();
  }
  @Get('patient-biodata/create')
  @Render('pbd/create-pbd.html')
  getCreatepbd(): {} {
  return this.appService.getCreatepbd();
  }
  @Get('patient-biodata/view')
  @Render('pbd/view-pbd.html')
  getViewpbd(): {} {
  return this.appService.getViewpbd();
  }
}
