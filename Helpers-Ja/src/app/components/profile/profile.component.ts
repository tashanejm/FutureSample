import {Component, OnInit, ViewChild} from '@angular/core';
import {OverlayPanel} from "primeng/overlaypanel";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('overlayPanel', {static: true}) private readonly overlayPanel!: OverlayPanel;
  constructor() { }

  ngOnInit(): void {
  }

  onProfileClick(event: MouseEvent | KeyboardEvent) {
    this.overlayPanel.toggle(event)
  }
}
