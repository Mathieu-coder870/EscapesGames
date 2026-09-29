import { describe, expect, it } from "vitest";
import { Porte } from "./maison";


describe("Porte fermée", () => {

    it("une porte fermée ne peut etre franchie", () => {
        const porte1 = new Porte(false, true);
        expect(porte1.trawel()).toBe(false);


    });
});

describe("porte ouverte", () => {
    it("une porte ouverte peut etre franchie", () => {

        const porte2 = new Porte(true, true);

        expect(porte2.trawel()).toBe(true);
    });
}

);


describe("Porte avec cle", () => {
    it("Chaque porte peut necessite une cle particulier", () => {
        const porte3 = new Porte(true, true);
        expect(porte3.isParticularkey()).toBe(true);
    });
});

// describe("Inventory", () => {
//  it("Quand ume cle est utilisée, elle est retiré de l'inventaire", () => {
//     const porte4 = new Porte(true, true, true)
//  })
// });

