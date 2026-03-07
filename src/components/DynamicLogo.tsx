import { useState } from "react";

const parseQueryString = (queryString: string) => {
    const query = new Map<string, string>();
    for (const pair of queryString.slice(1).split("&")) {
        const [key, value] = pair.split("=");
        query.set(key, value);
    }
    return query;
};

export const DynamicLogo = () => {
    const [mouseOver, setMouseOver] = useState(false);
    const [isUwu] = useState(parseQueryString(window.location.search).has("uwu"));

    return isUwu ? (
        <a href="https://twitter.com/FemboyFounder/status/1781518824837443835" >
            <img
                src="/vtuber.png"
                className="her-image"
                alt="Tetraspace VTuber logo, created by @FemboyFounder on Twitter"
            />
        </a>
    ) : (
        <>
            <img
                src={mouseOver ? "/her.png" : "/her2.png"}
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