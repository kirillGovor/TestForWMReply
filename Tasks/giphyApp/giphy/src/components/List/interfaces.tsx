export const API_KEY: string = "HfShRO0x4JtJ5f34VTuoYNn23Qrc9nuH";
export interface IFixed_height {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
}
export interface Images {
    fixed_height: IFixed_height;
    '480w_still': {
        url: string;
        width: string;
        height: string;
    };
}

export interface IRootObject {
    data: IDataItem[],
    SavedImages: IDataItem[],
    find?: string;
}
export interface IDataItem {
    type: string;
    id: string;
    url: string;
    bitly_gif_url: string;
    bitly_url: string;
    username: string;
    rating: string;
    title: string;
    images: Images
}



export interface Ipathname {
    pathname: string;

}
export interface IProps {
    props: IPropsDataItem[];
}
export interface IPropsDataItem {
    location: Ipathname;
}

export interface ISearch {
    inputValue: string;

}