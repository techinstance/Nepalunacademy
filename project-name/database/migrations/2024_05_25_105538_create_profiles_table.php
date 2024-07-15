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
        Schema::create('profiles', function (Blueprint $table) {
            $table->id('id'); // Primary key with AUTO_INCREMENT
            $table->string('name', 255); // Name field with a max length of 255 characters
            $table->text('About'); // About field as a text column
            $table->string('Course', 255); // Course field with a max length of 255 characters
            $table->string('Subject', 255); // Subject field with a max length of 255 characters
            $table->timestamps(); // Adds created_at and updated_at fields
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
