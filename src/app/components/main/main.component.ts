import { query } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products/products.service';

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

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.shoppingList = data['shopping-list']; // Assumindo que os dados estão estruturados corretamente
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
    if (this.novoItemTitle.trim()) {
      const newItem: Product = {
        id: this.shoppingList.length + 1, // Incrementa o ID baseado na quantidade de itens
        title: this.novoItemTitle,
        userId: 1, // Você pode definir qual usuário está adicionando (exemplo: 1)
        included: false,
      };
      this.shoppingList.push(newItem);
      this.novoItemTitle = '';
    } else {
      alert('⛔[ERRO]: Insira um item válido.');
    }
  }

  editarItem(index: number) {
    this.editIndex = index;
    this.originalItemTitle = this.shoppingList[index].title;
    this.editedItemTitle = this.originalItemTitle;
  }

  saveItem(index: number) {
    if (this.editedItemTitle.trim()) {
      this.shoppingList[index].title = this.editedItemTitle;
    }
    this.editIndex = null;
    this.editedItemTitle = '';
  }

  cancelarEdit() {
    this.editIndex = null;
    this.editedItemTitle = '';
  }

  excluirItem(index: number) {
    this.shoppingList.splice(index, 1);
  }
}