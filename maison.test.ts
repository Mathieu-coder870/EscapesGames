import { describe, expect, it } from "vitest";
import { Gamer, Porte } from "./maison";


describe("Porte fermée", () => {

    it("une porte fermée ne peut etre franchie", () => {
        const porte1 = new Porte(false, true, true, "blue");
        expect(porte1.trawel()).toBe(false);


    });
});

describe("porte ouverte", () => {
    it("une porte ouverte peut etre franchie", () => {

        const porte2 = new Porte(true, true, true, "blue");

        expect(porte2.trawel()).toBe(true);
    });
}

);


describe("Porte avec cle", () => {
    it("Le joueur peut ouvrir la porte s'il possede la cle correcpondante", () => {

        const gamer1 = new Gamer('Toto', "blue");

        const porte3 = new Porte(false, true, true, "blue");
        porte3.checkMatchKey(porte3.color, gamer1.key);


        expect(porte3.isOpen).toBe(true);

    });
});

describe("Inventory", () => {
    it("Quand une cle est utilisée, elle est retiré de l'inventaire", () => {
        const porte4 = new Porte(true, true, true, "blue");


        porte4.isOpenedwithUniqueKey();

    })
});

