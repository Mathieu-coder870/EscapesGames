export class Porte {
    isOpen: boolean;
    isCleParticulier: boolean;
    isUtilisé: boolean;
    color: string;

    constructor(statut: boolean, clePart: boolean, utilisée: boolean, colordoor: string) {
        this.isOpen = statut;
        this.isCleParticulier = clePart;
        this.isUtilisé = utilisée;
        this.color = colordoor;

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


    isOpenedwithUniqueKey(): boolean {
        if (this.isUtilisé) {
            return true;
        }
        return false;
    }

    checkMatchKey(colorDoor: string, keyGamer: string) {



        if (colorDoor === keyGamer) {

            this.isOpen = true;

        }

        return;
    }


    openTheDoor(sac: Inventory, keydoor: string) {
        this.isOpen = true;
        this.isUtilisé = true;
        sac.remove(keydoor);


    }

}

export class Gamer {
    name: string;
    key: string;

    constructor(nom: string, colorKey: string) {
        this.name = nom;
        this.key = colorKey;
    }


}

export class Key {
    private nameKey: string;

    constructor(nomOfcle: string) {
        this.nameKey = nomOfcle;
    }
}

export class Inventory {
    objects: string[];
    constructor(objects: string[] = []) {
        this.objects = objects;
    }

    getInventory() {
        return this.objects;
    }

    remove(object: string) {
        this.objects = this.objects.filter(item => item != object);
    }

}

