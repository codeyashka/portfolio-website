import { ABOUT_PARAGRAPH, ABOUT_SECONDARY_TITLE, ABOUT_TITLE } from "../../config/config.ts";

const AboutSlide = () => {
    return (
        <div>
            <h1>{ABOUT_TITLE}</h1>
            <span>{ABOUT_SECONDARY_TITLE}</span>
            <p>{ABOUT_PARAGRAPH}</p>
        </div>
    );
};

export default AboutSlide;
