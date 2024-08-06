import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor() { }

  products: Product[] = [{
    "name": "Lamb - Whole Head Off",
    "mfg": "04-07-2024",
    "exp": "11-10-2024",
    "desc": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut te. Nulla facilisi.",
    "price": 203
  }, {
    "name": "Quiche Assorted",
    "mfg": "31-07-2024",
    "exp": "04-11-2024",
    "desc": "Cras non velit nec nisnulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    "price": 295
  }, {
    "name": "Garlic Powder",
    "mfg": "12-07-2024",
    "exp": "28-11-2024",
    "desc": "Sed ante. Vivamus tortor. Dui massa tempor convallis. Nulla  sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    "price": 5
  }, {
    "name": "Butter - Pod",
    "mfg": "28-07-2024",
    "exp": "30-10-2024",
    "desc": "Quisque porta volutpat erat.",
    "price": 279
  }, {
    "name": "Ecolab - Balanced Fusion",
    "mfg": "17-07-2024",
    "exp": "19-11-2024",
    "desc": "Aenean auctor gravida sem. Praesent idipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "price": 208
  }, {
    "name": "Cheese - Manchego, Spanish",
    "mfg": "16-07-2024",
    "exp": "31-10-2024",
    "desc": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    "price": 314
  }, {
    "name": "Bar Special K",
    "mfg": "16-07-2024",
    "exp": "17-11-2024",
    "desc": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    "price": 191
  }, {
    "name": "Mushroom Morel Fresh",
    "mfg": "17-07-2024",
    "exp": "25-11-2024",
    "desc": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augi. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    "price": 495
  }, {
    "name": "Carroway Seed",
    "mfg": "22-07-2024",
    "exp": "13-10-2024",
    "desc": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "price": 23
  }, {
    "name": "Beef - Ox Tongue, Pickled",
    "mfg": "04-07-2024",
    "exp": "25-11-2024",
    "desc": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    "price": 147
  }, {
    "name": "Cake - Sheet Strawberry",
    "mfg": "10-07-2024",
    "exp": "08-10-2024",
    "desc": "Donec dapibus. Duis at velit eu est congue elementum.",
    "price": 87
  }, {
    "name": "Sauce - Hp",
    "mfg": "05-07-2024",
    "exp": "25-11-2024",
    "desc": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    "price": 465
  }, {
    "name": "Beef - Ox Tongue",
    "mfg": "11-07-2024",
    "exp": "20-10-2024",
    "desc": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    "price": 377
  }, {
    "name": "Bread - Pullman, Sliced",
    "mfg": "10-07-2024",
    "exp": "17-10-2024",
    "desc": "Quisque id justo sit amet sapien dignissim vestibulum.",
    "price": 168
  }, {
    "name": "Chicken Breast Halal",
    "mfg": "17-07-2024",
    "exp": "28-11-2024",
    "desc": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    "price": 162
  }, {
    "name": "Muffin - Mix - Mango Sour Cherry",
    "mfg": "31-07-2024",
    "exp": "24-11-2024",
    "desc": "Morbi quis tortor id nulla ultrices aliquet.",
    "price": 472
  }, {
    "name": "Container - Clear 32 Oz",
    "mfg": "07-07-2024",
    "exp": "26-11-2024",
    "desc": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "price": 284
  }, {
    "name": "Pork - Ham Hocks - Smoked",
    "mfg": "12-07-2024",
    "exp": "06-10-2024",
    "desc": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    "price": 292
  }, {
    "name": "Pork - Bacon, Sliced",
    "mfg": "08-07-2024",
    "exp": "03-11-2024",
    "desc": "Nulla nisl.",
    "price": 449
  }, {
    "name": "Cognac - Courvaisier",
    "mfg": "22-07-2024",
    "exp": "29-11-2024",
    "desc": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    "price": 223
  }]

    getProducts():Product[] {
      return this.products;
    }
    removeProduct(index: number): Product[]{
       this.products.splice(index, 1);
       return this.products;
    }
    
   
}
