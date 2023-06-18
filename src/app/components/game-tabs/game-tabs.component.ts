import {Component, Input} from '@angular/core';
import {Game, Movies, Screenshots} from "../../models/game";

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent {
  @Input() game = {} as Game;
  @Input() screenshots:Screenshots[] =[];
  @Input() movies:Movies[] = [];
}
