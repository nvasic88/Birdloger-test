<?php

namespace App;

use App\Filters\Filterable;

class Taxon extends Model
{
    use Concerns\CanBeCurated,
        Concerns\HasAncestry,
        Filterable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'taxa';

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['rank'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'restricted' => 'boolean',
    ];

    /**
     * Filters that can be used on queries.
     *
     * @var array
     */
    protected function filters() {
        return [
            'id' => \App\Filters\Id::class,
            'name' => \App\Filters\NameLike::class,
            'sort_by' => \App\Filters\SortBy::class,
            'except' => \App\Filters\ExceptIds::class,
            'rank_level' => \App\Filters\Taxon\RankLevel::class,
        ];
    }

    /**
     * Observations relation.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function observations()
    {
        return $this->hasMany(Observation::class);
    }

    /**
     * Approved observations.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function approvedObservations()
    {
        return $this->observations()->approved();
    }

    /**
     * Unapproved observations.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function unapprovedObservations()
    {
        return $this->observations()->unapproved();
    }

    /**
     * Red lists the taxon is on.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function redLists()
    {
        return $this->belongsToMany(RedList::class)->withPivot('category');
    }

    /**
     * Conventions by which the taxon should be protected.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function conventions()
    {
        return $this->belongsToMany(Convention::class);
    }

    /**
     * Life cycle stages the taxon goes through.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function stages()
    {
        return $this->belongsToMany(Stage::class);
    }

    /**
     * Scope the query to get only species or taxa of lower ranks.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSpeciesOrLower($query)
    {
        return $query->where('rank_level', '<=', 10);
    }

    /**
     * Get taxonomic rank name.
     *
     * @return string
     */
    public function getRankAttribute()
    {
        $ranks = static::getRanks();

        return trans('taxonomy.'.$ranks[$this->rank_level]);
    }

    /**
     * Get list of MGRS fields the taxon was observed at.
     *
     * @return array
     */
    public function mgrs()
    {
        return $this->approvedObservations()
            ->pluck('mgrs10k')
            ->unique()
            ->values()
            ->all();
    }

    /**
     * Taxon ranks as options for frontend.
     *
     * @return array
     */
    public static function getRankOptions()
    {
        return array_map(function ($rank, $index) {
            return [
                'value' => $index,
                'name' => trans('taxonomy.'.$rank),
            ];
        }, static::getRanks(), array_keys(static::getRanks()));
    }
}
