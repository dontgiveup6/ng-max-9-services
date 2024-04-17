import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  accounts = [
    { name: 'Master', status: 'active' },
    { name: 'Test', status: 'inactive' },
    { name: 'Hidden', status: 'unknown' },
  ];

  onAccountAdded(newAcc: { name: string; status: string }) {
    this.accounts.push(newAcc);
  }

  onStatusChange(updateInfo: { id: number; newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
