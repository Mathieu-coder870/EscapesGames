import { describe, expect, it } from "vitest";
import { Porte } from "./maison";


describe("une porte fermée ne peut etre franchie", () => {

    it("une porte fermée ne peut etre franchie", () => {
        const porte1 = new Porte(false);

        expect(porte1.trawel()).toBe(false);


    });
});