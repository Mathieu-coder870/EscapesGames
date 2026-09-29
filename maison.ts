export class Porte {
    isOpen: Boolean;
    isCleParticulier: boolean;
    // isUtilisé :boolean;

    constructor(statut: boolean, clePart: boolean, utilisée: boolean) {
        this.isOpen = statut;
        this.isCleParticulier = clePart;
        // this.isUtilisé = utilisée;

    }

    trawel(): boolean {
        if (this.isOpen) {
            return true;
        }
        return false;

    }

    isParticularkey(): boolean {
        if (this.isCleParticulier) {
            return true;
        }
        return false;
    }


    //  isOpenedwithUniqueKey(): boolean {
    //         if (this.isUtilisé) {
    //             return true;
    //         }
    //         return false;
    //     }


}