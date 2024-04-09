import { Component } from '@angular/core';

interface IPlanos {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plano: IPlanos = {
    infos : {
      tipo: 'Simples',
      preco: 100
    }
  }

}
