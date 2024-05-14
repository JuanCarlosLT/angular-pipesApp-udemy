import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  name: string = "Carlos"
  gender: 'male' | 'famele' = 'male';
  invitationMao = {
    'male': 'invitarlo',
    'famele': 'invitarla'
  }

  changeClient(): void {
    this.name = "Melissa";
    this.gender = 'famele';
  }

  //i18n Plural
  clients: string[] = ['Mariana', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue pipe
  person = {
    name: 'Carlos',
    age: '27',
    address: 'Huixquilucan, EDOMEX'
  }

  //Async Pipe
  myObservableTimer = interval(2000);

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })
}
