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
        Schema::create('vacancies', function (Blueprint $table) {
            $table->id(); // Primary key with AUTO_INCREMENT
            $table->string('Title', 5000); // Title field with a max length of 5000 characters
            $table->text('Desc'); // Desc field as a text column
            $table->string('Link', 5000); // Link field with a max length of 5000 characters
            $table->timestamps(); // Adds created_at and updated_at fields
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacancies');
    }
};
