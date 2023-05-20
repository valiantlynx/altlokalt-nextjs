import Head from "next/head";
import PropTypes from "prop-types";
import Script from "next/script";
const SEO = ({ pageTitle }) => {
    const title = `${pageTitle} || Altlokalt - Finn bedrifter lokalt`;
    return (
        <Head>
            <title>{title}</title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="robots" content="all" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link rel="icon" href="/favicon.png" />
            <meta name="theme-color" content="#000000" />
            <meta
                name="description"
                content="Altlokal er en platform som hjelper deg finne bedrifter. Trenger du leverandør, varehus, klokke fikser, osv, alt lokalt fikser det."
            />
            <link
                rel="apple-touch-icon"
                href="https://raw.githubusercontent.com/Animevariant/Animevariant/main/apple-touch-icon.png"
            />
            <link rel="manifest" href="/manifest.json" />
            <link rel="assetlinks" href="/.well-known/assetlinks.json" />
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `,
                }}
            />
            <Script
                id="clarity"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
          (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "fma1em7w18");
        `,
                }}
            />
        </Head>
    );
};
SEO.propTypes = {
    pageTitle: PropTypes.string.isRequired,
};
export default SEO;
