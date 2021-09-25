<?php

namespace App\Exports\FieldObservations;

use App\Export;

class PublicFieldObservationsCustomExport extends CustomFieldObservationsExport
{
    /**
     * Database query to get the data for export.
     *
     * @param  \App\Export  $export
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function query(Export $export)
    {
        return parent::query($export)->public();
    }

    /**
     * Extract needed data from item.
     *
     * @param  \App\FieldObservation  $item
     * @return array
     */
    protected function transformItem($item)
    {
        $transformed = parent::transformItem($item);

        if ($item->shouldHideRealCoordinates()) {
            $transformed['latitude'] = number_format($item->observation->latitude, 1);
            $transformed['longitude'] = number_format($item->observation->longitude, 1);
            $transformed['accuracy'] = 5000;
        }

        return $transformed;
    }
}
