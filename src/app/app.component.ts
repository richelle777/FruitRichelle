import { Component } from '@angular/core';
import { DatabaseService } from './services/database/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private databaseService:DatabaseService) {}
  async ngOnInit(){
    this.databaseService.dbInitializer();
  }
}
