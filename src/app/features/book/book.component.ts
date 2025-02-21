import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Book } from './book';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';
import { BookService } from '../../core/services/book/book.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    BookDialogComponent
],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  useLimitChars = false;
  selectedBook: Book = new Book();
//    books: Book[] = [
//       {
//           title: 'NOS4A2',
//           author: 'Joe Hill',
//           publisher: 'HarperCollins',
//           releasedDate: new Date('1988-04-01'),
//           edition: 1,
//           description: 'Victoria McQueen has a secret gift for finding things: a misplaced bracelet, a missing photograph, answers to unanswerable questions. On her Raleigh Tuff Burner bike, she makes her way to a rickety covered bridge that, within moments, takes her wherever she needs to go, whether it’s across Massachusetts or across the country.',
//           cover: 'https://22dakika.org/wp-content/uploads/2019/06/MV5BMTgwNjA4MDkwNl5BMl5BanBnXkFtZTgwMjE3NTgwODM@._V1_-600x766.jpg'
//       },
//       {
//           title: 'It',
//           author: 'Stephen King',
//           publisher: 'Arqueiro',
//           releasedDate: new Date('1949-06-08'),
//           edition: 1,
//           description: 'Welcome to Derry, Maine. Its a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real.',
//           cover: 'https://m.media-amazon.com/images/I/613UazqBGHL._AC_UF1000,1000_QL80_.jpg'
//       },
//       {
//           title: 'frankenstein',
//           author: 'Mary Shelley',
//           publisher: 'Darkside Books',
//           releasedDate: new Date('1945-08-17'),
//           edition: 1,
//           description: 'Mary Shelleys timeless gothic novel presents the epic battle between man and monster at its greatest literary pitch. In trying to create life, the young student Victor Frankenstein unleashes forces beyond his control, setting into motion a long and tragic chain of events that brings Victor to the very brink of madness. How he tries to destroy his creation, as it destroys everything Victor loves, is a powerful story of love, friendship, scientific hubris, and horror. Based on the third edition of 1831, this Penguin Classics edition, with an introduction and notes by Maurice Hindle, contains all the revisions Mary Shelley made to her story, as well as her 1831 introduction and Percy Bysshe Shelleys preface to the first edition. It also includes as appendices a select collation of the texts of 1818 and 1831 together with A Fragment by Lord Byron and Dr John Polidoris "The Vampyre: A Tale.',
//           cover: 'https://darkside.vtexassets.com/arquivos/ids/168084/94-frankenstein-ou-o-prometeu-moderno.jpg?v=636802548559600000'
//       },
//       {
//           title: 'Classic Horror Vol. 1',
//           author: 'H.P. Lovecraft',
//           publisher: 'Darkside Books',
//           releasedDate: new Date('1899-01-01'),
//           edition: 1,
//           description: '',
//           cover: 'https://darkside.vtexassets.com/arquivos/ids/168101/95-hp-lovecraft-medo-classico-vol-1-miskatonic-edition.jpg?v=636802549092470000'
//       },
//       {
//           title: 'MAUS',
//           author: 'Art Spiegelman',
//           publisher: 'Quadrinhos na Cia',
//           releasedDate: new Date('1967-06-05'),
//           edition: 1,
//           description: 'Maus: A Survivors Tale, is a graphic novel by American cartoonist Art Spiegelman, serialized from 1980 to 1991. It depicts Spiegelman interviewing his father about his experiences as a Polish Jew and Holocaust survivor. The work employs postmodern techniques, and represents Jews as mice and other Germans and Poles as cats and pigs respectively. Critics have classified Maus as memoir, biography, history, fiction, autobiography, or a mix of genres. In 1992 it became the first graphic novel to win a Pulitzer Prize.',
//           cover: 'https://m.media-amazon.com/images/I/71nXxfnNEcL._AC_UF1000,1000_QL80_.jpg'
//       },
//       {
//           title: 'Watchmen',
//           author: 'Alan Moore',
//           publisher: 'Dc Comics',
//           releasedDate: new Date('1943-04-06'),
//           edition: 1,
//           description: 'Watchmen is a comic book limited series by the British creative team of writer Alan Moore, artist Dave Gibbons and colorist John Higgins. It was published monthly by DC Comics in 1986 and 1987 before being collected in a single-volume edition in 1987. Watchmen originated from a story proposal Moore submitted to DC featuring superhero characters that the company had acquired from Charlton Comics. As Moores proposed story would have left many of the characters unusable for future stories, managing editor Dick Giordano convinced Moore to create original characters instead.',
//           cover: 'https://i.pinimg.com/originals/5e/76/35/5e763544503fa4ede3acab07cc986ae9.jpg'
//       },
//       {
//         title: 'NOS4A2',
//         author: 'Joe Hill',
//         publisher: 'HarperCollins',
//         releasedDate: new Date('1988-04-01'),
//         edition: 1,
//         description: 'Victoria McQueen has a secret gift for finding things: a misplaced bracelet, a missing photograph, answers to unanswerable questions. On her Raleigh Tuff Burner bike, she makes her way to a rickety covered bridge that, within moments, takes her wherever she needs to go, whether it’s across Massachusetts or across the country.',
//         cover: 'https://22dakika.org/wp-content/uploads/2019/06/MV5BMTgwNjA4MDkwNl5BMl5BanBnXkFtZTgwMjE3NTgwODM@._V1_-600x766.jpg'
//     },
//     {
//         title: 'It',
//         author: 'Stephen King',
//         publisher: 'Arqueiro',
//         releasedDate: new Date('1949-06-08'),
//         edition: 1,
//         description: 'Welcome to Derry, Maine. Its a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real.',
//         cover: 'https://m.media-amazon.com/images/I/613UazqBGHL._AC_UF1000,1000_QL80_.jpg'
//     },
//     {
//         title: 'frankenstein',
//         author: 'Mary Shelley',
//         publisher: 'Darkside Books',
//         releasedDate: new Date('1945-08-17'),
//         edition: 1,
//         description: 'Mary Shelleys timeless gothic novel presents the epic battle between man and monster at its greatest literary pitch. In trying to create life, the young student Victor Frankenstein unleashes forces beyond his control, setting into motion a long and tragic chain of events that brings Victor to the very brink of madness. How he tries to destroy his creation, as it destroys everything Victor loves, is a powerful story of love, friendship, scientific hubris, and horror. Based on the third edition of 1831, this Penguin Classics edition, with an introduction and notes by Maurice Hindle, contains all the revisions Mary Shelley made to her story, as well as her 1831 introduction and Percy Bysshe Shelleys preface to the first edition. It also includes as appendices a select collation of the texts of 1818 and 1831 together with A Fragment by Lord Byron and Dr John Polidoris "The Vampyre: A Tale.',
//         cover: 'https://darkside.vtexassets.com/arquivos/ids/168084/94-frankenstein-ou-o-prometeu-moderno.jpg?v=636802548559600000'
//     },
//     {
//         title: 'Classic Horror Vol. 1',
//         author: 'H.P. Lovecraft',
//         publisher: 'Darkside Books',
//         releasedDate: new Date('1899-01-01'),
//         edition: 1,
//         description: '',
//         cover: 'https://darkside.vtexassets.com/arquivos/ids/168101/95-hp-lovecraft-medo-classico-vol-1-miskatonic-edition.jpg?v=636802549092470000'
//     },
//     {
//         title: 'MAUS',
//         author: 'Art Spiegelman',
//         publisher: 'Quadrinhos na Cia',
//         releasedDate: new Date('1967-06-05'),
//         edition: 1,
//         description: 'Maus: A Survivors Tale, is a graphic novel by American cartoonist Art Spiegelman, serialized from 1980 to 1991. It depicts Spiegelman interviewing his father about his experiences as a Polish Jew and Holocaust survivor. The work employs postmodern techniques, and represents Jews as mice and other Germans and Poles as cats and pigs respectively. Critics have classified Maus as memoir, biography, history, fiction, autobiography, or a mix of genres. In 1992 it became the first graphic novel to win a Pulitzer Prize.',
//         cover: 'https://m.media-amazon.com/images/I/71nXxfnNEcL._AC_UF1000,1000_QL80_.jpg'
//     },
//     {
//         title: 'Watchmen',
//         author: 'Alan Moore',
//         publisher: 'Dc Comics',
//         releasedDate: new Date('1943-04-06'),
//         edition: 1,
//         description: 'Watchmen is a comic book limited series by the British creative team of writer Alan Moore, artist Dave Gibbons and colorist John Higgins. It was published monthly by DC Comics in 1986 and 1987 before being collected in a single-volume edition in 1987. Watchmen originated from a story proposal Moore submitted to DC featuring superhero characters that the company had acquired from Charlton Comics. As Moores proposed story would have left many of the characters unusable for future stories, managing editor Dick Giordano convinced Moore to create original characters instead.',
//         cover: 'https://i.pinimg.com/originals/5e/76/35/5e763544503fa4ede3acab07cc986ae9.jpg'
//     }
//   ];

  visible: boolean = false;
  books: Book[] = [];

  constructor(private bookService: BookService){}
    ngOnInit(): void {
        this.get();
    }

 get(){
    this.bookService.get().subscribe(res => {
        this.books = res.data;
        console.log(res);
        
    });        
  }
    showDialog(book: Book) {
        this.visible = true;
        this.selectedBook = book;
    }

    hideDialog() {
      this.visible = false; 
    }
}
