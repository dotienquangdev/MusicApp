import unidecode from "unidecode";
export const convertToSlug = (text: string): string => {
    const unidecodeText = unidecode(text.trim());

    const slug: string = unidecodeText.replace(/\s=/g, "-");

    console.log(text);
    console.log(slug);
    console.log(unidecodeText);

    return slug;
}