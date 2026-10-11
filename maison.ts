export class Porte {
    isOpen: boolean;
    isCleParticulier: boolean;
    isUtilisé: boolean;
    color: string;
    enigme: Enigm;

    constructor(statut: boolean, clePart: boolean, utilisée: boolean, colordoor: string, engimeDoor: Enigm) {
        this.isOpen = statut;
        this.isCleParticulier = clePart;
        this.isUtilisé = utilisée;
        this.color = colordoor;
        this.enigme = engimeDoor;

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

    setIsOpen(actionOpenOnDoor: boolean) {
        this.isOpen = actionOpenOnDoor;
    }

}

export class Gamer {
    name: string;
    key: string;
    inventory: Inventory;
    answer: string;
    enigme: Enigm;


    constructor(nom: string, colorKey: string, inventaire: Inventory, answerEnigm: string, engimeOfaDoor: Enigm) {
        this.name = nom;
        this.key = colorKey;
        this.inventory = inventaire;
        this.answer = answerEnigm;
        this.enigme = engimeOfaDoor;
    }
    // ancienne version debut
    // addNewElt(object: string) {
    //     this.inventory.addNewElt(object);
    // }
    // fin ancienne version
    addNewElt(elt: string) {
        this.inventory.addElt(elt);
    }

    // essai
    removeElt(sac: Inventory, elt: string) {
        sac.remove(elt);
    }
    // essai

    giveAnswerForEnigm(stateAnswer: boolean) {
        if (stateAnswer) {
            this.enigme.setStateEnigm(true);
            return true;
        }
        else {
            return false;
        }
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


    addNewElt(object: string): boolean {
        const objetaRanger = this.objects.find(objetaRanger => objetaRanger === object);
        if (objetaRanger) {
            return false;
        }
        else {
            this.objects.push(object);
            return true;
        }
    }

    useObject(object: string): boolean {
        const objetaUtiliser = this.objects.find(objetaUtiliser => objetaUtiliser === object);
        if (objetaUtiliser) {
            return true;
        }
        else {
            return false;
        }
    }
}



export class Room {
    name: string;
    objects: string[];

    constructor(nomSalle: string, objects: string[]) {
        this.name = nomSalle;
        this.objects = objects;
    }

    removeElt(objetRetire: string): boolean {

        const objetaRetire = this.objects.find(objetaRetire => objetRetire === objetaRetire
        );

        if (objetaRetire) {
            this.objects = this.objects.filter(item => item != objetaRetire);
            return true;
        } else {
            return false;
        }
    }


}

export class Enigm {
    enigm: string;
    isResolu: boolean

    constructor(nameOfEnigm: string, stateEnigm: boolean) {
        this.enigm = nameOfEnigm;
        this.isResolu = stateEnigm;
    }

    getStateEnigm() {
        return this.isResolu;
    }

    setStateEnigm(actualStateEnigm: boolean) {
        if (this.isResolu) {
            this.isResolu = true;
        } else {
            this.isResolu = actualStateEnigm;
        }
    }
}


