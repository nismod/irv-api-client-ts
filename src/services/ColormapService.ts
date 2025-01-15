/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ColorMap } from '../models/ColorMap';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ColormapService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Colormap
     * Retrieve colormap values.  e.g. `colormap?colormap=reds&stretch_range=[0,10]`
     *
     * ::param colormap str The name of the colormap, e.g. `colormap=reds`
     *
     * ::param stretch_range iterable The url-encoded stretch-range over-which the colors should be generated
     *
     * e.g. `stretch_range=[0,10]`
     *
     * ::kwarg num_values int Number of values to generate in the colormap
     * @returns ColorMap Successful Response
     * @throws ApiError
     */
    public colormapGetColormap({
        colormap,
        stretchRange,
        numValues = 255,
    }: {
        colormap: string,
        stretchRange: (string | null),
        numValues?: number,
    }): CancelablePromise<ColorMap> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/colormap',
            query: {
                'colormap': colormap,
                'stretch_range': stretchRange,
                'num_values': numValues,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
