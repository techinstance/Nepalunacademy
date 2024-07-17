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
        Schema::create('user_sessions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('session_id');
            $table->timestamps();

            // $table->foreign('user_id')
            //       ->references('id')
            //       ->on('users')
            //       ->onDelete('cascade');

            // $table->foreign('session_id')
            //       ->references('id')
            //       ->on('mysql2.create_live_sessions')
            //       ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_sessions');
    }
};