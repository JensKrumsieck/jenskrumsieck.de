import Head from "next/head";

export default function Meta(props) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{props.title}</title>
            <meta property="og:title" content={props.title} />
            <meta name="twitter:title" content={props.title} />
            <meta property="og:site_name" content={props.title} />

            <meta name="description" content={props.desc} />
            <meta property="og:description" content={props.desc} />
            <meta name="twitter:description" content={props.desc} />

            <meta name="og:image" content={props.hostname + props.img} />
            <meta name="twitter:image" content={props.hostname + props.img} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="627" />

            <meta property="og:locale" content={props.locale} />
            <link rel="canonical" href={props.hostname + props.locale + props.pathname} />
            <link rel="alternate" href={props.hostname + "de" + props.pathname} hrefLang="de" />
            <link rel="alternate" href={props.hostname + "en" + props.pathname} hrefLang="en" />

            <link rel="icon" type="icon/ico" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/favicon.ico" />

            <meta name="author" content="Jens Krumsieck" />
            <meta name="copyright" content="Jens Krumsieck" />
            <meta property="article:publisher" content="https://www.facebook.com/jens.krumsieck/" />
            <meta name="twitter:site" content="@jens_ation" />
            <meta name="twitter:creator" content="@jens_ation" />

            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="keywords" content="Chemiker, Chemist, C#, Programming, Software, Programmierung, PorphyStruct, Isoporphyrin, ChemSharp, Konformation, Developer" />

            <meta name="robots" content="index,follow" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "http://schema.org/",
                        "@type": "Organization",
                        "url": "http://jenskrumsieck.de/",
                        "logo": "http://jenskrumsieck.de/img/logo.svg"
                    })
                }} />

        </Head>
    )
}
