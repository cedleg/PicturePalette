import { Image } from "./image.model";

export interface ImageInterface {
    filename: string;
    id: string;
    src: string;
    uploaded: Array<ImageInterface>;
    results: Array<ImageInterface>;
    info: Image;

}