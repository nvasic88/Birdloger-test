<?php

namespace Tests\Unit\Jobs;

use App\Jobs\ProcessUploadedPhoto;
use App\Photo;
use Illuminate\Http\Testing\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Tests\TestCase;

class ProcessUploadedPhotoTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        config()->set('biologer.photo_resize_dimension', 800);
    }

    /** @test */
    public function it_resizes_landscape_image_by_width_while_keeping_aspect_ratio()
    {
        Storage::fake('public');
        $path = File::image(Str::random().'.jpg', 1600, 1200)->store('photos', [
            'disk' => 'public',
        ]);
        $photo = Photo::factory()->make(['path' => $path]);

        $this->app->call([new ProcessUploadedPhoto($photo), 'handle']);

        list($width, $height) = getimagesize($photo->absolutePath());
        $this->assertEquals(800, $width);
        $this->assertEquals(600, $height);
    }

    /** @test */
    public function it_resizes_portrait_image_by_height_while_keeping_aspect_ratio()
    {
        Storage::fake('public');
        $path = File::image('test-image.jpg', 1200, 1600)->store('photos', [
            'disk' => 'public',
        ]);
        $photo = Photo::factory()->make(['path' => $path]);

        $this->app->call([new ProcessUploadedPhoto($photo), 'handle']);

        list($width, $height) = getimagesize($photo->absolutePath());
        $this->assertEquals(600, $width);
        $this->assertEquals(800, $height);
    }

    /** @test */
    public function it_does_not_resize_the_image_if_there_is_no_need_to_do_so()
    {
        Storage::fake('public');
        $path = File::image('test-image.jpg', 500, 400)->store('photos', [
            'disk' => 'public',
        ]);
        $photo = Photo::factory()->make(['path' => $path]);

        $this->app->call([new ProcessUploadedPhoto($photo), 'handle']);

        list($width, $height) = getimagesize($photo->absolutePath());
        $this->assertEquals(500, $width);
        $this->assertEquals(400, $height);
    }

    /** @test */
    public function it_crops_image_if_cropping_information_is_provided()
    {
        Storage::fake('public');
        $path = File::image('test-image.jpg', 500, 400)->store('photos', [
            'disk' => 'public',
        ]);
        $photo = Photo::factory()->make(['path' => $path]);

        $this->app->call([new ProcessUploadedPhoto($photo, [
            'width' => 100,
            'height' => 100,
            'x' => 100,
            'y' => 100,
        ]), 'handle']);

        list($width, $height) = getimagesize($photo->absolutePath());
        $this->assertEquals(100, $width);
        $this->assertEquals(100, $height);
    }
}
