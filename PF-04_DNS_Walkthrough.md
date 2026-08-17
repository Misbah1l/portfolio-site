# PF-04 DNS Walkthrough

## What DNS Does

DNS (Domain Name System) translates human-readable domain names into the information needed to reach a website. Instead of remembering a server address, users can type a domain such as `misbahsaeed.netlify.app` or, in the future, my FlyRank subdomain.

When someone enters a website address in a browser, the browser first needs to find where that domain is hosted. It sends a DNS query to a DNS resolver. The resolver looks for the required DNS information and may contact the domain's authoritative nameservers. The nameserver provides the DNS record for the requested domain or hostname. The resolver then returns the result to the browser, allowing it to connect to the correct hosting service.

## What a CNAME Record Is

A CNAME (Canonical Name) record is a DNS record that makes one hostname an alias of another hostname. Instead of directly storing an IP address, a CNAME points a hostname to another domain name.

For example, when a custom subdomain is connected to a hosting platform, the CNAME can point the subdomain to the hostname provided by that hosting platform. The exact CNAME value for my future FlyRank subdomain will be provided when the subdomain is provisioned.

## My Future FlyRank Setup

My current portfolio is hosted on Netlify at:

`https://misbahsaeed.netlify.app/`

After my capstone is approved, FlyRank will provision a subdomain such as:

`yourname.flyrank.ai`

FlyRank Ops will create the DNS record for the subdomain. I will then add the custom domain in Netlify's domain settings and associate it with my existing website. This does not require rebuilding or migrating the website because the custom domain is simply another address pointing to the same hosted site.

## DNS Request Flow

The process can be understood as:

**Browser → DNS Resolver → Authoritative Nameserver → DNS Record → Netlify → Website**

First, the browser requests the DNS information for the domain. The DNS resolver finds the appropriate nameserver and obtains the relevant DNS record. The resolver returns the result to the browser, which can then connect to Netlify. Netlify receives the web request and serves my portfolio.

DNS information can be cached by resolvers and devices, so changes to DNS records may take some time to propagate.

## HTTPS

After the custom domain is correctly connected to Netlify, HTTPS provides an encrypted connection between the visitor and the website. Netlify can issue and manage the SSL/TLS certificate for the domain. Once HTTPS is active, visitors should be able to access the site securely and see the padlock in the browser.

## Future Checklist

When my FlyRank subdomain is provisioned, I will:

1. Receive the FlyRank subdomain and DNS configuration.
2. Add the custom domain in Netlify.
3. Confirm that the DNS record points to the correct Netlify destination.
4. Wait for DNS changes to propagate.
5. Confirm that the domain resolves to my portfolio.
6. Verify that HTTPS is active and the browser shows the secure connection.

The important point is that the custom domain is a pointer to my existing hosted website, not a new website or migration.
