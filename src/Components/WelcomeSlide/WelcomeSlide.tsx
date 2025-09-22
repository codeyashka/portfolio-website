import { PROFESSION, SWIPE_HINT, WELCOME_PARAGRAPH } from "../../config/config.ts";

import "./WelcomeSlide.css";

const WelcomeSlide = () => {
    return (
        <div>
            <h1>{PROFESSION}</h1>
            <p>{WELCOME_PARAGRAPH}</p>
            <span>{SWIPE_HINT}</span>
        </div>
    );
};

export default WelcomeSlide;
