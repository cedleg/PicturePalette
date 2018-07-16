import { ImageInterface } from "./image-interface.model";

export class Image implements ImageInterface {
    public filename: string;
    public id: string;
    public src: string;
    public uploaded: Array<ImageInterface>;
    public results: Array<ImageInterface>;
    public info: Image;

}