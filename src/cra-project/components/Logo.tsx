import { useState } from "react";
import { parseQueryString } from "./helpers";
import { her, her2, vtuberLogo } from "../assets/assets";

export const Logo = () => {
    const [mouseOver, setMouseOver] = useState(false);
    const [isUwu] = useState(parseQueryString(window.location.search).has("uwu"));

    return isUwu ? (
        <a href="https://twitter.com/FemboyFounder/status/1781518824837443835" >
            <img
                src={vtuberLogo}
                className="her-image"
                alt="Tetraspace VTuber logo, created by @FemboyFounder on Twitter"
            />
        </a>
    ) : (
        <>
            <img
                src={mouseOver ? her : her2}
                className="her-image"
                alt="Smiling StyleGAN-generated portrait of an anime girl with white hair in a fluffy bob, pink eyes, a flower-like AI generation artefact in her hair, and a shirt collar."
                onMouseOver={() => setMouseOver(true)}
                onMouseOut={() => setMouseOver(false)}
            />
            <center>
                <p>💎</p>
            </center>
        </>
    )
}