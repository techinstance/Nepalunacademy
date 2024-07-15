<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\create_live_session;
use Illuminate\Support\Facades\DB;


class LiveSessionController extends Controller
{
    // get all the live session
    function list(){
        return create_live_session::all();
    }
    //get specific user based livesession
    function Specific($id){
          try{
               
            $sessionIds = DB::select('select session_id from user_sessions where user_id = ?', [$id]);

            // Initialize an array to hold session details
            $sessionDetails = [];

            // Step 2: Iterate over each session ID
            foreach ($sessionIds as $session) {
                // Extract the session_id from the object
                $sessionId = $session->session_id;

                // Step 3: Query the sessions table for details
                $details = DB::connection('mysql2')->select('select * from create_live_sessions where id = ?', [$sessionId]);

                // If session details are found, add them to the array
                if (!empty($details)) {
                    $sessionDetails[] = $details[0]; // Assuming details[0] is the relevant data
                }
            }

            // Step 4: Return the collected session details
            return response()->json($sessionDetails);


          }catch(\Exception $e){
            return response()->json([
                'message' => 'Failed to insert data',
                'error' => $e->getMessage()
            ], 500); // 500 Internal Server Error status code
          }
        
        
    }







    function user_live_session(Request $request){
        $User_id = $request["User_id"];
        $Live_id = $request["Live_session_id"];
        $currentTimestamp = now(); // Get the current timestamp
    
        // Attempt to insert the data
        try {
            DB::insert('insert into user_sessions (user_id, session_id) values (?, ?)', [$User_id, $Live_id]);
            return response()->json([
                'message' => 'Data Inserted',
                'data' => [
                    'educator_id' => $User_id,
                    'study_material_id' => $Live_id,
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
