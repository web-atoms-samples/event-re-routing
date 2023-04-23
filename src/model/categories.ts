export interface ICategory {
    label: string;
    value: string;
    icon: string;
}

const category = (label, icon = "fa-solid fa-books", value = label) => ({label, value, icon});

const categories = (): ICategory[] => [
    category("Academic", "fa-solid fa-graduation-cap"),
    category("Arts", "fa-solid fa-palette"),
    category("General Science", "fa-solid fa-flask"),
    category("Mathematics", "fa-solid fa-square-root-variable"),
    category("Music", "fa-solid fa-music"),
    category("Partical Physics", "fa-solid fa-radiation"),
    category("Astro Physics", "fa-solid fa-earth-americas"),
    category("Chemistry", "fa-solid fa-flask-vial"),
    category("Biology", "fa-solid fa-microscope"),
    category("Fiction", "fa-solid fa-user-secret"),
    category("Sci-Fi", "fa-solid fa-robot"),
    category("Self Help", "fa-solid fa-handshake-angle")
];
export default categories;
