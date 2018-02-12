import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private chat: ChatService){ }

  ngOnInit(){
    this.chat.message.subscribe.bind(msg => {
      console.log(msg);
    })
  }

  sendMessage() {
    this.chat.sendMsg("Text message");
  }
}
