import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ChatService {

  message: Subject<any>;
  constructor(private _wsService: WebsocketService) { 
    this.message = <Subject<any>>_wsService
      .connect()
      .map((response: any): any => {
        return response; 
      })
  }

  sendMsg(msg) {
    this.message.next(msg);
  }

}
