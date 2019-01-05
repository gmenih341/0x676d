declare module "*/assets/pages.json5" {
    export interface IPage {
        slug: string;
        title: string;
        description: string;
        browserTitle: string;
    }
    const pages: IPage[];
    export default pages;
}