import {IKImage} from "imagekitio-react";
import ImageKitVariables from "@/components/predefined/ImageKitVariables.jsx";

const ImageOnline = (props) => {
    return (
        <IKImage
            urlEndpoint={ImageKitVariables.IMAGEKIT_URL}
            quality={100}
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            {...props}
        />
    )
}

export default ImageOnline;