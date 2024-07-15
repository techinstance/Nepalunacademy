<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudyMaterial;
use Illuminate\Support\Facades\DB;

class StudyMaterialController extends Controller
{
        // get all the live session

    function list(){
        return StudyMaterial::all();
    }

    //get specific user based livesession
    function Specific($id){
        try{
               
            $resultIds= DB::select('select study_material_id from user_materials where user_id = ? ',[$id]);

            // Initialize an array to hold session details
            $resultDetails = [];

            // Step 2: Iterate over each session ID
            foreach ($resultIds as $result) {
                // Extract the session_id from the object
                $Study_id = $result->study_material_id;

                // Step 3: Query the sessions table for details
                $details = DB::connection('mysql2')->select('select * from study_materials where id = ?', [$Study_id]);

                // If session details are found, add them to the array
                if (!empty($details)) {
                    $resultDetails[] = $details[0]; // Assuming details[0] is the relevant data
                }
            }
            return response()->json($resultDetails);

          }catch(\Exception $e){
            return response()->json([
                'message' => 'Failed to insert data',
                'error' => $e->getMessage()
            ], 500); // 500 Internal Server Error status code
          }
        
    }



    function user_materials_list(Request $request) {
        $User_id = $request["User_id"];
        $Study_id = $request["Study_material_id"];
        $currentTimestamp = now(); // Get the current timestamp
    
        // Attempt to insert the data
        try {
            DB::insert('insert into user_materials (user_id, study_material_id, created_at) values (?, ?, ?)', [$User_id, $Study_id, $currentTimestamp]);
            return response()->json([
                'message' => 'Data Inserted',
                'data' => [
                    'educator_id' => $User_id,
                    'study_material_id' => $Study_id,
                    'created_at' => $currentTimestamp
                ]
            ], 201); // 201 Created status code
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to insert data',
                'error' => $e->getMessage()
            ], 500); // 500 Internal Server Error status code
        }
    }
}
