<?php

namespace App\Http\Controllers\Api;

use App\FieldObservation;
use App\Http\Resources\FieldObservationResource;

class PendingObservationsController
{
    /**
     * Get all pending field observations.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $query = FieldObservation::with([
            'observation.taxon', 'observation.photos', 'activity.causer',
            'observation.types.translations', 'observedBy', 'identifiedBy',
        ])->pending()->filter(request());

        if (request()->has('page')) {
            return FieldObservationResource::collection(
                $query->paginate(request('per_page', 15))
            );
        }

        return FieldObservationResource::collection($query->get());
    }
}
