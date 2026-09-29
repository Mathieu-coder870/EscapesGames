export class Porte {
    isOpen: Boolean;

    constructor(statut: boolean) {
        this.isOpen = statut;
    }

    trawel(): boolean {
        if (this.isOpen) {
            return true;
        }
        return false;

    }
}