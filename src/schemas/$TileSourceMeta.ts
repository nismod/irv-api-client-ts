/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TileSourceMeta = {
    properties: {
        id: {
            type: 'number',
        },
        url_keys: {
            type: 'array',
            contains: {
                properties: {
                },
            },
        },
        source_db: {
            type: 'string',
            isRequired: true,
        },
        global_type: {
            type: 'string',
            isRequired: true,
        },
        domain: {
            type: 'string',
            isRequired: true,
        },
        full_name: {
            type: 'string',
            isRequired: true,
        },
        description: {
            type: 'string',
            isRequired: true,
        },
        license: {
            type: 'string',
            isRequired: true,
        },
        variables: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
            isRequired: true,
        },
    },
} as const;
