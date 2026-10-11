import { describe, expect, it } from "vitest";
import { Gamer, Porte, Inventory, Room, Enigm } from "./maison";
import { ExpressionType } from "@angular/compiler";


describe("Porte fermée", () => {

    it("une porte fermée ne peut etre franchie", () => {
        const enigme = new Enigm("", true);
        const porte1 = new Porte(false, true, true, "blue", enigme);
        expect(porte1.trawel()).toBe(false);


    });
});

describe("porte ouverte", () => {
    it("une porte ouverte peut etre franchie", () => {
        const enigme = new Enigm("", true);
        const porte2 = new Porte(true, true, true, "blue", enigme);

        expect(porte2.trawel()).toBe(true);
    });
}

);


describe("Porte avec cle", () => {
    it("Le joueur peut ouvrir la porte s'il possede la cle correcpondante", () => {
        const inventaire = new Inventory([]);
        const enigme = new Enigm("", true);
        const gamer1 = new Gamer('Toto', "blue", inventaire, "", enigme);


        const porte3 = new Porte(false, true, true, "blue", enigme);
        porte3.checkMatchKey(porte3.color, gamer1.key);


        expect(porte3.isOpen).toBe(true);

    });
});

describe("Inventory", () => {
    it("Quand une cle est utilisée, elle est retiré de l'inventaire", () => {
        const enigme = new Enigm("", true);
        const porte = new Porte(false, true, false, "blue", enigme);
        const inventaire = new Inventory(["blue", "torch"]);
        porte.openTheDoor(inventaire, "blue");

        expect(inventaire.objects.length).toBe(1);
        expect(inventaire.objects).toStrictEqual(["torch"]);

    })
});

describe("ramasser un objet dans une salle", () => {
    it("Quand un joueur ramasse un objet, alors rajout à son inventaire et retirer de la salle", () => {

        const inventaire = new Inventory(["Torch"]);
        const enigme = new Enigm("", true);
        const gamer2 = new Gamer("John", "red", inventaire, "", enigme);
        const salle = new Room("Red Room", ["Redtable"]);

        salle.removeElt("Redtable");
        gamer2.inventory.addNewElt("Redtable");
        expect(gamer2.inventory.objects.length).toBe(2);
        expect(salle.objects).toStrictEqual([]);

    })
});


describe("evolution comportement ramassage", () => {
    it("Un objet ramassé une fois ne peut etre ramasser deux fois", () => {
        const inventaire = new Inventory(["Torch"]);
        const enigme = new Enigm("", true);
        const gamer3 = new Gamer("Georges", "red", inventaire, "", enigme);
        const salle = new Room("Red Room", ["RedChair"]);
        salle.removeElt("RedChair");
        gamer3.inventory.addNewElt("RedChair");

        expect(salle.objects).toStrictEqual([]);
        expect(salle.removeElt("RedChair")).toBe(false);
        expect(gamer3.inventory.addNewElt("RedChair")).toBe(false);

    })
});

describe("Possibilité d'utiliser un objet", () => {
    it("Un joueur ne peut utiliser qu'un objet qu'il possède dans son inventaire", () => {
        const inventaire = new Inventory(["Torch"]);
        const enigme = new Enigm("", true);
        const gamer3 = new Gamer("Georges", "red", inventaire, "", enigme);
        expect(gamer3.inventory.useObject("Torch")).toBe(true);
        expect(gamer3.inventory.useObject("Weapon")).toBe(false);

    })
});

describe("Une porte peut être associée à une énigme.", () => {
    it("Pour franchir la porte, l’énigme doit avoir été résolue.", () => {
        const enigme = new Enigm("enigme", false);
        const porte3 = new Porte(false, true, true, "blue", enigme);
        enigme.setStateEnigm(true);
        porte3.setIsOpen(enigme.getStateEnigm());
        expect(porte3.trawel()).toBe(true);
    })

    it("Le joueur doit fournir la bonne réponse pour résoudre l’énigme.", () => {
        const enigme = new Enigm("enigme", false);
        const inventaire = new Inventory(["Torch"]);
        const gamer3 = new Gamer("Georges", "red", inventaire, "", enigme);

        gamer3.giveAnswerForEnigm(true);
        expect(enigme.getStateEnigm()).toBe(true);
    })

    it("Une mauvaise réponse ne permet pas de résoudre l’énigme.", () => {
        const enigme = new Enigm("enigme", false);
        const inventaire = new Inventory(["Torch"]);
        const gamer3 = new Gamer("Georges", "red", inventaire, "", enigme);

        gamer3.giveAnswerForEnigm(false);
        expect(enigme.getStateEnigm()).toBe(false);
    })
    it("Une fois résolue, l’énigme reste résolue.", () => {
        const enigme = new Enigm("enigme", false);
        const inventaire = new Inventory(["Torch"]);
        const gamer3 = new Gamer("Georges", "red", inventaire, "", enigme);

        gamer3.giveAnswerForEnigm(true);
        gamer3.giveAnswerForEnigm(false);
        expect(enigme.getStateEnigm()).toBe(true);

    })
});