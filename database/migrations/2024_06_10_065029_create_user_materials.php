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
        Schema::create('user_materials', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('educator_id');
            $table->unsignedBigInteger('study_material_id');
            $table->timestamps();

            // $table->foreign('educator_id')
            //       ->references('id')
            //       ->on('mysql2.profiles')
            //       ->onDelete('cascade');

            // $table->foreign('study_material_id')
            //       ->references('id')
            //       ->on('mysql2.study_materials')
            //       ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_materials');
    }
};