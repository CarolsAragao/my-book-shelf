import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ValidatorCPFService {   
    validCPF(sentCPF: string): boolean {

        sentCPF = sentCPF.replace(/\D+/, '');

        if(sentCPF.length !== 11) return false;

        if(sentCPF[0].repeat(sentCPF.length) === sentCPF) return false;

        let newCPF = this.generateNewCPF(sentCPF);

        if(newCPF !== sentCPF) return false;

        return true;
    }

    generateNewCPF(sentCPF: string): string {
        let cpfNoDigits = sentCPF.slice(0, -2);

        let dig1 = this.generatesDig(cpfNoDigits);

        let dig2 = this.generatesDig(cpfNoDigits + dig1);

        let newCPF = cpfNoDigits + dig1 + dig2;

        return newCPF;
    }

    generatesDig(cpfNoDigits: string) {
        let tot = 0;
        let reverse = cpfNoDigits.length + 1;

        for(let num of cpfNoDigits) {
            tot += Number(num) * reverse
            reverse--
        }

        let digit = 11 - (tot % 11);
        return digit <= 9 ? String(digit) : '0';
    }
}

