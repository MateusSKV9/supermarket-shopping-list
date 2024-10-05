import { query } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  itens: string[] = [];
  novoItem: string = '';
  item: string = '';
  itensComprados: string[] = [];
  
  adicionarItem() {
    const regex = /^[A-Za-z]/; 

    if(this.novoItem == '' || this.novoItem.length < 1) {
      alert('⛔[ERRO]: Insira um item válido.');
      return;
    }

    if(!regex.test(this.novoItem)) {
      alert('⛔[ERRO]: Primeiro caractere precisa ser uma letra.');
      return;
    }

    if (this.novoItem.trim()) {
      this.itens.push(this.novoItem);
      this.novoItem = '';
    }
  }

  comprarItem(index: number) {
    const itemC = this.itens.splice(index, 1)[0];
    this.itensComprados.push(itemC);
  }

  excluirItem(listaItens: string[], index: number) {
    listaItens.splice(index, 1);
  }  

  editIndex: number | null = null;
  editedItem: string = '';
  originalItem: string = '';

  editItem(index: number, item: string) {
    this.editIndex = index;
    this.originalItem = item;
    this.editedItem = item;
  }

  saveItem(index: number) {
    if (this.editedItem.trim()) {
      this.itens[index] = this.editedItem;
    }
    this.editIndex = null;  
    this.editedItem = '';  
  }

  cancelarEdit() {
    this.editIndex = null;
    this.editedItem = '';
    this.editedItem = this.originalItem;
  }
}