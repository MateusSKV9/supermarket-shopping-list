import { query } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  shoppingList: Array<Product> = [];
  message = '';
  novoItemTitle: string = '';
  editIndex: number | null = null;
  editedItemTitle: string = '';
  originalItemTitle: string = '';

  novoItem: string = '';  
  itens: string[] = []; 
  itensComprados: string[] = [];  
  editedItem: string = '';  

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.shoppingList = data['shopping-list'];
        console.log(data);
      },
      error: (error) => {
        const erro = { ...error };
        console.log(erro);
        this.message = `Erro ao buscar produtos: ${erro.error} - ${erro.status}`;
      },
      complete: () => {
        this.message = 'Produtos buscados com sucesso!';
      },
    });
  }

  adicionarItem() {
    if (this.novoItem) {
      this.itens.push(this.novoItem);
      this.novoItem = '';  
    }
  }

  comprarItem(index: number) {
    const item = this.itens.splice(index, 1)[0];  
    this.itensComprados.push(item);  
  }

  excluirItem(list: string[], index: number) {
    list.splice(index, 1);  
  }

  editItem(index: number, item: string) {
    this.editIndex = index;
    this.editedItem = item;  
  }

  saveItem(index: number) {
    this.itens[index] = this.editedItem; 
    this.cancelarEdit();  
  }

  cancelarEdit() {
    this.editIndex = null;  
    this.editedItem = '';  
  }
}
