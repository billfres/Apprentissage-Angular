import { Subject } from "rxjs/Subject";

export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  //tableau d'appareils
   private appareils = [
        {
          id: 1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          id: 2,
          name: 'Frigo',
          status: 'allumé'
        },
        {
          id: 3,
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];
    
      emitAppareilSubject() {
        //next c'est pour forcer à emettre et slice pour faire une copie
        this.appareilsSubject.next(this.appareils.slice());
      }

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
          (appareilObject) => {
            return appareilObject.id === id;
          }
        );
        return appareil;
    }

    switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
        this.emitAppareilSubject();
    }
    
    switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';
        this.emitAppareilSubject();
    }

    addAppareil(name: string, status: string) {
      //création d'un nouveau objet vide
      const appareilObject = {
        id: 0,
        name: '',
        status: ''
      };

      //attribution des arguments
      appareilObject.name = name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
      /*La ligne pour l'id prend l'id du dernier élément actuel de l'array et ajoute 1.  
      Ensuite, l'objet complété est ajouté à l'array grace à push() et le Subject est déclenché pour tout garder à jour
      */
  }
}