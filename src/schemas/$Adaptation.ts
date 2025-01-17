/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Adaptation = {
    properties: {
        hazard: {
            type: 'string',
            isRequired: true,
        },
        rcp: {
            type: 'string',
            isRequired: true,
        },
        adaptation_name: {
            type: 'string',
            isRequired: true,
        },
        adaptation_protection_level: {
            type: 'number',
            isRequired: true,
        },
        properties: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
            isRequired: true,
        },
    },
} as const;
