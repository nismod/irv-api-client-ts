/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TileSourceDomains } from '../models/TileSourceDomains';
import type { TileSourceMeta } from '../models/TileSourceMeta';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TilesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get All Tile Source Meta
     * Retrieve metadata about all the tile sources available
     * @returns TileSourceMeta Successful Response
     * @throws ApiError
     */
    public tilesGetAllTileSourceMeta(): CancelablePromise<Array<TileSourceMeta>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tiles/sources',
        });
    }

    /**
     * Get Tile Source Meta
     * Retrieve metadata about a single tile source
     * @returns TileSourceMeta Successful Response
     * @throws ApiError
     */
    public tilesGetTileSourceMeta({
        sourceId,
    }: {
        sourceId: number,
    }): CancelablePromise<TileSourceMeta> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tiles/sources/{source_id}',
            path: {
                'source_id': sourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Tile Source Domains
     * Retrieve all combinations available for the source domain
     * @returns TileSourceDomains Successful Response
     * @throws ApiError
     */
    public tilesGetTileSourceDomains({
        sourceId,
    }: {
        sourceId: number,
    }): CancelablePromise<TileSourceDomains> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tiles/sources/{source_id}/domains',
            path: {
                'source_id': sourceId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Tile
     * Serves XYZ Raster Tiles with the given colormap / stretch range or explicit color map for categorical data.
     *
     * ::param keys str A string containing the url-encoded keys which address the required raster.
     *
     * This string is constructed as-per Terracotta URL requests, e.g: `aqueduct/gsm1/1980/baseline`
     *
     * Information about datasets available, their associated keys and order can be found using the `/tiles/sources/21/domains` endpoint.
     *
     * ::param tile_z int Tile Z address
     * ::param tile_x int Tile X address
     * ::param tile_y int Tile Y address
     *
     * ::kwarg colormap str A string representing the colormap to be used to render the tile.  Colormaps can be access separately through the `/colormap` endpoint
     *
     * e.g. `colormap=reds`
     *
     * ::kwarg stretch_range iterable The range over-which to stretch the pixel values
     *
     * e.g. `stretch_range=[0,10]`
     *
     * ::kwarg explicit_color_map str A categorical colormap `{pixel_value: (R,G,B,A)}` to be used with a given categorical data-source.
     *
     * __NOTE__: `colormap` arg must be set to "explicit" in order to use `explicit_color_map`
     *
     * .e.g colormap=explicit&explicit_color_map="{"0": (0,0,0,255), "1": 0,0,255,255, "2": 0,255,255,255, "3": 255,255,255,255}"
     * @returns any Successful Response
     * @throws ApiError
     */
    public tilesGetTile({
        keys,
        tileZ,
        tileX,
        tileY,
        colormap,
        stretchRange,
        explicitColorMap,
    }: {
        keys: string,
        tileZ: number,
        tileX: number,
        tileY: number,
        colormap?: (string | null),
        stretchRange?: (string | null),
        explicitColorMap?: (string | null),
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tiles/{keys}/{tile_z}/{tile_x}/{tile_y}.png',
            path: {
                'keys': keys,
                'tile_z': tileZ,
                'tile_x': tileX,
                'tile_y': tileY,
            },
            query: {
                'colormap': colormap,
                'stretch_range': stretchRange,
                'explicit_color_map': explicitColorMap,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
