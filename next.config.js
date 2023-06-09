/* eslint-disable no-unused-vars */
/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
});
const path = require("path");

module.exports = withPWA({
    reactStrictMode: false,
    sassOptions: {
        includePaths: [path.join(__dirname, "./src/assets/scss")],
    },
    env: {
        hostDomain: "http://localhost:3000",
        databaseDomain: "https://analytics.valiantlynx.com",
        productionDomain: "https://altlokalt.com",
        GA_MEASUREMENT_ID: "G-GB1M3DBFLW",
        CLARITY_KEY: "fma1em7w18",
        private_key:
            "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDIfERsudpJmgxJ\nJnAUeIEwP6jhX/9r0GWDZU83x6HjUkDJ53/NW3F5cx2b+atefcYbFPNcQGNvNaAR\nXyY2PB7vcLbOdyjg+RUzrRcXQJaj25FAlZ23orgzUiSYY9pPS3zXWjmgGghMMvg3\nzDjEfRAQxetkugTz6hczMwsA0z6wu+8VQbWv05jmGZAYBCwCuYmssG+OKShDTc4H\nB72/Xc50O3QcObX4SSLa8VT+V0+1LF0YXlvfOmgyYejbfEzXQo0LmzpL0Z0iQwe1\ng2V67Z238CC0IG5dRlZed3ZEH2bF5knkZwn1iugh3Y0C1CxUKLot5dJBtKF/LDSk\nZFsCJu/HAgMBAAECggEAFgXp7E75htFIcov+5DjH6Y7B/0lGK8fqMXtiWYcb+6Ew\nTchDi+xKHvnBcb4E5a3c97ee824n83JJbERuqabZYnBtcb5kPAZl86saw2qhwaE1\nJ7TnwjblPiSoBszH5qMCX+kLiyX2QwyW+Lt91ukYEoed+o7L9tFVuBbuKVU16JWi\nnXD911jVNX53YmKw17SVL8kfUTXigevjNeykJJ05a8q+vNpi216LMvwV27xEZGzB\nw/ETE7u8YPuWALI1Ebv1KwhXbNupQoNcJtOOQ134MwwkKuIwQYujHH3R0aNnQXc4\nbqIdtZGDeV8IUSCpLtAIwl/T7Yly8qhZrnrIjg2ypQKBgQDtq+FuvCLMopyVODCY\nA4bPR1+p5z5blEOtlWtwaubAEMB1EzZ7WjtQ75532/wXI4gzmzWUeKZpkzFZSPfx\nLC+0YTRNbT0EWOLlPBYxm0E1eWeQzfyVuOEFsiBMSSuXzs+GLptDoyAA6NmshUPz\nCwaNv2tuPNMejEVSBEo8RsBVNQKBgQDX8kJeCrQRQWtk5RMlD3CR+ZsrzZlTGCbZ\nK85nO2Tv8u2dqFDG81Lc0rxkiLXbqBF0MVWAHca9fhEuEEi7nD6I7eloNP5JrxGn\nj8Y9qUthWdxc2KTyVOZlp56TFZWn+QWXwfYsYKhBBVpGOJQSKkEJa55NGAQx0M6u\nRpf58gd8iwKBgQCGe3pcqTHbrquBN8EvUteGE/HKdqFvOk6tOt4HR0X4KcJsvIlY\ndO8ZVezKD3zuLtnTsaA4uagYFwSWa9Z37bO0kkgBA63B9vW0FjLMsPfN5Ts30YZ5\nxZn2GhtybviutoPwfhC2zee+/AKnPuT68iMsM8L7JomjQGW9CdZjkvkjfQKBgQC6\nE67MijyPgeegkSPmE1/U6Vikbg1oZK9VA0JgAfYALTxDVf4E8Ta9wXlEx+is1i30\nCW67bu0J68+x+aYyw3e/VgKCIOfdZlW4JVOVXoPt5xjTiHrZtf6yKbWi2D6U9yey\nlRgjNUbGgG5BhA9Td8WC8JD/rWov4tW1pm7emYeJ8QKBgQDmp0Yb5ScuQ43MrXO+\nnxYlRRcEKqMeDjNWnzd21NMX4Gz17P8XnqWnZDlk6iz/d+KonbjOgtjQ1fGIKr34\nS8qohFEhn6UXJ7xkZM4Da3mwmbrVdnDT9VBEusgUU9uLkP4OqWy+IFNk0EZ7Yyql\nBHnBVllGz9ahlbsT1xdZWKTOqg==\n-----END PRIVATE KEY-----\n",
        client_email: "nuron-nextjs@nuron-nextjs.iam.gserviceaccount.com",
    },
    images: {
        domains: [
            "https://analytics.valiantlynx.com",
            "analytics.valiantlynx.com",
            "altlokalt.com",
            "https://altlokalt.com",
            "http://host.docker.internal:8990",

        ],
    },
    output: "standalone",
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // eslint-disable-next-line no-param-reassign
        config.ignoreWarnings = [
            {
                message:
                    /(magic-sdk|@walletconnect\/web3-provider|@web3auth\/web3auth)/,
            },
        ];
        return config;
    },
});
