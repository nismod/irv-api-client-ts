/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Page_FeatureListItemOut_float__ = {
    properties: {
        items: {
            type: 'array',
            contains: {
                type: 'FeatureListItemOut_float_',
            },
            isRequired: true,
        },
        total: {
            type: 'number',
            isRequired: true,
        },
        page: {
            type: 'number',
            isRequired: true,
            minimum: 1,
        },
        size: {
            type: 'number',
            isRequired: true,
            minimum: 1,
        },
    },
} as const;
