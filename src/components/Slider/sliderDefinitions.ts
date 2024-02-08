export interface Props {
    information: string,
    image: string,
    styles:{}
}

export interface viewToken {
    item: any;
    key: string;
    index: number | null;
    isViewable: boolean;
    section?: any;
}