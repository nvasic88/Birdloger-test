<?php

namespace Tests\Unit\Exports;

use App\User;
use App\Stage;
use App\Taxon;
use App\License;
use Tests\TestCase;
use App\Jobs\PerformExport;
use Tests\ObservationFactory;
use Illuminate\Support\Facades\Storage;
use Box\Spout\Common\Helper\EncodingHelper;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Exports\ContributorFieldObservationsExport;

class ContributorFieldObservationsExportTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function contributors_field_observations_are_exported_to_a_csv_file()
    {
        Storage::fake('public');
        $this->seed('StagesTableSeeder');

        $this->actingAs($user = factory(User::class)->create());

        $observation = ObservationFactory::createFieldObservation([
            'created_by_id' => $user,
            'taxon_id' => factory(Taxon::class)->create(['name' => 'Test taxon']),
            'year' => 2001,
            'month' => 2,
            'day' => 23,
            'latitude' => 12.3456,
            'longitude' => 12.3456,
            'location' => 'Test location',
            'mgrs10k' => '34TEST34',
            'accuracy' => 12,
            'elevation' => 123,
            'sex' => 'male',
            'observer' => 'Test observer',
            'identifier' => 'Test identifier',
            'stage_id' => Stage::where('name', 'larva')->first(),
            'number' => 2,
            'note' => 'Test note',
            'project' => 'Test project',
            'approved_at' => now(),
            'found_on' => 'Ground',
        ], [
            'time' => '10:23',
            'license' => License::CC_BY_SA,
            'found_dead' => true,
            'found_dead_note' => 'Found dead',
        ]);

        $export = ContributorFieldObservationsExport::create([
            'id', 'taxon', 'identifier', 'observer', 'sex', 'year', 'month',
            'day', 'latitude', 'longitude', 'location', 'accuracy', 'elevation',
            'stage', 'number', 'note', 'project', 'found_on', 'status',
        ], [], true);

        (new PerformExport($export))->handle();

        Storage::disk('public')->assertExists($export->path());

        $this->assertEquals(
            EncodingHelper::BOM_UTF8
            .'ID,Taxon,Identifier,Observer,Sex,Year,Month,Day,Latitude,Longitude,'
            .'Location,Accuracy,Elevation,Stage,Number,Note,Project,"Found On",Status'."\n"
            .$observation->id.',"Test taxon","Test identifier","Test observer",'
            .'Male,2001,2,23,12.3456,12.3456,"Test location",12,123,Larva,2,'
            .'"Test note","Test project",Ground,Approved'."\n",
            Storage::disk('public')->get($export->path())
        );
    }
}
