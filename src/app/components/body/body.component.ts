import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar = true;

    frase:any = {
        mensaje: 'Si no lo puedes explicar de forma simple, no lo entiendes suficientemente bien',
        autor: 'Albert Einstein'
    };

    ilustres: string[] = ['Charles Darwin', 'Isaac Newton', 'Sigmund Freud']
}