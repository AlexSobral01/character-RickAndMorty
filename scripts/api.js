export const url = async (character) => {
    try {
        const res = await fetch(
            `https://rickandmortyapi.com/api/character/${character}`
        );

        if (!res.ok) throw new Error('Personagem não encontrado');

        return await res.json();

    } catch (err) {
        console.log(err);
    }
};