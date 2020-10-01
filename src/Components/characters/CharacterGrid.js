import React from "react";
import CharacterItem from "./Characteritem.js";
import Spinner from "../ui/Spinner.js";

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
            {items.map((item) => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))}
        </section>
    );
};

export default CharacterGrid;
