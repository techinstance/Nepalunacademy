<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('create_live_sessions', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255); // Title with a maximum length of 255 characters
            $table->string('subject', 255); // Subject with a maximum length of 255 characters
            $table->string('course', 255); // Course with a maximum length of 255 characters
            $table->text('desc')->nullable(); // Description, can be null
            $table->unsignedBigInteger('educator_id')->nullable(); // Foreign key to educators, can be null
            $table->timestamps(); // Adds created_at and updated_at columns
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('create_live_sessions');
    }
};
