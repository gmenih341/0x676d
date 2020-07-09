import {useStaticQuery, graphql} from 'gatsby';

export interface SocialMetadata {
    github: string;
    linkedIn: string;
    email: string;
}

export function useSocial (): SocialMetadata {
    const result = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    social {
                        github
                        linkedIn
                        email
                    }
                }
            }
        }
    `);

    return result.site.siteMetadata.social;
}
